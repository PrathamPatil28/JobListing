
// export default Home;
import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="home-container">
      <Typography className="home-title" variant="h3" align="center">
        Get Hired or Hire People for Free !
      </Typography>
      <div className="button-container">
        <ul className="ul">
          <li className="button-item">
            <Button className="home-button hire-button" variant="contained">
              <Link to="/employer/dashboard" className="link">
                Hire Talent
              </Link>
            </Button>
          </li>
          <li className="button-item">
            <Button className="home-button job-button" variant="contained">
              <Link to="/employee/feed" className="link">
                Get Job Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
