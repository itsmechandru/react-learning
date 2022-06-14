import React, { useState } from "react";


function SearchBar({onFormSubmitVideo}) {
    const [term, setTerm] = useState("");

    const onInputChange = (event) => {
        setTerm(event.target.value)
        // console.log(this.state.term);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        // callback from parent
        onFormSubmitVideo(term);

    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange} />
                </div>

            </form>
        </div>
    );
}

export default SearchBar;

