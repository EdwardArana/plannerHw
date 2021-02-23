var today = moment();


$("#moment").text(today.format('LLLL'));

/// Input var button bellow

var nineHr = $("#hourInput9");
var tenHr = $("#hourInput10");
var elevenHr = $("#hourInput11");
var twelveHr = $("#hourInput12");
var thirteenHr = $("#hourInput13");
var fourteenHr = $("#hourInput14");
var fifteenHr = $("#hourInput15");
var sixteenHr = $("#hourInput16");
var seventeenHr = $("#hourInput17");

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