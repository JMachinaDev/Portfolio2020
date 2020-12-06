import  React from 'react';
 // https://reactjsexample.com/3d-cover-flow-in-react/

const slides = [
  {
    title: "MachinaChat",
    url: "http://machinachat-env.eba-mme2rhnw.us-east-2.elasticbeanstalk.com/",
    git: "https://github.com/JMachinaDev/MachinaChat",
    image:
      "https://i.postimg.cc/N0NpTbpL/machinachat.png",
  },
  {
    title: "BookHero",
    url: "https://book-hero-project.s3.us-east-2.amazonaws.com/Library+Proj/main.html",
    git: "https://github.com/killsocks/Library" ,
    image:
      "https://i.postimg.cc/xjzVzvVq/bookhero.png",
  },
  {
    title: "Etch-A-Sketch",
    url: "https://etch-sketch-project.s3.us-east-2.amazonaws.com/EtchASketch/etchsketch.html",
    git: "https://github.com/killsocks/EtchASketch",
    image:
      "https://i.postimg.cc/fbJrhsw-k/etchsketch.png",
  },
  {
    title: "Lazy Calculator",
    url: "https://lazy-calculator-project.s3.us-east-2.amazonaws.com/Calculator/calculator.html",
    git: "https://github.com/killsocks/Calculator-Proj",
    image:
      "https://i.postimg.cc/Yqr8H7Rk/lazycalc.png",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h4 className="slideTitle">{slide.title}</h4>
          <a href={slide.url} target="_blank" rel="noreferrer" className="slideLink">-Site Link</a>
          <br></br>
          <a href={slide.git} target="_blank" rel="noreferrer" className="slideLink">-Github Link</a>

        </div>
      </div>
    </div>
  );
}


export default function Slider() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slideContainer" id="projectId">
      <div className="slideBoxTitle" id="slideLinkSection">Projects</div>
      <div className="slideBox">
        <div className="slides" >
          <button className="slideButton" id="slidePrev" onClick={() => dispatch({ type: "PREV" })}>‹</button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}

          <button className="slideButton" id="slideNext" onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>
    </div>
  );
}



