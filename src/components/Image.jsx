import React from "react";

const ProfileImg = ({ size }) => {
  return (
    <img
      className="profile-image"
      src={`https://i.pravatar.cc/${size}`}
      alt="Face"
    />
  );
};

export default ProfileImg;
