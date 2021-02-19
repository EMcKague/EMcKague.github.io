// import React, { Component } from 'react';
import '../css/aboutMe.css'
import '../css/twoProjects.css'
import '../css/contact.css'
import gitLogo from '../images/GitHub-Mark.png'
import twitterLogo from '../images/2021 Twitter logo - black.png'
import gmailLogo from '../images/gmail.png'
import XiangqiBoard from '../images/Xiangqi_Board.png'
import Shell from '../images/Shell.jpeg'

function Body({selectedMode}:any) {

        if (selectedMode === "aboutMe"){
            return (
                <div>
                    <div className="container-AboutMe">
                        <div className="aboutMe-text"> 
                        <p>
                        I'm a Software engineer that will be graduating from Oregon State University 
                        in Fall 2021. I've been enjoying working with Python, React, C, and mySQL.
                        <br></br> 
                        <br></br>
                        When I'm not programming my distractions include drumming, backpacking, and CrossFit. 
                        </p>
                        </div> 
                    </div>
                </div>
            )
        }
        if (selectedMode === "projects"){
            return (
                <div>
                    <div className="container-Projects">
                        <div className="project1">
                            <span className="project1-image"><a href="https://github.com/EMcKague/Xiangqi"><img src={XiangqiBoard} alt="Xiangqi Game Board"></img></a></span>
                            <span className="project1-text"><a href="https://github.com/EMcKague/Xiangqi">Chinese Chess in Python</a></span>
                        </div>
                        <div className="project2"> 
                            <span className="project2-image"><a href="https://github.com/EMcKague/smallsh"><img src={Shell} alt="Tortoise Shell"></img></a></span>
                            <span className="project2-text"><a href="https://github.com/EMcKague/smallsh">A custom shell in C</a></span>
                        </div>
                        <div className="project3"> 
                            <span className="project3-image"><a href=""><img src="" alt=""></img></a></span>
                            <span className="project3-text"><a href="">PLACEHOLDER TEXT</a></span>
                        </div>
                    </div>
                </div>
            )
        }
        if (selectedMode === "contact"){
            return (
                <div>
                    <div className="container-Contact">
                        <div className="github-logo-link"><a href="https://github.com/EMcKague"><img src={gitLogo} alt="Github Logo"></img></a></div>
                        <div className="twitter-logo-link"><a href="https://twitter.com/DevEvanM"><img src={twitterLogo} alt="Twitter Logo"></img></a></div>
                        <div className="gmail-logo-link"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=evanm.dev@gmail.com&su=SUBJECT"><img src={gmailLogo} alt="Gmail Logo"></img></a></div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="Uh-oh"> Uh oh! You shouldn't be seeing this. </div>
            </div>
        )
        
    }
 

export default Body;