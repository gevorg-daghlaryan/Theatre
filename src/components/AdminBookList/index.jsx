import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

//components
import AdminBookListItem from '../AdminBookListItem';

//actions
import {getAdminBook} from '../../store/book/book.action';

//styles
import './AdminBookList.css';

const AdminBookList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getAdminBook()));
    }, []);
    const {books} = useSelector((state) => state.book);


    return (
        <div className="admin_booking_table_container">
            <table className="admin_booking_table">
                <thead className="admin_booking_table_header">
                    <tr className="table_tr">
                        <th>Play Name</th>
                        <th>Spectator name</th>
                        <th>Spectator email</th>
                        <th>Booked date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="admin_booking_table_body">
                {
                    books ?
                        books.map((book) => {
                            return (
                                <AdminBookListItem
                                    key={book.id}
                                    book={book}
                                />
                            )
                        })
                        :
                        <tr><th>Not books</th></tr>
                }
                </tbody>
            </table>
        </div>
    );
};
export default AdminBookList;