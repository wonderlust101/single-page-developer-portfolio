import "./Skills.scss";

type skill = {
    skill: string;
    experience: number;
}

const skills: skill[] = [
    {
        "skill"     : "HTML",
        "experience": 4
    },
    {
        "skill"     : "CSS",
        "experience": 4
    }, {
        "skill"     : "Javascript",
        "experience": 4
    }, {
        "skill"     : "Accessibility",
        "experience": 4
    }, {
        "skill"     : "React",
        "experience": 3
    }, {
        "skill"     : "Sass",
        "experience": 3
    },
];

export default function Skills() {

    return (
        <section className='skills'>
            <h2 className='sr-only'>Some of my skills includes</h2>
            <ul className='skills__list'>
                {skills.map((skill)=> (
                    <li className='skills__skill'>
                        <h3>{skill.skill}</h3>
                        <p>{skill.experience === 1 ? `${skill.experience} Year`: `${skill.experience} Years`} of Experience</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}