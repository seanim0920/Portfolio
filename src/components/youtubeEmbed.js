import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <iframe
      width="1920"
      height="1080"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      style={{width: "100%", height: "100%"}}
    />
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;