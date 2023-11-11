import React, { useState } from 'react';
import eyeOffIcon from '../assets/icons/eye_off.png';
import eyeIcon from '../assets/icons/eye.png';

const usePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(vis => !vis);
    };

    const icon = visible ? eyeOffIcon : eyeIcon;

    const InputType = visible ? "text" : "password";

    const Icon = (
        <img
            src={icon}
            alt="Password toggle"
            onClick={toggleVisibility}
            style={{ cursor: 'pointer' , width:'20px' }}
        />
    );
    

    return [InputType, Icon];
}

export default usePasswordToggle