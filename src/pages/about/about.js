import React from 'react';
import './about.component.styles.scss';

export default function About() {
    return (
        <>
            <h2 className="about-header">ABOUT</h2>
            <div className="about-information-container">
                <div className="text-section">
                    <h2 className="text-header">COREY MARCHAND</h2>
                    <text>Im a big believer that a person cannot be defined by their failures.  Throughout my young life, I have failed, overcome, and succeeded. Due to this, I am a big believer that failures mold a person.  Before become a software developer, I was working in sales.  It was the same thing everyday, and got tired of it quickly.  At the time, I decided to leave college, and pursue making money in the moment without sacficing the time to learn valuable skills.  The older I get, the more I realize that you constantly need to learn new things to stay ahead in life.  This is why I believe I make a great developer.  I work until I figure out the problem at hand, and will continue to do so for whatever company or person that decides to employ me.  Currently, I am refining my skills in SCSS, SEO, and graphic design and will continue until I feel like I have mastered all of these different skills.</text>
                </div>
                <div className="toolbox-section">
                    <h3 className="toolbox-title">TOOLBOX</h3>
                    <ul className="toolbox-list">
                        <li className="toolbox-list-item">JavaScript</li>
                        <br/>
                        <li className="toolbox-list-item">React</li>                        
                        <br/>
                        <li className="toolbox-list-item">NextJs</li>
                        <br/>
                        <li className="toolbox-list-item">Python</li>
                        <br/>
                        <li className="toolbox-list-item">Django</li>
                        <br/>
                        <li className="toolbox-list-item">CSS</li>                        
                        <br/>
                        <li className="toolbox-list-item">SCSS</li>                        
                        <br/>
                    </ul>
                </div>
                <div className="skill-section">
                    <h3 className="skill-title">SKILLSET</h3>
                    <ul className="skillset-list">
                        <li className="toolbox-skill-item">Communication</li>
                        <br/>
                        <li className="toolbox-skill-item">Disciplined</li>
                        <br/>
                        <li className="toolbox-skill-item">Ambitious</li>
                    </ul>
                </div>
            </div>
        </>
    )
  }