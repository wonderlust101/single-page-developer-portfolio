import "./Home.scss";
import Header from "../../components/Header";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div className="home">
            <Header/>

            <main className="grid-bleed">
                <Hero/>
                <Skills/>
                <Projects/>
            </main>
            
            <Footer/>
        </div>
    );
}