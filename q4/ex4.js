$("body").css("padding","30px 30px")
let button = $("button")
let selectedLine = $("p ,span")
button.on("click",function(){
selectedLine.css({
    backgroundColor:"yellow",
    border:"2px dashed blue"
})
}).css("margin-bottom","11px")