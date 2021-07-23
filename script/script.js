

function nutrition() {


if (document.getElementById('select1').value == "1") {
    document.getElementById("ri").innerHTML = "Please select a question!";
}
else if (document.getElementById('select1').value == "2") {
    document.getElementById("ri").innerHTML = "Yes, but switch full creamed milk with skimmed milk or almond milk. Also, switch white sugar with fructose or sweetner.";
}
else if (document.getElementById('select1').value == "3") {
    document.getElementById("ri").innerHTML = "- Liver, chicken breasts, steak, shrimp, fillet and rabbits. All of them are alternatives, you can switch between them with the same grams." + '<br>' + "- 180 gm greek yogurt is alternative with 100 gm cottage cheese." + '<br>' + "- 100 gm smoked salmon are alternative with 100 gm smoked turkey." + '<br>' + "- 5 egg whites can be switched with 2 whole eggs. ";
}
else if (document.getElementById('select1').value == "4") {
    document.getElementById("ri").innerHTML = "Nuts, avocado, flaxseeds, sesame, soymilk and soybeans";
}
else if (document.getElementById('select1').value == "5") {
    document.getElementById("ri").innerHTML = "Red meat, seafood, peas, liver, spinach and dried fruits such as apricots, raisins, ";
}
else if (document.getElementById('select1').value == "6") {
    document.getElementById("ri").innerHTML = "The most important thing is to be in caloric deficit, eat sufficient amount of proteins, minimize your quantities of carbohydrates, drink +3 liters of water and sleep from 7-9 hours.";
}
else if (document.getElementById('select1').value == "7") {
    document.getElementById("ri").innerHTML = "- 1.4 to 2 gm of protein/kg of your total weight." + '<br>' + "- 0.4 to 0.5 gm of fats/kg of your total weight." + '<br>' + "- 2 to 4 gm of carbohydrates/kg of your total weight." + '<br>' + "<span class='fw-bolder text-danger'>Note:</span> these amounts to maintain your weight, if you want to lose weight minimize your amounts of carbohydrates per day as much as you can and vise versa. In both cases (losing or gaining weight), you must eat high amounts of proteins.";
}
}
        function myFunction() {
  document.querySelector(".navigation__checkbox").click();
}
$(window).on('load', function () {
  $(".loader").fadeIn();
  $("#loader-text").delay(2000).fadeIn();
  $("#preloder").delay(3500).fadeOut();


});

$(window).on('load', function () {
    $(".loader").fadeIn();
    $("#loader-text").delay(2000).fadeIn();
    $("#preloder").delay(3500).fadeOut();


  });