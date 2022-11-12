import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [name, job] = ['lobodan', 'web developer'];
    const [nameArray, jobArray] = [name.split(''), job.split('')];

    //This hook is for the hover effect, but it's causing a bug
    //check it later

    useEffect(()=>{
        let timeoutId = setTimeout(()=>{
            setLetterClass('text-animate-hover');
        }, 4000);

        return ()=>{
            clearTimeout(timeoutId);
        }
    }, [])

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />

                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                </h1>
                <h2>Frontend Developer / JavaScript Expert/ YouTuber</h2>
                <Link to='/contact' className="flat-button" >CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
}

export default Home;