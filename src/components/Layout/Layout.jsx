import {Navigate, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

//styles
import './Layuot.css'
import Modal from "../modal";
import store from "store";
import {clearUser} from "../../store/user/user.action";
import {useState} from "react";

const Layout = () => {
    const {accessToken} = useSelector((state) => state.user);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleModal = () => {
        setActive(!active);
    };
    const handleLogout = () => {
        store.remove('user');
        store.remove('access_token');
        dispatch(clearUser());
        navigate('/plays');
    };

    if (!accessToken) {
        return (
            <Navigate to="/register"/>
        );
    }

    return (
        <>
            <header className="header">
                <div className={"header_container"}>
                    <NavLink to={"/plays"}>Play</NavLink>
                    <NavLink to={"/booking"}>Booking</NavLink>
                    <button className="header_logout_button" onClick={handleModal}>Log Out</button>
                </div>
            </header>
            <Outlet/>
            <Modal active={active} setActive={setActive}>
                <p>do you want logout?</p>
                <button
                    onClick={handleLogout}
                >
                    Yes
                </button>
            </Modal>
        </>
    );
};
export default Layout;