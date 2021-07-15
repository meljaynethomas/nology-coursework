let teamScoreOne = 0;
let teamScoreTwo = 0;

function handleTeamOneClick() {
  let teamScoreOne = parseInt(document.getElementById('currentScore1').value);
  teamScoreOne = teamScoreOne + 1;
  document.getElementById('currentScore1').value = teamScoreOne;
}

function handleTeamTwoClick() {
  let teamScoreTwo = parseInt(document.getElementById('currentScore2').value);
  teamScoreTwo = teamScoreTwo + 1;
  document.getElementById('currentScore2').value = teamScoreTwo;
}