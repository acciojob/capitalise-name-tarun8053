//your JS code here. If required.
let str = document.getElementById("fname");
str.addEventListener("blur", function () {
  str.value = str.value.toUpperCase();
});