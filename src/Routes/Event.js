import { Outlet } from "react-router-dom";

const EventPage = () => {
    return (
        <div>
            <h2>오늘의 이벤트</h2>
            <Outlet />
        </div>
    );
}

export default EventPage;