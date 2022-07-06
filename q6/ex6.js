// adding style to elements
$("body").css({
display:"flex",
flexDirection:"column",
alignItems:"center",
backgroundColor:"#98F7ED ",
})
$("h1").css({
    color:"white"
})
$("button , input").css({
    borderRadius:"5px",
    
})
// adding event to add button
let button = $("button")
let input = $("input")
button.on("click",function(){
    
    let box = `<li class="list-group-item bg-white my-1 text-center" aria-current="true">${input.val()}</li>`    
    $('.list-group').append(box)
    input.val('')

    
    
})
$('.list-group').click((e)=>{
    e.target.remove()
})
