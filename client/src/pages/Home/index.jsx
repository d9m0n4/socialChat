import React from 'react';
import { TopBar, SideBar, Feed, RightBar } from '../../components';

import './home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <TopBar />
      <div className="pageContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </React.Fragment>
  );
};

export default Home;
