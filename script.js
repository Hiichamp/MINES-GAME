var btn = document.querySelectorAll(".box-mng #color");
var btn2 = document.querySelector("#reset");
var easy = document.querySelector("#easy")
var medium = document.querySelector("#medium")
var hard = document.querySelector("#hard")
var red = document.querySelectorAll(".red")
var red2 = document.querySelectorAll(".red2")
var red3 = document.querySelectorAll(".red3")
btn.forEach(function(btn){

    btn.addEventListener("click",function(){
        btn.style.backgroundColor = "#04ff00";
      
        
    })
});

btn2.addEventListener("click",()=>{

    btn.forEach(function(btn){

        btn2.addEventListener("click",function(){
            btn.style.backgroundColor = "#fff";
          
           
        })
    })
});

easy.addEventListener("click",()=>{
    red.forEach(function(red){

        red.addEventListener("click",function(){
            red.style.backgroundColor = "red";
          
            
        })
    });

})


// red.forEach(function(red){

//     red.addEventListener("click",function(){
//         red.style.backgroundColor = "red";
      
        
//     })
// });

medium.addEventListener("click",function(){
    red2.forEach(function(red2){

        red2.addEventListener("click",function(){
            red2.style.backgroundColor = "red";
          
            
        })
    });
})

hard.addEventListener("click",function(){
    red3.forEach(function(red3){

        red3.addEventListener("click",function(){
            red3.style.backgroundColor = "red";
          
            
        })
    });
})


