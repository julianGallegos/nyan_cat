var http = new XMLHttpRequest();
var url = "http://api.justyo.co/yo/";
var key = "c6#6be#c-449e-4#14-903d-########"; 
var params = "api_token=" + key + "&username=runningyo"
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", params.length);
http.setRequestHeader("Connection", "close");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);

var imgs = document.querySelectorAll("img")

var nyanCat = "http://cdn.nyanit.com/nyan2.gif"

for (i = 0; i < imgs.length; i++) {
	imgs[i].src = nyanCat	
}
