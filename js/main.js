var elDistanceForm = document.querySelector(".distance__form");
var elDistanceInput = elDistanceForm.querySelector(".distance__input");
var elDistanceResult = elDistanceForm.querySelector(".distance__alert");
var elPedastrianVelocity = document.querySelector(".pedestrian__velocity");
var elBikeVelocity = document.querySelector(".bike__velocity");
var elCarVelocity = document.querySelector(".car__velocity");
var elPlaneVelocity = document.querySelector(".plane__velocity");

var PEDESTRIAN_VELOCITY = 3.6;
var BIKE_VELOCITY = 20.1;
var CAR_VELOCITY = 70;
var PLANE_VELOCITY = 800;

function formatTime(time) {
  var hour = Math.floor(time);
  var minute = Math.floor((time - hour) * 60);
  var second = Math.floor(((time - hour) * 60 - minute) * 60);

  if (hour === 0 && minute > 0 && second > 0) {
    return minute + " minutes " + second + " seconds";
  } else if (hour === 0 && (second === 0) & (minute >= 0)) {
    return minute + " minutes";
  } else if (minute === 0 && hour > 0 && second > 0) {
    return hour + " hours " + second + " seconds";
  } else if (hour === 0 && minute === 0 && second > 0) {
    return second + " seconds";
  } else if (second === 0 && hour > 0 && minute > 0) {
    return hour + " hours " + minute + " minutes";
  } else if (minute === 0 && second === 0 && hour > 0) {
    return hour + " hours";
  } else {
    return hour + " hours " + minute + " minutes " + second + " seconds";
  }
}

function calculate(element, distance, velocity) {
  element.textContent = formatTime(distance / velocity);
}

function handleDistanceFormSubmit(evt) {
  evt.preventDefault();
  var userDistance = Number(elDistanceInput.value.trim());

  if (isNaN(userDistance) || userDistance <= 0) {
    elDistanceResult.textContent = "Please, enter a valid number!";
    elDistanceResult.classList.add("distance__alert");
    return;
  } else {
    elDistanceResult.textContent = "";
    elDistanceResult.classList.remove("distance__alert");
    elPedastrianVelocity.style.color = "green";
    elBikeVelocity.style.color = "green";
    elCarVelocity.style.color = "green";
    elPlaneVelocity.style.color = "green";
  }

  calculate(elPedastrianVelocity, userDistance, PEDESTRIAN_VELOCITY);
  calculate(elBikeVelocity, userDistance, BIKE_VELOCITY);
  calculate(elCarVelocity, userDistance, CAR_VELOCITY);
  calculate(elPlaneVelocity, userDistance, PLANE_VELOCITY);
}

elDistanceForm.addEventListener("submit", handleDistanceFormSubmit);
