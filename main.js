let plusbtns = Array.from(document.getElementsByClassName("fa-circle-plus"));
let minusbtns = Array.from(document.getElementsByClassName("fa-circle-minus"));
let cards = Array.from(document.getElementsByClassName("card"));
let deletebtns = Array.from(document.getElementsByClassName("fa-trash-can"));
let likebtns = Array.from(document.getElementsByClassName("fa-heart"));

console.log(minusbtns);

function tot() {
  let result = 0;
  let quant = Array.from(document.getElementsByClassName("quantity"));
  let units = Array.from(document.getElementsByClassName("unit-price"));
  for (const i in quant) {
    result += Number(quant[i].innerHTML) * Number(units[i].innerHTML);
    document.querySelector("#total-price").innerHTML = result;
  }
}

for (const i in cards) {
  plusbtns[i].addEventListener("click", () => {
    plusbtns[i].previousElementSibling.innerHTML =
      Number(plusbtns[i].previousElementSibling.innerHTML) + 1;
    tot();
  });
}

for (const i in cards) {
  minusbtns[i].addEventListener("click", () => {
    if (minusbtns[i].nextElementSibling.innerHTML > 0) {
      minusbtns[i].nextElementSibling.innerHTML =
        Number(minusbtns[i].nextElementSibling.innerHTML) - 1;
    }
    tot();
  });
}

for (const el of likebtns) {
  el.addEventListener("click", () => {
    if (el.style.color !== "red") {
      el.style.color = "red";
    } else {
      el.style.color = "black";
    }
  });
}

for (const i in cards) {
  deletebtns[i].addEventListener("click", () => {
    confirm("Are you sure you want to remove this item?") && cards[i].remove();
    tot();
  });
}

tot();
