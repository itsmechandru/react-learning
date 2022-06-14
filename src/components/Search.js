// "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=programming"

import React, { useState, useEffect } from 'react'
import axios from "axios";

function Search() {

    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);
    // console.log(term);
    // console.log(results);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedTerm(term)
      }, 1000);
    
      return () => {
        clearTimeout(timeoutId)
      }
    }, [term])
    
    useEffect(() => {
        const search = async () => {
            const response = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: "*",
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(response.data.query.search);
        }
    
      search();

    }, [debouncedTerm])
    

    
    const renderedResults = results.map(function (result) {
        return (
            <div key={result.pageid} className='item'>
                <div className='right floated content'>
                    <a
                        style={{ margin: '5px 0px' }}
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel='noreferrer'
                    >
                        Go
                    </a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {/* <div className='content'>
                        {result.snippet}
                    </div> */}
                </div>
            </div>
        );
    });

    return (
        // <div style={{padding:"20px"}}></div>
        <div style={{margin:"10px"}}>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                        className='input'
                        onChange={(event) => setTerm(event.target.value)}
                        value={term}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    )
}

export default Search