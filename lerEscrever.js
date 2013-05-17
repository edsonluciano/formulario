document.addEventListener("deviceready", onDeviceReady, false);
var ﬁlename = "lerescrever.txt";
var ﬁlePath = "ﬁle:///sdcard/lerescrever.txt";
var textarea = document.getElementById("#textarea");
function onDeviceReady() {
$(document).ready(function() {
var readButton = document.getElementById("read");
var writeButton = document.getElementById("write");
readButton.addEventListener("click", readFile, false);
writeButton.addEventListener("click", saveFile, false);
});
}