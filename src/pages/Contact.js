import React from "react"
import emailjs from "emailjs-com";
import './Contact.css'
function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_0awn3lm', 'template_qh0ou94', e.target, 'user_tLzJLPBPoX1HnAZOoYDL2')
            .then((result) => {
                console.log(result.text);
                alert('Send mail SUCCESS!')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <>
            <h1 style={{'paddingLeft': '20px'}} >Contact page</h1>
            <h4 style={{'paddingLeft': '20px'}} >If you have message to us, please give me a feedback...</h4>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="">
                        <div className="name">
                            <input type="text" className="input-name" placeholder="Name" name="name" />
                        </div>
                        <div className="email">
                            <input type="email" className="input-email" placeholder="Email Address" name="email" />
                        </div>
                        <div className="subject">
                            <input type="text" className="input-subject" placeholder="Subject" name="subject" />
                        </div>
                        <div className="message">
                            <textarea className="input-message" cols="50" rows="10" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="btn">
                            <input type="submit" className="btn-send" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Contact