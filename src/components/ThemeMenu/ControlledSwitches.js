import React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({ isDarkMode, onToggle }) {
    const handleChange = () => {
        onToggle(!isDarkMode);
        localStorage.setItem('isDarkMode', !isDarkMode);
    };

    return (
        <Switch
            checked={isDarkMode}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Toggle Dark Mode' }}
        />
    );
}
