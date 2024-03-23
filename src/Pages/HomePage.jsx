import React, { useEffect, useState } from 'react';
import '../CSS/HomePage.css';
import TextSection from '../Components/HomePageComponent';
import emailjs from 'emailjs-com';

class User {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    validateInputs() {
        return this.name && this.email && this.subject && this.message;
    }

    sendEmail() {
        if (!this.validateInputs()) {
            console.error("Incomplete form data");
            return;
        }

        const emailParams = {
            from_name: this.name,
            reply_to: this.email,
            to_email: 'stevenl.inbox@gmail.com',
            subject: this.subject,
            message: this.message
        };

        emailjs.send('service_a9ckl8u', 'template_bxahl04', emailParams, 'zUtvGpme6h3o320vv')
            .then(function() {
            }, function(error) {
                alert('Email sending failed!');
            });
    }
}

export default function HomePage() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;
    
        const user = new User(name, email, subject, message);
        user.sendEmail();    
        event.target.reset();
    };

    return (
        <div className="HomePageBody">
            <TextSection />
            <br />
            {showForm && (
                <form className="container gridItem animated" onSubmit={handleSubmit}>
                    <h1>Contact me</h1>
                    <div className="login">
                        <input type="text" className="input" name="name" placeholder="Your Name" required />
                        <input type="email" className="input" name="email" placeholder="Your Email Address" required />
                    </div>
                    <div className="subject">
                        <input type="text" className="input" name="subject" placeholder="Subjects" />
                    </div>
                    <div>
                        <textarea className="area" name="message" placeholder="Leave a Message"></textarea>
                    </div>
                    <button className="btn" type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}
