import React, { useState } from 'react'
import './styles.css'
import { validateEmail } from '../utils/application.utils';

function ContactForm() {
    const [nameValue, handleNameChange] = useState('');
    const [emailValue, handleEmailChange] = useState('');
    const [messageValue, handleMessageChange] = useState('');
    const [emailError, handleEmailError] = useState(false);

    const submitForm = () => {
        if (
            nameValue.length !== 0
            && emailValue.length !== 0
            && validateEmail(emailValue)
            && messageValue.length !== 0
        ) {
            if (window.Email) {
                const emailBody = `
                Sender: ${nameValue}\n
                Email: ${emailValue}\n
                Message: ${messageValue}
                `
                window.Email.send({
                    Host: "smtp.gmail.com",
                    Username: "solansmtp@gmail.com",
                    Password: "solan123$",
                    To: 'solan.linjeforening@gmail.com',
                    // To: 'solansmtp@gmail.com',
                    From: 'solansmtp@gmail.com',
                    Subject: "Solan Feedback",
                    Body: emailBody,
                })
                    .then(() => alert("Din melding er sendt"))
                    .catch(err => alert("Det er noe feil, prøv igjen"))
            }
        } else {
            alert('Fyll alle boksene og prøv igjen');
        }
    }

    return (
        <div className="main-form">
            <div className="content-div">
                <div className="contact-us-description">
                    <p className="heading"> Ta kontakt </p>
                    <p> Send ditt spørsmål, så skal vi prøve å svare innen 1-2 dager </p>
                </div>
                <div className="contact-details">
                    <p className="justify-content-center margin-top"> NAVN </p>
                    <input
                        type="text"
                        value={nameValue}
                        placeholder="Navn"
                        className="text-fields"
                        onChange={(e) => handleNameChange(e.target.value)}
                    />
                    <p className="justify-content-center margin-top"> EPOST </p>
                    <input
                        type="text"
                        value={emailValue}
                        placeholder="ole@domene.com"
                        className="text-fields"
                        onChange={(e) => {
                            handleEmailChange(e.target.value)
                            handleEmailError(e.target.value === '' ? false : !validateEmail(e.target.value))
                        }}
                        style={{
                            borderBottom: emailError && '1px solid rgb(255, 0, 0)'
                        }}
                    />
                    <p className="justify-content-center margin-top"> MELDING </p>
                    <textarea
                        placeholder="Din spørsmål"
                        className="text-fields"
                        value={messageValue}
                        onChange={(e) => {
                            handleMessageChange(e.target.value)
                        }}
                    />
                    <button className="submit-button" onClick={submitForm}>
                    SEND MELDING
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
