import React from 'react';
import { Share, Post } from '../../components';

import './feed.scss';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
