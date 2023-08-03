import React from 'react';
import './AboutMe.css';
import resume from '../jenniferscott-2023.pdf';


function reveal() {
    const reveals = document.querySelectorAll('.fade-in');

    for (var i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);

const AboutMe = () => {
    return (
        <div name="portfolio" className="box" id="about">

        <div name="home" className="h-screen w-full fade-in">
            <div className="px-4">
                <h5 className="paragraph">
                    <b>My name is Loni Scott.</b> <br/><br/>
                    I am a Full Stack Web Developer with professional design experience.
                    With my focus being on the front end, I am passionate about coding visually pleasing and user-friendly sites/apps.
                    I have a strong foundation in <b>HTML, CSS, & Javascript</b>, as well as experience with various back end technologies. 
                    <br/><br/>
                    <a className="btn" href="https://github.com/loniscott" style={{fontSize: "18px"}}>Github</a>
                    <a className="btn" href={resume} style={{fontSize: "18px"}}>Resume</a>
                    <a className="btn" href="mailto:loni.scott9@yahoo.com" style={{fontSize: "18px"}}>Email</a>
                </h5>
            </div>
        </div>

        <div className="flex h-full fade-in skills">
            <div >
            <div className="bg">
                <i className="devicon-angularjs-plain" alt="Angular" title="Angular"></i>
                <i className="devicon-bootstrap-plain" alt="Bootstrap" title="Bootstrap"></i>
                <i className="devicon-css3-plain" alt="CSS" title="CSS"></i>
                <i className="devicon-github-original" alt="Github" title="Github"></i>
            </div>
            <div className="bg">
                <i className="devicon-heroku-original" alt="Heroku" title="Heroku"></i>
                <i className="devicon-html5-plain" alt="HTML" title="HTML"></i>
                <i className="devicon-javascript-plain" alt="JavaScript" title="JavaScript"></i>
                <i className="devicon-jquery-plain" alt="jQuery" title="jQuery"></i>
            </div>
            <div className="bg">
                <i className="devicon-mongodb-plain" alt="MongoDB" title="MongoDB"></i>
                <i className="devicon-nodejs-plain" alt="Nodejs" title="Nodejs"></i>
                <i className="devicon-npm-original-wordmark" alt="NPM" title="NPM"></i>
                <i className="devicon-postgresql-plain" alt="Postgresql" title="Postgresql"></i>
            </div>
            <div className="bg">
                <i className="devicon-python-plain" alt="Python" title="Python"></i>
                <i className="devicon-react-original" alt="React" title="React"></i>
                <i className="devicon-sass-original" alt="Sass" title="Sass"></i>
                <i className="devicon-vscode-plain" alt="VSCode" title="VSCode"></i>
        </div>
        </div>
        </div>
   
        </div>
    )
};

export default AboutMe;