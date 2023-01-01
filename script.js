
$(document).ready(function () {
  //render todays date:
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY, h:m a')); 

  //save button event listener
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

 

  $(".time-block").each(function timeBlock() {
    var block = $('.time-block');
    var currentTime= dayjs().hour();
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);

    if (blockHour < currentTime) {
      block.addClass('past');
      block.removeClass('present');
      block.removeClass('future')
    } else if (blockHour == currentTime) {
      block.addClass('present');
      block.removeClass('past');
      block.removeClass('future')
    } else if (blockHour > currentTime) {
      block.addClass('future');
      block.removeClass('past');
      block.removeClass('present')
    } 

  })
});
