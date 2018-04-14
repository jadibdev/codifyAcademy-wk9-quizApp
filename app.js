var button = document.getElementById('result-button');
var button_2 = document.getElementById('retake-button');
var correct_answer = 0;
var wrong_answer = 0;


button.addEventListener("click", function() {
  var inputValue = document.getElementById('input').value;
  var input = document.getElementById("input");
  if (inputValue.toLowerCase() === "tallinn") {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input").value = "";
  }

  var inputValue_2 = document.getElementById('input-2').value;
  if (inputValue_2.toLowerCase() === "css") {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-2").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-2").value = "";
  }

  var inputValue_3 = Number(document.getElementById('input-3').value);
  if (inputValue_3 === 3) {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-3").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-3").value = "";
  }

  var inputValue_4 = Number(document.getElementById('input-4').value);
  if (inputValue_4 === 4) {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-4").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-4").value = "";
  }

  var inputValue_5 = document.getElementById('input-5').value;
  if (inputValue_5.toLowerCase() === "delaware") {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-5").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-5").value = "";
  }

  var inputValue_6 = document.getElementById('input-6').value;
  if (inputValue_6.toLowerCase() === "la") {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-6").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-3").value = "";
  }

  var inputValue_7 = Number(document.getElementById('input-7').value);
  if (inputValue_7 === 1) {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-7").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-7").value = "";
  }

  var inputValue_8 = Number(document.getElementById('input-8').value);
  if (inputValue_8 === 1776) {
    correct_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-8").value = "";
  } else {
    wrong_answer += 1;
    document.getElementById('positive').innerHTML = correct_answer;
    document.getElementById('negative').innerHTML = wrong_answer;
    document.getElementById("input-8").value = "";
  }
});

button_2.addEventListener("click", function() {
  correct_answer = 0;
  wrong_answer = 0;
  document.getElementById('positive').innerHTML = correct_answer;
  document.getElementById('negative').innerHTML = wrong_answer;
});
