const bagButton = document.querySelector("#bagButton");
const bagContainer = document.querySelector("#bag");

bagButton.onclick = showBag;

function showBag() {

    if (bagContainer.style.display === "block") {
        bagContainer.style.display = "none";
    } else {
        bagContainer.style.display = "block";
    }
}

bagButton.addEventListener()