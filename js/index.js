document.querySelector(".btn").addEventListener("click", handleClick);



function handleClick(){
    document.querySelector(".btn").classList.toggle("btn-click");
    let input = document.querySelector(".email-input").value;
    if(input.includes("@")  && input.includes(".com")){
        document.querySelector(".error").classList.remove("error-img");
        
        document.querySelector(".error-msg-hide").classList.remove("error-msg");
        alert(input + " email has been registered. Thanks!");
       
    }else{
        document.querySelector(".error").classList.add("error-img");
        document.querySelector(".error-msg-hide").classList.add("error-msg");
    }
   
}


