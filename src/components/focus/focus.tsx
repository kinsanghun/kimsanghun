import React from "react";
import './focus.scss';

export function Focus(props:{lineLength:number, color : String}) {
    const color = props.color;
    const lineLength = `${props.lineLength}px`;
    const leftTopStyle = {
        width : lineLength,
        height : lineLength,
        borderTop : `1px solid ${color}`,
        borderLeft : `1px solid ${color}`,
    }
    const rightTopStyle = {
        width : lineLength,
        height : lineLength,
        borderTop : `1px solid ${color}`,
        borderRight : `1px solid ${color}`,
    }
    const leftBottomStyle = {
        width : lineLength,
        height : lineLength,
        borderBottom : `1px solid ${color}`,
        borderLeft : `1px solid ${color}`,
    }
    const rightBottomStyle = {
        width : lineLength,
        height : lineLength,
        borderBottom : `1px solid ${color}`,
        borderRight : `1px solid ${color}`,
    }
    return (
        <div className="focus">
            <div>
                <span style={leftTopStyle}></span>
                <span style={rightTopStyle}></span>
            </div>
            <div>
                <span style={leftBottomStyle}></span>
                <span style={rightBottomStyle}></span>
            </div>
        </div>
    )
}