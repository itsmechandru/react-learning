import React , { useState } from "react";


function Accordion({ itemsA }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClicked = (index) => {
        // console.log("Title Clicked ",index);
        setActiveIndex(index);
    }

    const renderedItems = itemsA.map(function (item,index) {
        const activeValue = activeIndex === index ? "active" : "";

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${activeValue}`}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeValue}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    })

    return (
        <div style={{margin:"10px"}} className="ui styled accordion" >
            {renderedItems}
        </div>
    );
}

export default Accordion;