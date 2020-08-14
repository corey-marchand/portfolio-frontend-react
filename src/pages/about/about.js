import React from 'react';
import './about.component.styles.scss';

export default function About() {
    return (
        <>
            <h2 className="about-header">ABOUT</h2>
            <div className="about-information-container">
                <div className="text-section">
                    <h2 className="about-header">COREY MARCHAND</h2>
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</text>
                </div>
                <div className="toolbox-section">
                    <h3 className="toolbox-title">TOOLBOX</h3>
                    <ul className="toolbox-list">
                        <li className="toolbox-list-item">Tool</li>
                        <li className="toolbox-list-item">Tool</li>
                        <li className="toolbox-list-item">Tool</li>
                        <li className="toolbox-list-item">Tool</li>
                        <li className="toolbox-list-item">Tool</li>
                    </ul>
                </div>
                <div className="skill-section">
                    <h3 className="skill-title">SKILLSET</h3>
                    <ul>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                        <li>Skill</li>
                    </ul>
                </div>
            </div>
        </>
    )
  }