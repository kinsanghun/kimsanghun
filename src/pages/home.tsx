import React from "react";
import 'assets/css/style.scss';
import Header from "components/header/header";
import Section from "components/section/section";
import Projects from "components/projects/projects";
import Footer from "components/footer/footer";

export default function Home() {
    const myinfo = [
        {
            title : "Name",
            content : "Kim, Sang Hun",
        },
        {
            title : "Birthday",
            content : "1997. 05. 29",
        },
        {
            title : "E-mail",
            content : "schmid_t@kakao.com",
        },
        {
            title : "Univ.",
            content : <>Woosuk Univ.<br/>(Information Security)</>,
        },
        {
            title : "Major",
            content : "Front-end Developer",
        },
    ];

    const skills = [
        {
            title : "Frontend",
            content : "React.js React Native TypeScript JavaScript HTML5 CSS3 SCSS JQuery Ajax bootstrap",
        },
        {
            title : "Backend",
            content : "SpringBoot Django PHP MySQL MariaDB",
        },
        {
            title : "Version Control",
            content : "GitHub",
        },
        {
            title : "Certificate",
            content : "정보처리기사 리눅스마스터2급",
        },
        {
            title : "Other",
            content : "Notion Linux AWS GCP AdobeXD UTM CiscoRouter",
        },
    ];

    return (
        <div className="home">
            <Header />
            <Section title={"About Me"} data={myinfo} type={"aboutme"}/>
            <Section title={"Tech Skills"} data={skills} type={"skills"}/>
            <Projects/>
            <Footer/>
        </div>
    )
}