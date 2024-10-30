import React, {useState, useEffect} from "react";

const SecondView = ({isActive, onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `You can find a few Words ABOUT ME!`;

    useEffect(() => {
        if (isActive) {
        let index = 0;

        const typeCharacter = () => {
            if (index < fullText.length) {
                setText(fullText.slice(0, index + 1));
                index++;
                setTimeout(typeCharacter, 60); // Adjust typing speed here
            }else{
                setShow(true)
            }
        };

        typeCharacter(); // Start the typing effect
    }
    }, [isActive]);
    // const handleClick = () =>{
    //     window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    // }
    return(
        <div className="view secondview">
        <h1>{text}</h1>
        {show && (
            <div className="aboutme">
            <div className="aboutme-details">
                <h2>About Me</h2>
                <p>Hello! I’m Bishal Pokharel, a software developer from Biratnagar, currently working with OLE Nepal, Kathmandu. With an educational background in Information Technology, I bring a passion for creating innovative and impactful solutions to my work.
                    <br></br><br></br>
                    I’m driven by a commitment to learning and a love for technology, always exploring ways to bridge knowledge with practical, real-world applications. Whether it’s coding, problem-solving, or working on meaningful projects, I’m dedicated to making a positive difference through my work.
                </p>
            </div>
            <div className="aboutme-image">
                <img src="/src/assets/team-1.jpg" />
            </div>
        </div>
        )}
        
        {show && (
            <button className="clickme" onClick={onButtonClick}>Explore My Projects</button>
        )}
        </div>
    )
}

export default SecondView;