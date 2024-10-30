import React, {useState, useEffect} from "react";

const FourthView = ({isActive, onButtonClick }) => {

    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const fullText = `Experience Gained in My Programming Journey`;

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

    const companyDetails = [
        {
            "companyName" : "OLE Nepal",
            "companyimg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZtm00SThhJV3rmfTBTyj5MUhPmtfXZ85Ow&s",
            "companylink" : "https://olenepal.org/",
            "classname" : 'ole'
        },
        {
            "companyName" : "Himalayan Techies",
            "companyimg" : "https://himalayantechies.com/wp-content/uploads/2019/07/HT-logo.png",
            "companylink" : "https://himalayantechies.com/",
            "classname" : 'techies'
        },
        {
            "companyName" : "Oxpan Mycrosis",
            "companyimg" : "https://oxpanmicrosys.com/static/media/OmsLogo2.a7f1d85e0308fc203476.png",
            "companylink" : "https://oxpanmicrosys.com/",
            "classname" : 'oxpan'
        }
    ]
    const programmingLanguage = ["JavaScript", "HTML", "CSS", "JQuery", "Frontend Development", "React", "Next Js", "Node Js", "Flutter", "GSAP Animation", "JSON", "API", "XML", "Redux", "Apache Cordova", "Google Analytics", "Wagtail CMS", "PWAs", "Bootstrap", "Material UI", "Tailwind", "SASS", "Wordpress", "GIT", ];
    return(
        <div className="view">
        <h1>{text}</h1>
        {show && (
            <>
            <div className="my-socialmedia">
                <div className="myproject-details">
                    <h2>My Experience</h2>
                    <div className="project-list">
                        {companyDetails.map((company, index) => {
                            return(
                            <>
                            <div key={index} className="company-block">
                                {/* <div className="company-logo"> */}
                                <img className={company.classname} src={company.companyimg} />
                                {/* </div> */}
                                <h2>{company.companyName}</h2>
                                <a href={company.companylink} target="_blank" >Visit Website</a>
                            </div>
                            </>
                            )
                        })}
                    </div>
                </div>
        </div>
        <div className="my-socialmedia">
                <div className="myproject-details">
                    <h2>Language I Used</h2>
                    <div className="planguage-list">
                        {programmingLanguage.map((language, index) => {
                            return(
                            <>
                            <div key={index} className="planguage-block">
                                {/* <div>
                                <img src={company.companyimg} />
                                </div> */}
                                <p>{language}</p>
                                {/* <a href={company.companylink} target="_blank" >Visit Website</a> */}
                            </div>
                            </>
                            )
                        })}
                    </div>
            </div>
        </div>
        <button className="clickme" onClick={onButtonClick}>Find me in Social Media</button>
        </>
        )}

        </div>
    )
}

export default FourthView;