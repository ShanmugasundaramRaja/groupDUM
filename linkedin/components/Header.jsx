import { useState, useEffect } from 'react'
import { Button } from "react-bootstrap"
import "./Header.css"


export default function Header() {
   
    
    return (
        
        <div id="header" style={{marginTop: "0px"}}>
        <div id="top-image"></div>
        <div>
            <img src={"https://crops.giga.de/3d/64/b6/d0cdd88e578c8f0b31c6b118e2_YyAxMTk0eDY3MisyKzUCcmUgMTYwMCAxMjAwAzM0ZGQ4NzhiYzFl.jpg"} alt="user profile" className="userImgUpdated"></img>
            <div className='d-flex justify-content-between mt-5'><h3>{}</h3> 
            <Button className="editButton"><i className="bi bi-pencil"></i></Button>
            </div>
            
            <div className="mt-n1">{}</div>
            <div style={{fontSize:"14px"}} className="text-muted">{} · <a href=""><span>Contact info</span></a> </div>
            <div style={{fontSize:"14px"}} className="mt-2"><span>500+ connections</span></div>
            
            <Button variant="primary" className="btns">Open to</Button>
            <Button variant="outline-primary" className="btns">Add profile section</Button>
            <Button variant="outline-secondary" className="btns" id="more">More</Button>
            </div>
            
        </div>
    )
}


