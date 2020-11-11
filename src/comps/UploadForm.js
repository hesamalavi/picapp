import React from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
// import { Link, useHistory } from 'react-router-dom';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    const handleChange = (e) => {
        let selected = e.target.files[0];
        // check for type of file
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    };
    return (
        <form className="form">
            <label className="label">
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};

export default UploadForm;
