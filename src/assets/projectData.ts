import { projectDataType } from "types/types";

export const projectData:projectDataType[] = [
    {
        id : 1,
        title : "ZERONINE",
        skills : "Spring Boot Rest API 기반, React TypeScript CSS MariaDB Github Notion",
        apis : "Daum Post API, Boot Pay Payment API",
        content : `
            TypeScript React와 Rest API 기반의 Spring Boot를 이용한 공동구매 사이트를 구축했습니다.
            이 사이트는 포인트를 충전하고 충전한 포인트로 결제를 하는 방식으로 구현되었습니다.
            회원가입을 하는 과정에서 주소 데이터를 Daum Post API를 이용했고,
            포인트를 충전하는 과정에서 Boot Pay Payment API를 이용하여 구현했습니다.
        `,
        imgURL : "assets/images/project/zeronine.png",
        link : "",
    },
    {
        id : 2,
        title : "React Component TypeScript",
        skills : "React TypeScript Canvas Three.js",
        apis : "api is not used.",
        content : "react로 가능한 여러가지 디자인을 만들어보고 컴포넌트와 페이지 템플릿, interactive 등을 실험하고 공유하는 공간입니다.",
        imgURL : "assets/images/project/react-component.png",
        link : "http://react-component.com/",
    },
    {
        id : 3,
        title : "쿠우쿠우 송천점 관리시스템",
        skills : "Django HTML CSS JavaScript Chart.js JQuery Ajax Python3 SQLite3 Crawling",
        apis : "api is not used.",
        content : `
            기존에 엑셀로 관리하던 쿠우쿠우 관리체계를 웹사이트로 구현했습니다. Django를 이용했고 금일 매출액을 크롤링을 통해 데이터베이스를 업데이스 시켰습니다.
            사원관리와 매출관리 거래처관리 근태관리 등 매장을 전체적으로 관리할 수 있는 시스템입니다.
        `,
        imgURL : "assets/images/project/qooqoo.png",
        link : "",
    },
    {
        id : 4,
        title : "Web Site Clone Coding",
        skills : "HTML CSS JavaScript",
        apis : "api is not used.",
        content : `
        html css javascript의 기초를 다지기 위해 제작했습니다. 
        Youtube의 Online Tutorial 유투버의 제작 영상을 따라하면서 페이지를 제작하는 방법을 배우고
        나중에는 사진만 보고 따라할 수 있을 정도까지 연습했습니다.
        `,
        imgURL : "assets/images/project/clone.png",
        link : "",
    },
]