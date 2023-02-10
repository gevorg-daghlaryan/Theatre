import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//actions
import {getUserBook} from '../../store/book/book.action';

//components
import BookingListItem from '../BookingListItem';

//styles
import './BookingList.css';

const BookingList = () => {

    const dispatch = useDispatch();
    const {books} = useSelector((state) => state.book);

    useEffect(() => {
        dispatch(getUserBook());
    },[]);

    return (
        <div className="user_booking_table_container">
            <table className="user_booking_table">
                <thead className="user_booking_table_header">
                    <tr className="table_tr">
                        <th>Play Name</th>
                        <th>Booked date</th>
                        <th>Play date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className="user_booking_table_body">
                    {
                        books ?
                            books.map((book) => {
                                return (
                                    <BookingListItem
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

export default BookingList;
