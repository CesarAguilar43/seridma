import React, { useState } from 'react';
import '../../assets/css/HoverImg.css';
import ModalHover from '../modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function HoverImg({ img }) {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="image-hover" onClick={() => setModalShow(true)} >
                <img src={img} alt="" />
                <i><FontAwesomeIcon icon={faSearch} size="6x" /></i>
            </div>
            <ModalHover
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default HoverImg;