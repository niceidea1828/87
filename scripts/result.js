const options = JSON.parse(localStorage.options_b87);

const rounds = [3, 5, 7];
const bets = [100, 500, 1000];

$(".round").html(rounds[options[0]]);
$(".bet").html(options[1] ? "На поражение" : "На победу");
$(".bet-amount").html(bets[options[2]] * 2);

$(".result").html(
  options[1] == JSON.parse(localStorage.win_b87) ? "Победа" : "Поражение"
);

changeBalance(options[1] == JSON.parse(localStorage.win_b87) ? 2000 : 0);

function changeBalance(amount) {
  localStorage.balance_b87 = +localStorage.balance_b87 + amount;
}
