import React from 'react';
import './home.component.styles.scss';

export default class Home extends React.Component{
    render(){
        return(
            <>
                <div className="home-div-container">
                    <h2 className="home-title">COREY MARCHAND</h2>
                    <text className="home-under-text">Full-Stack Python/Javascript Developer</text>
                </div>
            </>
        )
    }
}