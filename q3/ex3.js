
let button=$("button")
let paragraph=$("#para")
// adding style to body , form and button
$("body").css("padding","30px 30px")
$("div , #para").css("margin","10px 0px")
button.css("border-radius","5px")
// first way:
button.on("click",function(){
    let str = $( "form" ).serialize()
     paragraph.text(str)
})




