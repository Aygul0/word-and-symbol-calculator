

var area = document.querySelector("textarea")
var character = document.querySelector(".character")
var word = document.getElementsByClassName("word")[0]
 function writem(){
    var value1 = area.value.split(" ")
    var value2 = value1.join("").trim()
    character.innerHTML=value2.length

    var value3 = document.querySelector("textarea").value.split(" ")
    var value4 = value3.filter(function(n){
        return n != ''})
    word.innerHTML = value4.length
    if(value4==0|| value2==0){
        character.innerHTML=0
        word.innerHTML=0
    }
 }



