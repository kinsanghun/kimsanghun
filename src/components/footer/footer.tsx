import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="left">
                    <h2>KIM SANG HUN</h2>
                    <p>
                        <span>Github<br/> https://github.com/kinsanghun</span>
                        <span>Other Page<br/> http://react-component.com</span>
                    </p>
                    <span style={{marginTop:20, position:"absolute", bottom : "30px"}}>
                        Develop a Developer
                    </span>
                </div>
            </div>
        </footer>
    )
}