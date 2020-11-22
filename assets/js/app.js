// On clique
function showHint(str) {
    // Initiate XMLHttpRequest object
    var xhttp;
    // Check if something is written in the field
    if (str.length == 0) {
        // If not ensure that it's empty
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    // Create the XMLHttpRequest object
    xhttp = new XMLHttpRequest();
    // Create the function to be executed when the server response is ready
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };
    // Send the request off to a PHP file (gethint.php) on the server
    // Notice that q parameter is added gethint.php?q="+str
    // The str variable holds the content of the input field
    xhttp.open("GET", "assets/files/gethint.php?q="+str, true);
    xhttp.send();
}