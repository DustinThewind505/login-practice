import React, { useState } from 'react'

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = updatedValue => {
        setValue(updatedValue)
    };

    return [value, setValue, handleChange]
}

export default useInput;