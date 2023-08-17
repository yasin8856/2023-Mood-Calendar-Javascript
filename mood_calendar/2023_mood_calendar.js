var mood1 = document.querySelector(".mood_1");
var mood2 = document.querySelector(".mood_2");
var mood3 = document.querySelector(".mood_3");
var mood4= document.querySelector(".mood_4");
var mood5 = document.querySelector(".mood_5");
var clear = document.querySelector("#clear");
var days = document.querySelector(".calendar");
var random = document.querySelector(".randomize");

mood1.addEventListener("click", function(){
    mood1.classList.toggle("selected");
    mood2.classList.remove("selected");
    mood3.classList.remove("selected");
    mood4.classList.remove("selected");
    mood5.classList.remove("selected");
    days.addEventListener("click", function(e){
        e.target.classList.remove("mood2");
        e.target.classList.remove("mood3");
        e.target.classList.remove("mood4");
        e.target.classList.remove("mood5");
        e.target.classList.toggle("mood1");
    });
})
mood2.addEventListener("click", function(){
    mood2.classList.toggle("selected");
    mood1.classList.remove("selected");
    mood3.classList.remove("selected");
    mood4.classList.remove("selected");
    mood5.classList.remove("selected");
    days.addEventListener("click", function(e){
        e.target.classList.remove("mood1");
        e.target.classList.remove("mood3");
        e.target.classList.remove("mood4");
        e.target.classList.remove("mood5");
        e.target.classList.toggle("mood2");
    });
})
mood3.addEventListener("click", function(){
    mood3.classList.toggle("selected");
    mood2.classList.remove("selected");
    mood1.classList.remove("selected");
    mood4.classList.remove("selected");
    mood5.classList.remove("selected");
    days.addEventListener("click", function(e){
        e.target.classList.remove("mood2");
        e.target.classList.remove("mood1");
        e.target.classList.remove("mood4");
        e.target.classList.remove("mood5");
        e.target.classList.toggle("mood3");
    });
})
mood4.addEventListener("click", function(){
    mood4.classList.toggle("selected");
    mood2.classList.remove("selected");
    mood3.classList.remove("selected");
    mood1.classList.remove("selected");
    mood5.classList.remove("selected");
    days.addEventListener("click", function(e){
        e.target.classList.remove("mood2");
        e.target.classList.remove("mood3");
        e.target.classList.remove("mood1");
        e.target.classList.remove("mood5");
        e.target.classList.toggle("mood4");
    });
})
mood5.addEventListener("click", function(){
    mood5.classList.toggle("selected");
    mood2.classList.remove("selected");
    mood3.classList.remove("selected");
    mood4.classList.remove("selected");
    mood1.classList.remove("selected");
    days.addEventListener("click", function(e){
        e.target.classList.remove("mood2");
        e.target.classList.remove("mood3");
        e.target.classList.remove("mood4");
        e.target.classList.remove("mood1");
        e.target.classList.toggle("mood5");
    });
})
clear.addEventListener("click", function(){
    for(var i=0; i<365; i++){
       var circle = document.querySelectorAll(".circle")[i];
       if(circle.className != "circle"){
           circle.className = "circle";
       }
    }
})

random.addEventListener("click", function(){
    var moods =["mood1","mood2","mood3","mood4","mood5"];
    for(var i=0; i<365; i++){
        var randomIndex = Math.floor(Math.random() * moods.length);
        var circle = document.querySelectorAll(".circle")[i];
        circle.classList.toggle(moods[randomIndex]);
}});