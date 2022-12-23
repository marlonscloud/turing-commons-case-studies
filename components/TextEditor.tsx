import React, { useState } from 'react'
import RichTextEditor from 'react-rte';

function TextEditor({ heightClass }:any) {
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());

    const handleOnChange = (value: any) => {
        setValue(value);
        console.log(value.toString('html'));
    };

    return <RichTextEditor value={value} onChange={handleOnChange} className={heightClass} />;
}

export default TextEditor
