import { Outlet } from "react-router-dom";

const AboutPage = () => {
    return (
        <div>
            <Outlet></Outlet>
            회사소개
        </div>
    );
}

export default AboutPage;