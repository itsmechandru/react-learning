import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Accordion from './components/Accordion'
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "What is React?",
        content: "React is a front end javascript framework"
    },
    {
        title: "Why use React?",
        content: "React is a favourite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "green"
    },
    {
        label: "A Shade of Blue",
        value: "blue"
    },
]


function App() {

    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion itemsA={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    labelA="Select a color"
                    selectedA={selected}
                    onSelectedChangeA={setSelected}
                    optionsA={options}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>

        </div>
    )
}

export default App