const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    { name: "Sergio Almirón", position: "forward", number: 1, isCaptain: false, nickname: null },
    { name: "Sergio Batista", position: "midfielder", number: 2, isCaptain: false, nickname: null },
    { name: "Ricardo Bochini", position: "midfielder", number: 3, isCaptain: false, nickname: "El Bocha" },
    { name: "Claudio Borghi", position: "midfielder", number: 4, isCaptain: false, nickname: "Bichi" },
    { name: "José Luis Brown", position: "defender", number: 5, isCaptain: false, nickname: "Tata" },
    { name: "Diego Maradona", position: "midfielder", number: 10, isCaptain: true, nickname: "El Pibe de Oro" },
    { name: "Jorge Valdano", position: "forward", number: 11, isCaptain: false, nickname: "The Philosopher of Football" },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

setPlayerCards();

playersDropdownList.addEventListener("change", (e) => {
  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
      break;
    default:
      setPlayerCards();
  }
});