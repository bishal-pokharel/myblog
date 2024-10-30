import React, {useState, useEffect} from "react";

const ThirdView = ({isActive, onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `Here’s a Look at My Project Collection`;

    useEffect(() => {
        if (isActive) {
        let index = 0;

        const typeCharacter = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
                setTimeout(typeCharacter, 100); // Adjust typing speed here
            }else{
                setShow(true)
            }
        };

        typeCharacter(); // Start the typing effect
    }
    }, [isActive]);

    const projectDetails = [
        {
            "projectName" : "Travel Project",
            "projectimg" : "https://cdn-icons-png.flaticon.com/512/5219/5219577.png",
            "projectwritten" : "Frontend",
            "projectlink" : "https://github.com/bishal-pokharel/travel_project"
        },
        {
            "projectName" : "E-commerce Project",
            "projectimg" : "https://cdn-icons-png.flaticon.com/512/5219/5219577.png",
            "projectwritten" : "Frontend",
            "projectlink" : "https://github.com/bishal-pokharel/santosh-suppliers"
        },
        {
            "projectName" : "Disaster App",
            "projectimg" : "https://cdn-icons-png.flaticon.com/512/5219/5219577.png",
            "projectwritten" : "Flutter",
            "projectlink" : "https://github.com/bishal-pokharel/disaster-app/tree/master"
        },
        {
            "projectName" : "OLE Project",
            "projectimg" : "https://cdn-icons-png.flaticon.com/512/5219/5219577.png",
            "projectwritten" : "Frontend, Backend, Flutter",
            "projectlink" : "https://olenepal.org/digital-learning-solutions/"
        }
    ]
    return(
        <div className="view">
        <h1>{text}</h1>
        {show && (
            <div className="my-project">
                <div className="myproject-details">
                    <h2>My Projects</h2>
                    <div className="project-list">
                        {projectDetails.map((project, index) => {
                            return(
                            <>
                            <div key={index} className="project-block">
                                <img src={project.projectimg} />
                                <h2>{project.projectName}</h2>
                                <p>{project.projectwritten}</p>
                                <a href={project.projectlink} target="_blank" >Githib Link</a>
                            </div>
                            </>
                            )
                        })}
                    </div>
                </div>
        </div>
        )}
        {show && (
            <button className="clickme" onClick={onButtonClick}>Experience of Programming</button>
        )}
        </div>
    )
}

export default ThirdView;