var today = moment();
$("#moment").text(today.format('LLLL'));

/// Input var button bellow

var nineHr = $("#9");
var tenHr = $("#10");
var elevenHr = $("#11");
var twelveHr = $("#12");
var thirteenHr = $("#13");
var fourteenHr = $("#14");
var fifteenHr = $("#15");
var sixteenHr = $("#16");
var seventeenHr = $("#17");

/// Save var buttons bellow

var saveNine = $("#save9");
var saveTen = $("#save10");
var saveEleven = $("#save11");
var saveTwelve = $("#save12");
var saveThirteen = $("#save13");
var saveFourteen = $("#save14");
var saveFifteen = $("#save15");
var saveSixteen = $("#save16");
var saveSeventeen = $("#save17");

/// Gets information from local storage

nineHr.val(localStorage.getItem("9am"));
tenHr.val(localStorage.getItem("10am"));
elevenHr.val(localStorage.getItem("11am"));
twelveHr.val(localStorage.getItem("12pm"));
thirteenHr.val(localStorage.getItem("1pm"));
fourteenHr.val(localStorage.getItem("2pm"));
fifteenHr.val(localStorage.getItem("3pm"));
sixteenHr.val(localStorage.getItem("4pm"));
seventeenHr.val(localStorage.getItem("5pm"));

/// This is saving the information once the button is pressed

saveNine.on("click", () => {
    localStorage.setItem("9am", nineHr.val())
});

saveTen.on("click", () => {
    localStorage.setItem("10am", tenHr.val())
});

saveEleven.on("click", () => {
    localStorage.setItem("11am", elevenHr.val())
});

saveTwelve.on("click", () => {
    localStorage.setItem("12pm", twelveHr.val())
});

saveThirteen.on("click", () => {
    localStorage.setItem("1pm", thirteenHr.val())
});

saveFourteen.on("click", () => {
    localStorage.setItem("2pm", fourteenHr.val())
});

saveFifteen.on("click", () => {
    localStorage.setItem("3pm", fifteenHr.val())
});

saveSixteen.on("click", () => {
    localStorage.setItem("4pm", sixteenHr.val())
});

saveSeventeen.on("click", () => {
    localStorage.setItem("5pm", seventeenHr.val())
});

/// This function will change the color of the rows by adding and removing classes.

function currentTime() {     
  var currentHour = moment().hours();
    $(".row").each(function() {
        var pastHr = $(this).children().attr("id")
        console.log(pastHr);
      
        if (pastHr < currentHour) {
           $(this).children(".notes").addClass("past");
        }
        else if (pastHr == currentHour) {
            $(this).children(".notes").removeClass("past");
            $(this).children(".notes").addClass("present");
       }
       else{
           $(this).children(".notes").removeClass("past");
            $(this).children(".notes").removeClass("present");
            $(this).children(".notes").addClass("future");
     }
  });
}

currentTime();


