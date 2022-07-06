$("body").css("padding","30px 40px")
let para = $("p")
let a = true
let button =$("button")
button.css({
    backgroundColor:"#46FFBB",
    padding:"5px 20px",
    borderRadius:"10px"
})
button.on("click",()=>{
    if (a){
        para.hide()
        button.text("Show")
        a=false
        return a  
    }
    else{
        para.show()
        button.text("Hide")
        a=true
        return a
    }
    
})