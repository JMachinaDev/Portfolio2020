import React from 'react';

const testimonials = [
    {
        name: 'Andrea Davids',
        from: '- Marshall, MI',
        description: '"... Josue is a very talented, hard-working, responsible person"',
        image: 'https://i.postimg.cc/8cYK2Dhr/davids-20-2.jpg',
        link: '',
        linkTitle: '',
        letter: 'https://docdro.id/rOLlblK',
        letterTitle: '-Letter of Recommendation',
    },
    {
        name: 'Ben Pond',
        from: '- Eau Claire, MI',
        description: '"Josue is a ... fast learner ... goes the extra mile"',
        image: 'https://cdn.discordapp.com/attachments/647847532453429268/783810349496401981/20201202_164210.jpg',
        link: '',
        linkTitle: '',
        letter: 'https://docdro.id/7Py2qe9',
        letterTitle: '-Letter of Recommendation'
    },
    {
        name: 'Enrique Perez',
        from: '- SouthBend, IN',
        description: '"Josue is a ... extremely focused person, and has accomplished anything he puts his mind to "',
        image: 'https://cdn.discordapp.com/attachments/647847532453429268/783820861688774686/20201202_172407.jpg',
        link: 'https://www.linkedin.com/in/enrique-perez-6a8687194',
        linkTitle: '-LinkedIn Profile',
        letter: 'https://docdro.id/xxhHwsI',
        letterTitle: '-Letter of Recommendation'
    },
    {
        name: 'Anthony Mata',
        from: '- Niles, MI',
        description: '"Josue is a ... highly motivated ... not afraid to ask for help"',
        image: 'https://media.discordapp.net/attachments/647847532453429268/783819653809700904/Resized_FB_IMG_1488121588888.jpeg?width=351&height=468',
        link: '',
        linkTitle: '',
        letter: '',
        letterTitle: ''
    }
]
const linkStyle = {
    gridArea: 'monialLink', 
    margin: 0, color: 'var(--bg)', 
    textShadow: 'none', 
    fontSize: '14px', 
    textDecoration: 'underline'
}

function Monials ({testimonial}) {
    return (
        <div className="testimonials" >

            <img className="monialImage" style={{
                backgroundImage: `url('${testimonial.image}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%', 
                width: '75px', 
                height: '75px',
                gridArea: 'monialImage',
                padding: '0px'
                }} alt=""></img>
            <span id="arrow">
            <p className="monialDescription" style={{gridArea: 'monialDescription'}} >{testimonial.description}</p>
            <h5 className="monialName" style={{gridArea: 'monialName', margin: 0, color: 'var(--bg-accent)', textShadow: '-1px 1px 1px var(--bg)'}}>{testimonial.name}</h5>
            <h6 className="monialFrom" style={{gridArea: 'monialFrom', margin: 0, color: 'var(--bg)'}}>{testimonial.from}</h6>
            <a className="monialLink" style={linkStyle} href={testimonial.letter} target="_blank" rel="noreferrer">{testimonial.letterTitle}</a>
                <br></br>
            <a className="monialLink" style={linkStyle} href={testimonial.link} target="_blank" rel="noreferrer">{testimonial.linkTitle}</a>

            </span>

        </div>
    )
}


export default function Testimonials () {
    return (
        <div className="testimonialBox" id="testimonialId">
            {/*container*/}
            <div className="testimonialSection" >
            {/*section*/}

                <div >
                    <div className="testimonialsTitle" >Testimonials</div>
                    <span className="monialSection" style={{gridArea: 'testimonials'}}>
                        {[...testimonials].map((testimonial) => {
                            return <Monials testimonial={testimonial} />;
                        })}
                    </span>
                </div>

            </div>
        </div>
        
    )
}