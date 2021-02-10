import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import Login from './components/Login'
import Channel from './components/Channel';
import Settings from './components/Settings';
import VideoPage from './VideoPage';
import VideoPageSidebar from './VideoPageSidebar';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
        <Route path='/channel/:id'>
            <div className='channel__page'>
            <Sidebar />
              <Channel />
            </div>
          </Route>
        <PrivateRoute path='/settings/:id' exact component>
            <div className='settings__page'>
              <Settings />
            </div>
          </PrivateRoute>
        <Route path='/login'>
            <div className='login__page'>
              <Login />
            </div>
          </Route>
          <Route path='/video/:videoId'>
            <div className='app__page'>
              <VideoPage />
              <VideoPageSidebar />
            </div>
          </Route>
          <Route path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className='app__page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;


