import {useDispatch, useSelector} from 'react-redux';

//store
import store from 'store';

//actions
import {deletePlay, getPlay} from '../../store/play/play.action';
import {createBook} from '../../store/book/book.action';

//styles
import './PlayItem.css';

const PlayItem = ({play, active, setActive}) => {

    let isBooked = false;
    const {books} = useSelector((state) => state.book);
    const {user} = useSelector((state) => state.user);
    const {entryPlay} = useSelector((state)=> state.play);
    const dispatch = useDispatch();
    const role = user.role;
    const userName = user.fullName;
    const handleEdit = () => {
        dispatch(getPlay(play.id));
        setActive(true);
    };
    const handleDelete = () => {
        dispatch(deletePlay(play.id));
    };
    const handleBook = () => {
        dispatch(createBook({
            ...play,
            userName: userName,
            bookingDate: new Date().toDateString(),
        }));
    };

    if (role === 'user') {
        isBooked = books?.some((book) => book.id === play.id);
    }

    return (
        <>
            <div className="play_card">
                <p>{play.name}</p>
                { role === 'admin' &&  <button className="play_card_edit_button" onClick={handleEdit}>Edit</button> }
                <div className="play_card_img_container">
                    <img src={play.src} className="play_card_img" alt=""/>
                </div>
                <div className="play_card_info">
                    <div>
                        <p>{play.date}</p>
                        <p>{play.price} դրամ</p>
                    </div>
                    <div>
                        <p>Ժամը {play.time}</p>
                    </div>
                    {
                        role === 'admin' ? (
                            <button className="play_card_delete_button" onClick={handleDelete}>Delete</button>
                        ) : (
                            !isBooked ? (
                                <button className="play_card_book_button" onClick={handleBook}>Book</button>
                            ) : (
                                <p className="play_card_booked">Booked</p>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};
export default PlayItem;