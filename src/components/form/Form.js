import './Form.component.styles.scss';
import React from 'react';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const newState = {
            [event.target.name]: event.target.value
        }
        this.setState(newState);
    }
    handleSubmit(event) {
      //   alert('Recipe Submited');
        event.preventDefault();
        console.log('Submit', this.state);
        // this.props.onFormCreate(this.state);
        this.setState({
            name: '',
            email: '',
            message: '',
          });
    }
    render(){
    return (
        <>
            <div className="div-container">
                <h3 className="git">Get in Touch</h3>
                <text className="git-subtext">Please fill out the quick form and I will be in touch with you!</text>
                <form onSubmit={this.handleSubmit} className="form">
                    <fieldset>
                        <div className="form-input">
                            <label for="exampleInputEmail1">Name: </label>
                            <input name="title" className="input" type="text" onChange={this.handleChange} placeholder="Name"/>
                        </div>
                        <br />
                        <div className="form-input">
                            <label for="exampleInputUsername">Email: </label>
                            <input name="author" className="input" type="text" onChange={this.handleChange} placeholder="Email"/>
                        </div>
                        <br />
                        <div className="form-input">
                            <label for="exampleTextarea">Message: </label>
                            <textarea name="description" className="input" type="text" id="exampleTextarea" placeholder="Message" onChange={this.handleChange} rows="3"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        <div className="social-media">
                            <h3>Connect with me</h3>
                            <h2>LinkedIn:</h2>
                            <a href className="sm-link">www.linkedin.com</a>
                            <h2>Instagram:</h2>
                            <a href className="sm-link">www.instagram.com</a>
                            <h2>FaceBook:</h2>
                            <a href className="sm-link">www.facebook.com</a>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="background-div"></div>
        </>
    )
  }
}