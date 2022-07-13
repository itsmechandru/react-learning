import Button from '@mui/material/Button';
import { padding } from '@mui/system';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

function Nav() {
  let n =
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span style={{paddingTop:'3px'}} class="ml-3 text-xl">Newswoo</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link class="mr-5 hover:text-gray-900" to="/Business">Business</Link>
          <Link class="mr-5 hover:text-gray-900" to="/Entertainment">Entertainment</Link>
          <Link class="mr-5 hover:text-gray-900" to="/General">General</Link>
          <Link class="mr-5 hover:text-gray-900" to="/Health">Health</Link>
          <Link class="mr-5 hover:text-gray-900" to="/Science">Science</Link>
          <Link class="mr-5 hover:text-gray-900" to="/Sports">Sports</Link>
          <Link class="mr-5 hover:text-gray-900" to="/Technology">Technology</Link>
          {/* <Link class="mr-5 hover:text-gray-900" to="/uploadNews">Upload News</Link> */}

        </nav>
        {/* <input type="text" className="text-base" /> */}
        <br></br>
        <button style={{border:'2px solid #EB4747',borderRadius:'6px', padding:'6px',color:'#EB4747'}} onClick={() => { window.location.href = "/" }}> Signout </button>
      </div>
    </header>
  return n;
}
export default Nav;