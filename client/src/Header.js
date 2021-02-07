import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import {isAuthenticated, selectUser, logout} from './features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import "./Header.css";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  const user = useSelector(selectUser);
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();


  const logOutApp = () => {
    dispatch(logout());
    localStorage.removeItem('token')
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img
            className='header__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
          />
        </Link>
      </div>
      <div className='header__input'>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type='text'
          placeholder='Search'
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className='header__inputButton' />
        </Link>
      </div>
      <div className='header__icons'>
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Link to='/login' >
       
        <ul  className='header__iconDropDown'>
          <li> <Avatar src='' /></li>
       {isAuth ? <li onClick={logOutApp}>Logout</li> : ''}
        </ul>
        </Link>
      </div>
    </div>
  );
};

export default Header;
