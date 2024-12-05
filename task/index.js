function submitHandler() {
  var num = document.getElementById("number");

  if (num.value >= 10) {
    alert("Success");
  } else {
    alert("Number is smaller than 10");
  }
}
