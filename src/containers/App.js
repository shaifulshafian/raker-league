import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Row from "../components/Row";
import TableBody from "../components/TableBody";
import LeagueInfo from "../components/LeagueInfo";
import { robots } from "../robots";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueName: "Raker Liga",
      rows: [],
      leagueId: "RL",
      leagues: {
        RakerLeague: "RL",
        "La Liga": "PD",
        "Premier League": "PL",
        Eredivisie: "DED",
        "Ligue 1": "FL1",
        Bundesliga: "BL1",
        "Serie A": "SA"
      },
      buttons: []
    };
    this.handleLeagueClick = this.handleLeagueClick.bind(this);
  }

  handleLeagueClick(e) {
    const newId = e.target.getAttribute("data-leagueid");
    this.setState(
      {
        leagueId: newId
      },
      () => {
        if (this.state.leagueId === "RL") {
          this.fetchSiput();
        } else {
          this.fetchData();
        }
      }
    );
  }

  fetchSiput() {
    const rows = [];
    robots.map((user, index) => {
      return rows.push(
        <Row
          key={index}
          position={robots[index].position}
          //crestURI={}
          teamName={robots[index].teamName}
          playedGames={robots[index].playedGames}
          wins={robots[index].wins}
          draws={robots[index].draws}
          losses={robots[index].losses}
          //goalsFor={robots[index].name}
          //goalsAgainst={robots[index].name}
          //goalDifference={robots[index].name}
          points={robots[index].points}
        />
      );
    });
    this.setState({
      leagueName: "Raker Liga",
      rows: rows
    });
  }

  fetchData() {
    const Token = "b7d52e61c66f4a0194be725042ad4359",
      leagueId = this.state.leagueId,
      URL =
        "https://api.football-data.org/v2/competitions/" +
        leagueId +
        "/standings";

    fetch(URL, { headers: { "X-Auth-Token": Token } })
      .then(response => response.json())
      .then(responseJson => {
        const rows = [];
        responseJson.standings[0].table.map((item, index) => {
          const {
            position,
            playedGames,
            won,
            draw,
            lost,
            //goalsFor,
            //goalsAgainst,
            //goalDifference,
            points
          } = item;
          const { crestUrl, name } = item.team;

          return rows.push(
            <Row
              key={index}
              position={position}
              crestURI={crestUrl}
              teamName={name}
              playedGames={playedGames}
              wins={won}
              draws={draw}
              losses={lost}
              //goalsFor={goalsFor}
              //goalsAgainst={goalsAgainst}
              //goalDifference={goalDifference}
              points={points}
            />
          );
        });
        this.setState({
          leagueName: responseJson.competition.name,
          rows: rows
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    // this.fetchData();
    // shall be OK to call fetchSiput since initial is Raker League!
    this.fetchSiput();
    for (let key in this.state.leagues) {
      this.state.buttons.push(
        <Button
          handleClick={this.handleLeagueClick}
          key={this.state.leagues[key]}
          leagueId={this.state.leagues[key]}
          text={key}
        />
      );
    }
  }

  render() {
    return (
      <div className="app">
        <Header>{this.state.buttons}</Header>
        <div className="container">
          <LeagueInfo leagueCaption={this.state.leagueName} />
          <TableBody>{this.state.rows}</TableBody>
        </div>
      </div>
    );
  }
}

export default App;
