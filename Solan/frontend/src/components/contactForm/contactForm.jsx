import React, { Component } from 'react'
import './styles.css'
import { validateEmail } from '../utils/application.utils';

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            nameValue: '',
            emailValue: '',
            emailError: false,
        }
    }

    handleNameChange = e => {
        this.setState({
            nameValue: e.target.value,
        })
    }

    handleEmailChange = e => {
        this.setState({
            emailValue: e.target.value,
            emailError: e.target.value === '' ? false : !validateEmail(e.target.value),
        })
    }
    render() {
        const {
            nameValue,
            emailValue,
            emailError,
        } = this.state;
        return (
            <div className="main-form">
                <div className="content-div">
                    <div className="contact-us-description">
                        <p className="heading"> Contact Us </p>
                        <p> Send your question and we will try to answer within 1-2 days </p>
                    </div>
                    <div className="contact-details">
                        <p className="justify-content-center margin-top"> NAME </p>
                        <input
                            type="text"
                            value={nameValue}
                            placeholder="Name"
                            className="text-fields"
                            onChange={this.handleNameChange}
                        />
                        <p className="justify-content-center margin-top"> EMAIL </p>
                        <input
                            type="text"
                            value={emailValue}
                            placeholder="abc@xyz.com"
                            className="text-fields"
                            onChange={this.handleEmailChange}
                            style={{ 
                                borderBottom: emailError && '1px solid rgb(255, 0, 0)'
                            }}
                        />
                        <p className="justify-content-center margin-top"> MESSAGE </p>
                        {/* <input
                            type="text"
                            placeholder="Message"
                            className="text-fields"
                        /> */}
                        <textarea
                            placeholder="Your questions"
                            className="text-fields"
                        />
                        <button className="submit-button">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// function Contact() {
//   return (
//     <div className="contact-home-grid">
//       <div className="contact_boxspacer"></div>
//       <div className="contact_A">
//         <div className="contact_banner_image_text">
//           <h1>Kontakt Oss</h1>
//         </div>
//       </div>

//       <div className="contact_B"></div>
//     </div>
//   )
// }

export default ContactForm
