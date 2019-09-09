import React from "react";
import useWinSize from "../hooks/WindowSizeHook";
import { NavLink } from "react-router-dom";
import { faBalanceScaleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GridCard = props => {
  const { width } = useWinSize();
  console.log(width);
  return (
    <div className="card">
      <div className="first-column">
        <div className="profile-sidebar">
          {width > 700 ? (
            <img
              className="profile-image"
              src="https://i.pravatar.cc/170"
              alt="Face"
            />
          ) : (
            <img
              className="profile-image"
              src="https://i.pravatar.cc/150"
              alt="Face"
            />
          )}

          <ul className="social-list">
            <li className="social-link">
              <NavLink to="#" className="social-link">
                <FontAwesomeIcon
                  className="iconHover"
                  icon="address-card"
                  size="lg"
                  color="green"
                />
              </NavLink>
            </li>
            <li className="social-link">
              <NavLink to="#" className="social-link">
                <FontAwesomeIcon
                  className="iconHover"
                  icon={faBalanceScaleLeft}
                  size="lg"
                  color="green"
                />
              </NavLink>
            </li>
            <li className="social-link">
              <NavLink to="#" className="social-link">
                <FontAwesomeIcon
                  className="iconHover"
                  icon="coins"
                  size="lg"
                  color="green"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="second-column">
        <div className="profile-main">
          <h2 className="profile-name">Ramsey Harper</h2>
          <p className="profile-position">Graphic Designer</p>
          <p className="profile-body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            quae hic quos qui tempora vitae nemo enim omnis reiciendis ullam
            accusamus similique, nulla tempore rem sequi velit nam, sed
            reprehenderit!Accusamus, perspiciatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
