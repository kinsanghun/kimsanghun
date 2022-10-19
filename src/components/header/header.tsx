import { Focus } from "components/focus/focus";
import React, { useEffect, useState } from "react";
import './header.scss';

export default function Header() {
    const imgURL = "assets/images/header-bg.jpg";
    const [date, setDate] = useState(new Date());
    const tmpText= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.";
    useEffect(()=>{
        const id = setInterval(() => {
          setDate(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);
    return (
        <header>
            <img src={imgURL} alt="kimsanghun"/>
            <div className="top">
                <span>LOGIN</span>
                <span className="battery"></span>
            </div>
            <div className="center">
                <div className="main">
                    <Focus lineLength={50} color={"#ffffff"}/>
                    <span className="name">KIM<br/>SANG<br/>HUN</span>
                </div>
                <div className="text">{tmpText}</div>
            </div>
            <div className="foot">
                <span>{date.toString()}</span>
                <span>Front-end Developer Portfolio.</span>
            </div>
        </header>
    )
}