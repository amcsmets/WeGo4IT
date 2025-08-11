import React, { useState } from 'react';
import index from '../assets/images/index';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
    const [selectedOption, setSelectedOption] = useState('EN'); // Default selected option

    const options = ['DE', 'NL', 'FR'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle dropdown visibility
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option); // Set selected option
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="dropdown">
             <img src={index['language']} alt="Language" className="language-icon" id="language-dropdown-toggle"/>
            <button className="dropbtn" onClick={toggleDropdown}>
                {selectedOption}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="dropdown-item"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
