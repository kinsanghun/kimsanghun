import { Focus } from "components/focus/focus";
import React, { useEffect, useRef, useState } from "react";
import { projectDataType } from "types/types";
import { GenericType } from "typescript";
import '../projects.scss';


export default function Project(props:{data:projectDataType, size:number}) {
    
    const image = useRef<HTMLImageElement>(null);
    const [imgStatus, setImgStatus] = useState(false);
    const [imageStyle, setImageStyle] = useState({});

    useEffect(() => {
        if(imgStatus) {
            const height = image.current?.height;
            if(height != null && height < 600) {
                setImageStyle({height : "100%"});
            }
        }
    }, [imgStatus])

    const formset = (title:string, data:any) => {
        return (
            <div className="data">
                <h2>{title}</h2>
                <div>{data}</div>
            </div>
        )
    }
    return (
    <div className="project">
        <div className="img">
            <div className="more"></div>
            <img ref={image} src={props.data.imgURL} alt={props.data.title} onLoad={()=>{setImgStatus(true)}} style={imageStyle}/>
        </div>

        <div className="text">
            <Focus lineLength={30} color={"gray"}/>
            <div className="datas">
                {formset("Project Name", props.data.title)}
                {formset("Project Skills", props.data.skills)}
                {formset("Used APIs", props.data.apis)}
                {formset("Project Content", props.data.content)}
                {props.data.link != "" ? formset("Go Link", <a href={props.data.link} target="_blank">{props.data.link}</a>) : undefined}
            </div>
        </div>
    </div>
    )
}