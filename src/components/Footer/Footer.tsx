import React, {useState} from "react";
import GithubIcon from "../Icons/GithubIcon";
import FrontendMentorIconIcon from "../Icons/FrontendMentorIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";

import Form from "../Form";
import TextInput from "../Form/TextInput";

import "./Footer.scss";

export default function Footer() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<string>("");


    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMessage(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Basic validation
        if (!name || !email || !message) {
            setStatus("Please fill out all fields");
            return;
        }

        setStatus("");
        
        console.log("Form submitted with data:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <footer className="footer grid-bleed">
            <section className="footer__content">
                <div className="footer__form">
                    <div className="footer__text">
                        <h2 className="footer__header">Contact</h2>
                        <p className="footer__body">
                            I would love to hear about your project and how I could help. Please
                            fill in the form, and I’ll get back to you as soon as possible.
                        </p>
                    </div>

                    <Form
                        buttonVariant="button--green"
                        submitLabel="Send Message"
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Name"
                            isRequired={true}
                            value={name}
                            onChange={handleNameChange}></TextInput>

                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            isRequired={true}
                            value={email}
                            onChange={handleEmailChange}></TextInput>

                        <TextInput
                            id="name"
                            type="text"
                            placeholder="Message"
                            isRequired={true}
                            value={message}
                            onChange={handleMessageChange}></TextInput>
                    </Form>

                </div>

                <hr/>

                <section className="footer__links">
                    <h1>adamkeyes</h1>

                    <div>
                        <ul className="footer__nav">
                            <GithubIcon/>
                            <FrontendMentorIconIcon/>
                            <LinkedInIcon/>
                            <TwitterIcon/>
                        </ul>
                    </div>
                </section>
            </section>
        </footer>
    );
}