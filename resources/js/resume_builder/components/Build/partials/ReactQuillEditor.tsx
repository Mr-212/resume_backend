import React, { Component, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReacQuillEditor = ( { initValue, onChange }  ) => {

    const [value, setValue] = useState(initValue);

    const handleChange = (content) => {
        setValue(content);
        onChange(content);
    }

    console.log(value)

    return(

        <div className="w-full">
            <ReactQuill theme="snow" value={ value } onChange={ handleChange }/>
        </div>
    );

}


export default ReacQuillEditor;
