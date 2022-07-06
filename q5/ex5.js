let URL ="https://62ab3440a62365888bd75cdd.mockapi.io/api/todosList"
let button = $("button")
let box= $("#box")
// adding css to body and button
$("body").css({
margin:"0 0",
backgroundColor:"#CEF798",
width:"100vw",
height:"100vh",
})
button.css({
    backgroundColor:"pink",
    width:"10%",
    height:"5%",
    margin:"10px 20px",
    borderRadius:"5px",
    cursor:"pointer",
    
})
// adding event to button
button.on("click",function(){
    $.ajax({url:URL,
    
         success: function(result){
        box.text(JSON.stringify(result)).css("margin","10px 20px");
      }});
    })

