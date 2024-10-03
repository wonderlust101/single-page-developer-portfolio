import GithubIcon from "../Icons/GithubIcon";
import FrontendMentorIconIcon from "../Icons/FrontendMentorIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import TwitterIcon from "../Icons/TwitterIcon";

import "./Header.scss";

export default function Header() {

    return (
        <header className='header grid-bleed'>
            <section className="header__content">
                <h1>adamkeyes</h1>

                <nav>
                    <ul className="header__nav">
                        <GithubIcon/>
                        <FrontendMentorIconIcon/>
                        <LinkedInIcon/>
                        <TwitterIcon/>
                    </ul>
                </nav>
            </section>
        </header>
    );
}