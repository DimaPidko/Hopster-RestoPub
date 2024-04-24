import { useDispatch } from 'react-redux';
import { changeModalActivity } from './ModalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <div className="modal__wrapper">
            <div className="modal__wrapper__window">
                <h2 className="modal__wrapper__window-title">Бронювання столу</h2>
                <h3 className="modal__wrapper__window__phone">
                    <a
                        className="modal__wrapper__window__phone-tel"
                        href="tel:+380503000719">
                        +38-(050)-300-07-19
                    </a>
                </h3>
            </div>
            <div
                onClick={() => {
                    dispatch(changeModalActivity());
                }}
                className="overlay"></div>
        </div>
    );
};

export default Modal;
