import React, { useState, useEffect } from 'react';
import axios from "axios";

function Convert({ languageT, textT }) {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(translated)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedText(textT)
      }, 500);
    
      return () => {
        clearTimeout(timeoutId)
      }
    }, [textT])


    useEffect(() => {
        const doTranslation = async () => {
            const response = await axios.post("https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: languageT.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }
            );

            // console.log(response.data.data.translations[0].translatedText);
            setTranslated(response.data.data.translations[0].translatedText)
        }

        doTranslation();
    }, [languageT, debouncedText])


    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
}

export default Convert