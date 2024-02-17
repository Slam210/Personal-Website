import React, { useEffect, useState } from 'react';
import '../CSS/HomePage.css';
import TextSection from '../Components/HomePageComponent';

export default function HomePage() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowForm(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="HomePageBody">
            <TextSection />
            <br />
            {showForm && (
                <form
                    className="container gridItem animated" // Add the 'gridItem' and 'animated' classes
                    action="https://formsubmit.co/stevenl.inbox@gmail.com"
                    method="POST"
                >
                    <h1>Contact me</h1>
                    <div className="login">
                        <input type="text" className="input" placeholder="Your Name" required />
                        <input
                            type="email"
                            className="input"
                            placeholder="Your Email Address"
                            required
                        />
                    </div>
                    <div className="subject">
                        <input type="text" className="input" placeholder="Subjects" />
                    </div>
                    <div className="msg">
                        <textarea className="area" placeholder="Leave a Message"></textarea>
                    </div>
                    <button className="btn">Send Message</button>
                </form>
            )}
        </div>
    );
}
