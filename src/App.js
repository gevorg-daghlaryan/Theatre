import {Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';

//store
import {store} from './store/index';

//components
import Layout from './components/Layout/Layout';
import Plays from './pages/Plays';
import Register from './pages/Register';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import AdminLayout from './components/Layout/AdminLayout';
import AdminPlays from './pages/AdminPlays/AdminPlays';
import AdminBookings from './pages/AdminBookigs/AdminBookings';

//styles
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index path='plays' element={<Plays/>} />
                        <Route path='booking' element={<Bookings/>} />
                    </Route>
                    <Route path='/admin' element={<AdminLayout />}>
                        <Route index path='plays' element={<AdminPlays/>} />
                        <Route path='bookings' element={<AdminBookings/>} />
                    </Route>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                </Routes>
            </>
        </Provider>
    );
}

export default App;
