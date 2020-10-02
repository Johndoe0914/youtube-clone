import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import VideoPage from "./VideoPage";
import VideoPageSidebar from "./VideoPageSidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
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
