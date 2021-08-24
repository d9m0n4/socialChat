import React from 'react';
import { Share } from '../../components';

import './feed.scss';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
};

export default Feed;
