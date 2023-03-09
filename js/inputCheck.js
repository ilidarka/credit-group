let images = document.querySelectorAll(".none");

let input_check = document.querySelectorAll("#input_check");

const DEB = () => {
  for (let i = 0; i < input_check.length; i++) {
    if (input_check[i].value != "") {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
};
