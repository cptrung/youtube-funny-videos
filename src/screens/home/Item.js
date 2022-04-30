import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${props.videoId}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={props.title}
        />
      </div>
      <div>
        <span>{props.title}</span>
        <span>Shared by: {props.email}</span>
        <span>Description</span>
        <p
          dangerouslySetInnerHTML={{
            __html: props.description,
          }}
        ></p>
      </div>
    </div>
  );
};

export default Item;
