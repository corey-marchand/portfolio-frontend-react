import Nav from '../../components/nav/Nav';
import React from 'react';
import photo from '../../assets/portfolio-wireframe.png';
import './portfolio.component.styles.scss';

export default class Portfolio extends React.Component{
    render(){
        return(
            <>
                <div className="wrap">
                    <div className="card">
                        <img src={photo} alt="img" width="100%" height="100%"/>
                        <div className="container">
                            <h4><b>Foodies Journal</b></h4>
                            <p>Django/NextJs</p>
                            <p>Foodie Journal is a Web App that uses django for backend, and NextJs for the frontend.  It allows users to create their own account using authorization. Post recipes and view other recipes that users have posted themselves.</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="card">
                        <img src={photo} alt="img" width="75%" height="75%"/>
                        <div className="container">
                            <h4><b>Vegan Cosmetics</b></h4>
                            <p>Python</p>
                            <p>Vegan Cometics is a project that only works based out of the terminal.  Using plain python, it webscrapes multiple different websites for cosmetics, filters them based of key words, and allows users to view and save the products.</p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="card">
                        <img src={photo} alt="img" width="100%" height="100%"/>
                        <div className="container">
                            <h4><b>Case Hawk</b></h4>
                            <p>NodeJs</p>
                            <p>Case Hawk is a project that I worked on that managed a databases for a lawfirm.  Using NodeJs, it allowed members of that lawfirm to sign in and sync up their account to view and add key details pertaining to their cases. </p>
                        </div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="card">
                        <img src={photo} alt="img" width="100%" height="100%"/>
                        <div className="container">
                            <h4><b>Shiftometry</b></h4>
                            <p>Vanilla JavaScript</p>
                            <p>Shiftometry is a game that my team created when we first learned JavaScript. A simple game, yet addicting.  Utilizing different technoligies, you have to match the shape to the correct word as it moves faster and faster with each go.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}