import heroImageDesktop from "/images/image-profile-desktop.webp";
import heroImageTablet from "/images/image-profile-tablet.webp";
import heroImageMobile from "/images/image-profile-mobile.webp";

import "./Hero.scss";
import Button from "../../../components/Button";

export default function Hero() {

    return (
        <section className="hero">
            <div className='hero__main'>
                <div className='hero__text'>
                    <h2 className='hero__header'>Nice to meet you! I'm <span className="hero__text--underline">Adam Keyes.</span></h2>
                    <p className='hero__body'>Based in the UK, I’m a front-end developer passionate about building accessible web apps that
                        users love.</p>
                </div>
                
                <Button variant="button--green">Contact Me</Button>
            </div>

            <picture className='hero__image'>
                <source srcSet={heroImageDesktop} media={"(min-width: 80rem)"}/>
                <source srcSet={heroImageTablet} media={"(min-width: 48rem)"}/>
                <img src={heroImageMobile} alt=""/>
            </picture>
        </section>
    );
}