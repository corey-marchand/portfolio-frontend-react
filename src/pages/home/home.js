import React from 'react';
import './home.component.styles.scss';

export default class Home extends React.Component{
    render(){
        return(
            <>
                <div className="home-div-container">
                    <h2 className="home-title">I'M COREY MARCHAND</h2>
                    <text className="home-under-text"> A Full-Stack Python/Javascript Developer</text>
                </div>
            </>
        )
    }
}