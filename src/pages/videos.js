import React from 'react';
import './videos.css';

export const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Elden Ring: Shadow of the Erdtree DLC Review",
      embedUrl: "https://www.youtube.com/embed/v2tj-b3DfmI",
    },
    {
      id: 2,
      title: "Ghost of Tsushima Review",
      embedUrl: "https://www.youtube.com/embed/MHrsygIxC5k",
    },
    {
      id: 3,
      title: "Remnant: From the Ashes Review",
      embedUrl: "https://www.youtube.com/embed/E946beJcIAM",
    },
    {
      id: 4,
      title: "Stardew Valley Review",
      embedUrl: "https://www.youtube.com/embed/ddTHeAQhlws",
    },
    {
      id: 5,
      title: "Call of Duty: Black Ops 6 - Multiplayer Overview",
      embedUrl: "https://www.youtube.com/embed/IskI6ucCN2U",
    },
    {
      id: 6,
      title: "Minecraft: Dungeons Gameplay - Gamescom 2019",
      embedUrl: "https://www.youtube.com/embed/UMENKSqC7HA",
    },
  ];

  return (
    <div className="videos">
      <h2>Play, Watch, Conquer!</h2>
      {videos.map(video => (
        <div className="video" key={video.id}>
          <h3>{video.title}</h3>
          <div className="video-wrapper">
            <iframe
              title={video.title}
              src={video.embedUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;