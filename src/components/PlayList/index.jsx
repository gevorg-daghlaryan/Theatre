import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

//components
import PlayItem from '../PlayItem';

//actions
import {getUserBook} from '../../store/book/book.action';
import {getPlays} from '../../store/play/play.action';

//styles
import './PlayList.css';

const PlayList = ({active, setActive}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getPlays()));
        dispatch(getUserBook());
    }, []);

    const {plays} = useSelector((state) => state.play);

    return (
        <div className="plays_container">
            {
                plays ?
                    plays.map((play) => {
                        return (
                            <PlayItem
                                key={play.id}
                                play={play}
                                active={active}
                                setActive={setActive}
                            />
                        );
                    })
                    :
                    <p>No plays</p>
            }
        </div>
    );
};
export default PlayList;