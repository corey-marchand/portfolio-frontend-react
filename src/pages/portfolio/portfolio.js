import Nav from '../../components/nav/Nav';
import React from 'react';
import photo from '../../assets/portfolio-wireframe.png';

export default class Portfolio extends React.Component{
    render(){
        return(
            <>
                <div className="wrap">
                    <div className="card">
                        <img src={photo} alt="img" width="50%" height="25%"/>
                        <div className="container">
                            <h4><b>Lionel Messi</b></h4>
                            <p>Footballer</p>
                            <p>Argentina</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}