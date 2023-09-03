let allbtns=document.querySelectorAll(".inner");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
    let btn=this;
    inp=btn.getAttribute("id");
    let sc=document.querySelector("#screen");
   
    if(inp=="c"){
        sc.innerText="";    
    }
   
        
    
    else if(inp=="="){
        ans=sc.innerText;
        try{
        let fa=eval(ans);
        sc.innerText=fa;
        }
        catch(e){
            sc.innerText="chote bacche ho kya";
        }
        console.log(ans);
    }
    else{
       ans= sc.append(inp);
    }
} 