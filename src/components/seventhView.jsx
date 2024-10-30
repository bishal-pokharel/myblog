import React, {useState, useEffect} from "react";

const SeventhView = ({isActive, onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `Message`;

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
        <div className="view sevenView">
        <h1>{text}</h1>
        {show && (
            <div className="thankyou-container">
            <div className="thankyou-message">
                <p>Thank you for visiting my site! I truly appreciate your feedback, so please feel free to share any thoughts you have.</p>
                
            </div>
        </div>
        )}
        </div>
    )
}

export default SeventhView;