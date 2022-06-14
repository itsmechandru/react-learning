import React, { useState } from 'react'
import Convert from './Convert';
import Dropdown from './Dropdown'
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
    {
        label:"Dutch",
        value:"nl"
    }
]

function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState("");

    return (
        <div style={{padding:"10px"}}>
            <div  className='ui form'>
                <div className='field'>
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                labelA="Select a Language"
                optionsA={options}
                selectedA={language}
                onSelectedChangeA={setLanguage}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert languageT={language} textT={text}/>
        </div>
    )
}

export default Translate