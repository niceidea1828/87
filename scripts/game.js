const score = [0, 0];

const attackFuncs = [attackLeftSuccess, attackLeftFail];

const roundAmount = [3, 5, 7][JSON.parse(localStorage.options_b87)[0]];
console.log(roundAmount);

let round = 0;

$(".balance").html(localStorage.balance_b87);

$(".start").click(function () {
  $(this).remove();
  play();
});

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function play() {
  for (let i = 0; i < roundAmount; i++) {
    increaseRound();
    attackFuncs[randInt(0, attackFuncs.length - 1)]();
    await wait(2000);
  }

  gameOver();
}

function gameOver() {
  localStorage.win_b87 = score[1] > score[0];

  window.location.href = "result.html";
}

async function attackLeftSuccess() {
  await wait(300);

  $(".p1").css({
    transform: "translateX(210px)"
  });

  await wait(500);

  $(".ball").css({
    transform: "translate(260px, -55px)"
  });

  await wait(700);

  reset();

  score[0]++;
  $(".score").eq(0).html(score[0]);
}

async function attackLeftFail() {
  await wait(300);

  $(".p1").css({
    transform: "translateX(210px)"
  });

  await wait(500);

  $(".ball").css({
    transform: "translate(180px, -55px)"
  });

  $(".p2").css({
    transform: "translate(-20px, -55px)"
  });

  await wait(700);

  reset();

  score[1]++;
  $(".score").eq(1).html(score[1]);
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function reset() {
  $(".p1, .p2, .ball").css({
    transform: "translate(0, 0)"
  });
}

function increaseRound() {
  round++;
  $(".round").html("Раунд " + round);
}
