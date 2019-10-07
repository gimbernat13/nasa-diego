import React from "react";
import "./MissionDetails.css";
const MissionDetails = () => {
  return (
    <div>
      <h3>Mission Details</h3>
      <h5>Curiosity Rover</h5>

      <ul>
        <li>Launch Date: </li>
        <li>Landing Date: </li>
        <li>Status: </li>
        <li>lihotos taken By XXXX </li>
      </ul>

      <p>
        <strong>Description</strong>
      </p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum atque
        neque laboriosam ea odio. Debitis consectetur molestiae blanditiis
        similique, nisi aut doloribus. Sapiente qui explicabo sunt doloribus
        esse, ipsa fuga?
      </p>
    </div>
  );
};

export default MissionDetails;
