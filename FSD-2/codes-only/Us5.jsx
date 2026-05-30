import { useState} from "react";

function Us5(){
    const[name,setName]=useState("LJ University");
    const[textColor,setColor]=useState("Red");
    const[hideText,setHide]=useState("React JS Hooks");
    const[buttontext,setButtonText]=useState("Hide");
    function showhide(){
        if(buttontext==="Hide"){
            setButtonText("Show");
            setHide("");
        }
        else{
            setButtonText("Hide");
            setHide("React JS Hooks")
        }
    }

    function ChangeName(){
        if(name==="LJ University"){
            setName("Welcome Students")
        }
        else{
            setName("LJ University")
        }
    }

    function ChangeColor() {
        if(textColor==="Red"){
            setColor("Blue")
        }
        else{
            setColor("Red")
        }
    }
    
    return(
        <div>
            <button onClick={ChangeName}>Change Text</button><br />
            <button onClick={ChangeColor}>Change Color</button><br />
            <button onClick={showhide}>{buttontext}</button><br />
            <h1 style={{color:textColor}}>{name}</h1><br />
            <h2>{hideText}</h2>
        </div>
    )
}
export default Us5