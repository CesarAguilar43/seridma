import React, { useState } from 'react';
import '../../assets/css/HoverImg.css';
import ModalHover from '../modal/Modal';

function HoverImg({ img }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="image-hover"  onClick={() => setModalShow(true)} >
                <img src={img} alt="" />
                <i className="fas fa-search fa-5x"/>
            </div>
            <ModalHover
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default HoverImg;