import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//actions
import {createPlay, editPlay} from '../../store/play/play.action';

//styles
import './AddPlay.css';

const AddPlays = ({setActive}) => {

    const dispatch = useDispatch();
    const entry = useSelector((state) => state.play.entryPlay);
    const [playData, setPlayData] = useState(entry);
    const initialData = {
        name: '',
        date: '',
        price: '',
        time: '',
    };

    useEffect(() => {
        setPlayData(entry);
    },[entry]);
    const handleInput = (e) => {
        setPlayData({
            ...playData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (playData.id){
            dispatch(editPlay(playData));
        } else {
            dispatch(createPlay(playData));
        }
        setPlayData(initialData);
        setActive(false);
    };

    const handleUpload = (e) => {
        const {files} = e.target;

        if (files[0]) {
            const fileReader = new FileReader()
            fileReader.addEventListener('load', (e) => {
                setPlayData({
                    ...playData,
                    src: e.target.result,
                });
            });
            fileReader.readAsDataURL(files[0]);
        }
    };

    return (
        <>
            <div className="inputs_container">
                <div className="inputs">
                    <form
                        onSubmit={handleSubmit}
                        className="form_inputs"
                    >
                        <input
                            onChange={handleInput}
                            className="base-input"
                            type="text"
                            placeholder="name"
                            name="name"
                            value={playData?.name}
                        />
                        <input
                            onChange={handleInput}
                            className="base-input"
                            type="number"
                            placeholder="price"
                            name="price"
                            value={playData?.price}
                        />
                        <input
                            onChange={handleInput}
                            className="base-input"
                            type="date"
                            placeholder="date"
                            name="date"
                            value={playData?.date}
                        />
                        <input
                            onChange={handleInput}
                            className="base-input"
                            placeholder="time"
                            name="time"
                            type="time"
                            value={playData?.time}
                        />
                        <input
                            onChange={handleUpload}
                            type="file"
                            className="base-input"
                        />
                        <button className="base-button">{playData?.id ? 'Edit' : 'Add'}</button>
                    </form>
                </div>
            </div>
        </>
    );
};
export default AddPlays;