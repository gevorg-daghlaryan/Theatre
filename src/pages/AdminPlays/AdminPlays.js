import {useState} from 'react';

//components
import AddPlays from '../../components/AddPlay';
import PlayList from '../../components/PlayList';
import Modal from '../../components/modal';

//styles
import './AdminPlays.css';
const AdminPlays = () => {
    const [active, setActive] = useState(false);

    return (
        <div>
            <button
                className="add_play_button"
                onClick={() => {setActive(true)}}
            >
                <img  className="add_play_button_img" src="https://cdn.icon-icons.com/icons2/2596/PNG/512/add_one_button_insert_plus_icon_155856.png" alt=""/>
            </button>
            <Modal active={active} setActive={setActive}>
                <AddPlays active={active} setActive={setActive} />
            </Modal>
            <PlayList active={active} setActive={setActive} />
        </div>
    );
};
export default AdminPlays;