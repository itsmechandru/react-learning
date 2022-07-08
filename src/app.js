import React from 'react'
import "./index.css";
import News from "./news";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import LoginApp from './login';
import Navbar from './components/Navbar';
import UploadNews from './uploadNews';
export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <>
          <Route exact path="/"><LoginApp /></Route>
          {/* <Navbar /> */}
          <Route path="/Business"><News newsName="Business" /></Route>
          <Route path="/Entertainment"><News newsName="Entertainment" /></Route>
          <Route path="/General"><News newsName="General" /></Route>
          <Route path="/Health"><News newsName="Health" /></Route>
          <Route path="/Science"><News newsName="Science" /></Route>
          <Route path="/Sports"><News newsName="Sports" /></Route>
          <Route path="/Technology"><News newsName="Technology" /></Route>
          <Route path="/uploadNews"><UploadNews /></Route>
        </>
      </BrowserRouter>
    </div>
  )
}
