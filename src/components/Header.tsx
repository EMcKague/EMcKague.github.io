// import React from 'react';
import '../css/title.css';
import '../css/navBar.css';

function Header({setSelectedMode}:any) {

    const onButtonClick=(mode:string)=>{
        setSelectedMode(mode)
    }

    return (
        <div>
            <div className='title'> 
                Evan M
            </div>
            <div className='navBar'>
                <ul><button onClick={()=>onButtonClick("aboutMe")}>About Me</button></ul>
                <ul><button onClick={()=>onButtonClick("projects")}>Projects</button></ul>
                <ul><button onClick={()=>onButtonClick("contact")}>Contact</button></ul>
            </div>
        </div>
    )
} 

export default Header;