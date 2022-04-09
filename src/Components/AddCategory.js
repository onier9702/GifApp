
import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCateg}) => {

    const [inputValue, setInputValue] = useState('Player');

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // It Permits to write
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCateg( (cat) => [ inputValue, ...cat] );
            setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>

        <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
        />

    </form>)
}
AddCategory.propTypes = {
    setCateg: PropTypes.func.isRequired
}




