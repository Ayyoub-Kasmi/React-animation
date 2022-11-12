import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = ()=> {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(()=>{
        let timeoutId = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        }, 3000);

        return ()=>{
            clearTimeout(timeoutId);
        }
    }, []);

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['About me'.split('')]}
                        idx={15}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio cupiditate ullam, beatae laudantium velit consequatur laborum praesentium quod magni nulla consequuntur, rem aperiam neque dolor officia perspiciatis soluta eum at?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eum id at consequuntur quod quis nobis cumque facilis inventore ad adipisci veritatis, eos debitis voluptates nam maiores harum a minus.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ullam ipsa, recusandae sint, eligendi cum voluptatem velit ad eos id exercitationem. Recusandae animi atque consequatur odit explicabo natus necessitatibus sunt!
                </p>

            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
                    </div>
                    
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                    </div>

                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>

                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                    </div>

                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;