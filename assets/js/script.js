// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  $('#saveBtn').click(function(){
    const userInput = $('textarea').val();
    const timeBlockId = $(this).closest('.time-block').attr('id');
    // console.log(`Clicked button in time-block with id: ${timeBlockId}`);
    localStorage.setItem(timeBlockId, userInput);
    $('#confirm').text('saved to local storage')
  })
})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(function () {
  const currentHour = dayjs();
  const time24Hour = currentHour.format("H");
  // const str = time24Hour.toString();
  // console.log(time24Hour)
  $(".time-block").each(function() {
    const timeBlockId = parseInt($(this).attr("id"));
    // console.log(timeBlockId)
    if (timeBlockId < time24Hour) {
      $(this).addClass("past");
    } else if (timeBlockId === time24Hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
})
$(function () {
  const currentDay = dayjs();
  $('#currentDay').text(currentDay.format('MMMM D, YYYY'))
})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(function () {
  const savedInput = localStorage.getItem("userInput");
  if (savedInput) {
    var userInput = JSON.parse(savedInput);
    $("textarea").each(function() {
      var textareaId = $(this).attr("id");
      if (userInput.hasOwnProperty(textareaId)) {
        $(this).val(userInput[textareaId]);
      }
    });
  }
})
// setInterval(dayjs(), 1000)
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
