import React, { useState } from 'react'
import './styles.css'
import { validateEmail } from '../utils/application.utils';

function ContactForm() {
    const [nameValue, handleNameChange] = useState('');
    const [emailValue, handleEmailChange] = useState('');
    const [emailError, handleEmailError] = useState(false);

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
                        onChange={(e) => handleNameChange(e.target.value)}
                    />
                    <p className="justify-content-center margin-top"> EMAIL </p>
                    <input
                        type="text"
                        value={emailValue}
                        placeholder="abc@xyz.com"
                        className="text-fields"
                        onChange={(e) => {
                            handleEmailChange(e.target.value)
                            handleEmailError(e.target.value === '' ? false : !validateEmail(e.target.value))
                        }}
                        style={{ 
                            borderBottom: emailError && '1px solid rgb(255, 0, 0)'
                        }}
                    />
                    <p className="justify-content-center margin-top"> MESSAGE </p>
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

export default ContactForm
