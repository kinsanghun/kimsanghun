import { Focus } from "components/focus/focus";
import React from "react";
import { sectionType } from "types/types";
import './section.scss';

export default function Section(props:{title:string, data:sectionType[], type:string}) {
    const data:sectionType[] = props.data;

    let dataList:JSX.Element[] = [];
    data.map((data, index)=>{
        let list = (
            <div key={index} className="list">
                <h3>{data.title}</h3>
                <p>{data.content}</p>
            </div>
        );
        dataList.push(list);
    })
    return(
        <div className={`container ${props.type}`}>
            <div className="content">
            <Focus color={"white"} lineLength={50}/>
            <h2>{props.title}</h2>
            {dataList}
            </div>
        </div>
    )
}