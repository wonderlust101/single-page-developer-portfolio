import React, {useState} from "react";
import GithubIcon from "../Icons/GithubIcon";
import FrontendMentorIconIcon from "../Icons/FrontendMentorIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";

import Form from "../Form";
import TextInput from "../Form/TextInput";
import TextArea from "../Form/TextArea";

import "./Footer.scss";

const isEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Footer() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [nameStatus, setNameStatus] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    const [messageStatus, setMessageStatus] = useState("");


    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Run validation checks
        const isNameInvalid = inputVerification(!name, setNameStatus);
        const isEmailEmpty = inputVerification(!email, setEmailStatus);
        const isEmailInvalid = inputVerification(!isEmail(email), setEmailStatus);
        const isMessageInvalid = inputVerification(!message, setMessageStatus);

        // If any validation fails, return early
        if (isNameInvalid || isEmailEmpty || isEmailInvalid || isMessageInvalid) {
            return;
        }

        // Submit logic - clear the form after successful validation
        setName("");
        setEmail("");
        setMessage("");
        
        setNameStatus("");
        setEmailStatus("");
        setMessageStatus("");
    }

    function inputVerification(condition: boolean, status: React.Dispatch<React.SetStateAction<string>>): boolean {
        if (condition) {
            status("error");
            return true; // Indicate an error
        } else {
            status("success");
            return false; // No error
        }
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
                            status={nameStatus}
                            icon='./images/error-icon.svg'
                            errorText='Sorry, invalid format here'
                            onChange={handleNameChange}></TextInput>

                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Email"
                            isRequired={true}
                            value={email}
                            status={emailStatus}
                            icon='./images/error-icon.svg'
                            errorText='Sorry, invalid format here'
                            onChange={handleEmailChange}></TextInput>

                        <TextArea
                            id="name"
                            placeholder="Message"
                            isRequired={true}
                            value={message}
                            status={messageStatus}
                            errorText='Sorry, invalid format here'
                            icon='./images/error-icon.svg'
                            onChange={handleMessageChange}></TextArea>
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