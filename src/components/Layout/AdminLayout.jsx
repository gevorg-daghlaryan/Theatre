import {Navigate, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import store from 'store';

//modal
import Modal from '../modal';

//actions
import {clearUser} from '../../store/user/user.action';

//styles
import './Layuot.css';

const AdminLayout = () => {
    const {user} = useSelector((state) => state.user);
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
        //history.replace('/plays')
        navigate('/plays');
    };


    if (user?.role !== 'admin') {
        return (
            <Navigate to="/plays"/>
        );
    }

    return (
        <>
            <header className="header">
                <div className={"header_container"}>
                    <NavLink to={"/admin/plays"}>Plays</NavLink>
                    <NavLink to={"/admin/bookings"}>Bookings</NavLink>
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

export default AdminLayout;