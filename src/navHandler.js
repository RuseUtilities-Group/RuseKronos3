document.getElementById("timetablePage").style.display = "none";
document.getElementById("bellTimesPage").style.display = "block";
document.getElementById("settingsPage").style.display = "none";

document.getElementById("timetableButton").addEventListener("click", function() {
    document.getElementById("timetablePage").style.display = "block";
    document.getElementById("bellTimesPage").style.display = "none";
    document.getElementById("settingsPage").style.display = "none";
});

document.getElementById("homeButton").addEventListener("click", function() {
    document.getElementById("timetablePage").style.display = "none";
    document.getElementById("bellTimesPage").style.display = "block";
    document.getElementById("settingsPage").style.display = "none";
});

document.getElementById("settingsButton").addEventListener("click", function() {
    document.getElementById("timetablePage").style.display = "none";
    document.getElementById("bellTimesPage").style.display = "none";
    document.getElementById("settingsPage").style.display = "block";
});