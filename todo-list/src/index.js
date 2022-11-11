import "./css/styles.scss";

(() => {
  let i = 0;
  let plusBtn = document.querySelector(".plus-btn");
  const counter = document.createElement("p");
  counter.innerHTML = "<b>Quantity: </b>" + i++;
  document.querySelector(".container").appendChild(counter);

  plusBtn.addEventListener("click", () => {
    counter.innerHTML = "<b>Quantity: </b>" + i++;
  });
})();
