import {useEffect, useState} from "react";

const FirstView = ({ onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `Welcome to my SITE – discover more about us here!`;

    useEffect(() => {
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
    }, []);
    

    // const handleClick = () =>{
    //     window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    // }
    return(
        <div className="view firstview">
        <h1>{text}</h1>
        {show && (
            <button className="clickme" onClick={onButtonClick}> Click here to Know Me!</button>
        )}
        </div>
    )
}

export default FirstView;