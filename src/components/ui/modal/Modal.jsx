const Modal = () => {
    const modal = document.querySelector('.modal__wrapper');

    return (
        <div className="modal__wrapper">
            <div className="modal__wrapper__window">
                <h2 className="modal__wrapper__window-title">Бронювання столу</h2>
                <h3 className="modal__wrapper__window__phone">
                    <a
                        className="modal__wrapper__window__phone-tel"
                        href="tel:+380668370182">
                        +38-(066)-837-01-82
                    </a>
                </h3>
            </div>
            <div
                onClick={() => {
                    modal.classList.toggle('modal-active');
                }}
                className="overlay"></div>
        </div>
    );
};

export default Modal;
