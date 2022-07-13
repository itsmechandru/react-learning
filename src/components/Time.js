import React,{useState, useEffect} from 'react';
// import { ReactComponent as ClockIcon } from "../images/icons/clock.svg";
// import { ReactComponent as CalenderIcon } from '../images/icons/calendar.svg';
import "./time.css";

function Time() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div style={{ color: 'white', position: "absolute", right: '0' }}>
            <div style={{ padding: '10px',display:"flex",flexDirection:'row' }}>
            <p>📆</p>
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <p> 🕒 </p>
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
            </div>

        </div>
    )
}

export default Time;