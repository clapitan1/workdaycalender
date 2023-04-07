// Get current date and time
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().hour();

// Display current date at the top of the page
$("#currentDay").text(currentDate);

// Set color of time blocks based on whether they are in the past, present, or future
$(".time-block").each(function() {
  var hour = parseInt($(this).children(".hour").text());
  if (hour < currentHour) {
    $(this).children(".description").addClass("past");
  } else if (hour === currentHour) {
    $(this).children(".description").addClass("present");
  } else {
    $(this).children(".description").addClass("future");
  }
});

// Save events to local storage when save button is clicked
$(".saveBtn").on("click", function() {
  var hour = $(this).siblings(".hour").text();
  var event = $(this).siblings(".description").val();
  localStorage.setItem(hour, event);
});

// Load saved events from local storage
$(".time-block").each(function() {
  var hour = $(this).children(".hour").text();
  var event = localStorage.getItem(hour);
  $(this).children(".description").val(event);
});

// Clear all events from local storage when clear button is clicked
$("#clearBtn").on("click", function() {
  localStorage.clear();
  $(".description").val("");
});

const today = new Date(); // create a new Date object with the current date and time
const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][today.getDay()]; // get the day of the week from the Date object and use it to access the corresponding day name from the array
const dayOfMonth = today.getDate(); // get the day of the month from the Date object
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][today.getMonth()]; // get the month from the Date object and use it to access the corresponding month name from the array
const year = today.getFullYear(); // get the year from the Date object

var currentDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`; // concatenate the day name, day of the month, month name, and year to form the current date in a readable format

document.getElementById("current-date").innerHTML = currentDate; // set the innerHTML of an element with the ID "current-date" to the current date
