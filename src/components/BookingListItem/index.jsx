const BookingListItem = ({book}) => {
    return (
        <tr className="table_tr" >
            <td>{book.name}</td>
            <td>{book.bookingDate}</td>
            <td>{book.date}</td>
            <td>{book.status}</td>
        </tr>
    );
};
export default BookingListItem;