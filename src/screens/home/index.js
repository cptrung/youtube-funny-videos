import { isEmpty, map } from "lodash";
import React, { useEffect } from "react";

import Item from "./Item";

const Home = () => {
  const [videos, setVideos] = React.useState(null);
  useEffect(() => {
    isEmpty(videos) &&
      fetch("/api/videos")
        .then((res) => res.json())
        .then((json) => setVideos(json.data))
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="item-box">
      {map(videos, (video, index) => (
        <Item {...video} key={`video-${index}`} />
      ))}
    </div>
  );
};

export default Home;
