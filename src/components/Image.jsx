import React from "react";

const ProfileImg = props => {
  return (
    <img
      className="profile-image"
      src={`https://i.pravatar.cc/${props.size}`}
      alt="Face"
    />
  );
};

export default ProfileImg;
