function nutrition() {
    if (document.getElementById('select1').value == "1") {
        document.getElementById("ri").innerHTML = "Please select a question";
    }
    else if (document.getElementById('select1').value == "2") {
        document.getElementById("ri").innerHTML = "You chose the second choice";
    }
    else {
        document.getElementById("ri").innerHTML = "- first item" + '<br>' + "- second item" + '<br>' + "<span class='text-danger' style='background-color: black; padding: 10px 15px; border-radius: 3px; margin: 15px;'>Note: </span> Last Item" ;
    }
}
$(window).on("load", function () {
    $("#preloader").delay(3500).fadeOut();
})
