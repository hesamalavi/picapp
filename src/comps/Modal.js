import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    };
    return (
        <motion.div
            onClick={handleClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                className="modal-image"
                src={selectedImg}
                alt="enlarged pic"
                initial={{ y: '-100vh' }}
                animate={{ y: '0' }}
            />
        </motion.div>
    );
};

export default Modal;
