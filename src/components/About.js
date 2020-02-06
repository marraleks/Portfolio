import React from 'react'
import './About.css'

const About = () => {
    return(
        <main>
            <div className='AboutContainer animated slideInRight'>
            <div className='about'>
                <h3>About me</h3>
                <h4>Marius Aleksander Sletten</h4>
                <p>UX designer som liker Front-end development litt ekstra godt. Det høres kanskje kjedelig ut for mange, men det er ett eller annet ved det å sitte flere timer i strekk og bare glemme tiden. Frustrerende er det også, men når du løser utfordringene føles det ekstra godt. Kan minne litt om puslespill.
</p><p>
I en alder av 25 har jeg allerede jobbet 10 år som leder i kiwi. Dette har lært meg veldig mye. Det har gitt meg den selvtilliten og erfaringen jeg trenger for å være en god leder. På en annen side har det også gitt meg forståelse for hvordan et mindre team kan jobbe godt sammen. Spesielt viktig er det å lytte og kommunisere til hverandre da. Noe jeg ser på som en verdifull ferdighet som UX designer.</p>
<p>
På fritiden er jeg veldig stille og rolig av meg. Har blitt veldig glad i styrketrening, mye takket være min eldre bror. Videre syntes jeg det er gøy å spille med venner, spesielt lagspill som krever kommunikasjon. Føler det gir meg mer enn bare tidsfordriv.</p>
            </div>
            <div className='contact'>
                <h3>Contact me</h3>
                <p>marraleks@hotmail.com</p>
                <p>+47 97 17 97 98</p>
                <h3>Find me on</h3>
                    <a href='https://www.linkedin.com/in/marius-aleksander-sletten-92aa3716a/' target="_blank" rel="noopener noreferrer">linkedin</a>
                    <a href='https://github.com/marraleks' target="_blank" rel="noopener noreferrer">github</a>
            </div>
            </div>
        </main>
    )
}

export default About