import React, {useState, useEffect} from "react";

const SixthView = ({isActive, onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `Reach Out Anytime for Professional Discussions!`;

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
        <div className="view sixthView">
        <h1>{text}</h1>
        {show && (
            <div className="contactme">
            <div className="aboutme-details">
                <h2>Contact Me</h2>
                <p>Email : bishalpokhrel79@gmail.com</p>
                <p><address>Kathmandu, Nepal</address></p>
                <p>Phone No: +977 9817355558</p>
            </div>
            <div className="contactme-img">
                <img src="https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-calling-telephone-line-icon-vector-png-image_1885981.jpg" />
            </div>
        </div>
        )}
        
        {show && (
            <button className="clickme" onClick={onButtonClick}>Last Mesaage from Me!</button>
        )}
        </div>
    )
}

export default SixthView;