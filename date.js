//jshint esversion:6

exports.getDate = function () {

const date = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "short"
};

let today = date.toLocaleDateString("en", options);
return today;
};


exports.getDay = getDay;

function getDay() {

const date = new Date();

const options = {
  weekday: "long",
};

let today = date.toLocaleDateString("en", options);

return today;
}
