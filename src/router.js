import { Routes, Route} from "react-router-dom";
import Homepage from "./pages/users/homePage";
import { ROUTERS} from "./untils/router";
import MasterLayout from "./pages/users/theme/masterLayout";
import Profile from "./pages/users/profile";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter =() => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            Component: <Homepage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            Component: <ProfilePage />
        },
    ];
    return (
        <MasterLayout>
        <Routes>   
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.Component} />
                ))}
        </Routes>
        </MasterLayout>
    );
};

const RouterCustom =() => {
    return renderUserRouter();
};

export default RouterCustom;