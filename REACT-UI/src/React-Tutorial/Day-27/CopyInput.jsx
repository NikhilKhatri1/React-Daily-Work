import React, { useState } from 'react'
import CopyClipboard from './CopyClipboard';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [Copied, setCopied] = useState(false)
    const HandleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        })
        // alert("Text Copied");
    }
    return (
        <div className='m-2'>
            <h1>Copy input</h1>
            <div className='d-flex input-group w-25'>
                <input className='form-control w-25' type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <button className='btn btn-primary' onClick={HandleCopy}>Copy</button>
            </div>
            <CopyClipboard copied={Copied} />
        </div>
    )
}

export default CopyInput