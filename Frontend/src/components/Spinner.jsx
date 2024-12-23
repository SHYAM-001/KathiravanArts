// Spinner.js
import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = ({ loading, color = "#7ab318", size = 15, halfHeight = false }) => {
    return (
        <div className="spinner-container">
            <ScaleLoader loading={ loading } color={ color } size={ size } />
        </div>
    );
};


export default Spinner;
