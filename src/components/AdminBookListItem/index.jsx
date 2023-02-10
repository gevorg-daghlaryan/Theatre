import {useDispatch} from 'react-redux';
import {editBook} from '../../store/book/book.action';

//styles
import './AdminBookListItem.css';

const AdminBookListItem = ({book}) => {
    const dispatch = useDispatch();
    const handleApprove = () => {
        const data = {
            ...book,
            status: 'Approved'
        };
        dispatch(editBook(data));
    };
    const handleReject = () => {
        const data = {
            ...book,
            status: 'Rejected',
        };
        dispatch(editBook(data));
    };

    return (
        <tr className="table_tr">
            <td>{book.name}</td>
            <td>{book.userName}</td>
            <td>{book.userId}</td>
            <td>{book.bookingDate}</td>
            {
                book.status === 'Pending'
                ?
                    <td>
                        <button className="approve_button" onClick={handleApprove}>Approve</button>
                        <button className="reject_button" onClick={handleReject}>Reject</button>
                    </td>
                :
                    <td>{book.status}</td>
            }
        </tr>
    );
};
export default AdminBookListItem;