import React, { useState, useEffect, useRef } from 'react'

function Dropdown({ labelA,optionsA, selectedA, onSelectedChangeA }) {
    const [open, setOpen] = useState(false)
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            } else {
                setOpen(false);
            }
        };
        document.body.addEventListener("click", onBodyClick,{capture:true});

        return () => {
            document.body.removeEventListener("click", onBodyClick,{capture:true});
        };

    }, [])


    const renderedOptions = optionsA.map(function (option) {
        if (option.value === selectedA.value) {
            return null
        }
        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChangeA(option)}
            >
                {option.label}
            </div>
        );

    });

    // console.log(ref.current);
    return (
        <div style={{padding:"3px 10px"}} ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{labelA}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selectedA.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
                {/* <div style={{marginTop:"10px",color:`${selectedA.value}` }} className='content'>
                    <h5>The text is {selectedA.value}!</h5>
                </div> */}
            </div>
        </div>
    )
}

export default Dropdown