const options = [0, 0, 0];

if (!localStorage.options_b87) {
  localStorage.options_b87 = JSON.stringify(options);
}

for (let i = 0; i < 3; i++) {
  const selector = `.option_${i + 1}`;

  $(selector).click(function () {
    $(selector).removeClass("act");
    $(this).addClass("act");

    options[i] = $(this).index(selector);
    localStorage.options_b87 = JSON.stringify(options);
  });
}

$(".balance").html(localStorage.balance_b87);
