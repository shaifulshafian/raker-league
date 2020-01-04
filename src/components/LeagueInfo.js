import React from "react";
import Bundesliga from "../img/Bundesliga.png";
import Eredivisie from "../img/Eredivisie.png";
import LaLiga from "../img/LaLiga.png";
import Ligue1 from "../img/Ligue1.png";
import PremierLeague from "../img/PremierLeague.png";
import SerieA from "../img/SerieA.png";
import RakerLeague from "../img/RakerLeague.jpg";

const LeagueInfo = props => {
  let imgSrc;
  switch (props.leagueCaption) {
    case "RakerLeague":
      imgSrc = RakerLeague;
      break;

    case "Bundesliga":
      imgSrc = Bundesliga;
      break;

    case "Eredivisie":
      imgSrc = Eredivisie;
      break;

    case "Primera Division":
      imgSrc = LaLiga;
      break;

    case "Ligue 1":
      imgSrc = Ligue1;
      break;

    case "Premier League":
      imgSrc = PremierLeague;
      break;

    case "Serie A":
      imgSrc = SerieA;
      break;

    default:
      imgSrc = RakerLeague;
      break;
  }

  return (
    <div className="league-info">
      <img src={imgSrc} alt="League Logo" />
    </div>
  );
};

export default LeagueInfo;
