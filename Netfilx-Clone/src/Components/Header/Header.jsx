import React from 'react'
import "./Header.css"
import Netflixlog from '../../assets/images/Netflix-image.jpg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className="header_container">
            <div className="header-left">
                <ul>
                    <li><img  className ="logo"src={Netflixlog} alt="Netflix Logo" width="100"/></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="header_right">
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header