if (!localStorage.items_b87) {
  localStorage.items_b87 = JSON.stringify([]);
}

$(".balance").html(localStorage.balance_b87);

let bought = JSON.parse(localStorage.items_b87);
let selected = localStorage.selected_b87;

let shopItems = [
  { name: "1", price: 250 },
  { name: "2", price: 250 },
  { name: "3", price: 250 }
];

$(".balance").html(localStorage.balance_b87);

shopItems.forEach((item) => {
  item.bought = bought.includes(item.name);
  item.selected = item.name == selected;
});

renderCards();

$(".hidden").removeClass("hidden");

function renderCards() {
  $(".shop").html("");

  shopItems.forEach((item) => {
    let cardHtml = `
            <div class="card" data-name="${item.name}">
                <div class="card_top b-btn">
                <img src="../png/t${item.name}.png" alt="" class="card_pic" />
                </div>
                ${getCardHTML(item)}
            </div>
        `;

    $(".shop").append(cardHtml);

    function getCardHTML(item) {
      if (!item.bought) {
        return `
                    <div class="card_btn b-btn" data-price="${item.price}">
                    <img src="../png/coin.png" />  
                    <div>${item.price}</div>
                    </div>
                    `;
      } else {
        return `
                <div class="card_btn b-btn" data-price="${item.price}">
                    <div>${item.selected ? "Selected" : "Select"}</div>
                </div>
                `;
      }
    }
  });

  $(".card_btn").click(function () {
    let btnIndex = $(".card_btn").index($(this));
    let shopItem = shopItems[btnIndex];

    if (!shopItem.bought) {
      if (localStorage.balance_b87 < shopItem.price) {
        return;
      }

      changeBalance(-$(this).data("price"));

      shopItem.bought = true;
      localStorage.items_b87 = JSON.stringify([
        ...JSON.parse(localStorage.items_b87),
        shopItem.name
      ]);
      renderCards();
      console.log(shopItems);
    } else if (!shopItem.selected) {
      localStorage.selected_b87 = shopItem.name;
      shopItems.forEach((item) => (item.selected = false));
      shopItem.selected = true;
      renderCards();
    }
  });
}

function changeBalance(amount) {
  localStorage.balance_b87 = +localStorage.balance_b87 + amount;
  $(".balance").html(localStorage.balance_b87);
}
