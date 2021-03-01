var containerEle=document.body.querySelector(".container");
var animalsEle =["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i=0; i<animalsEle.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML=animalsEle[i];
  containerEle.appendChild(ele);

   if (animalsEle[i] == "cat"){
    document.getElementById("I am a cat");
  
  }else if(animalsEle[i] == "dog"){
     document.getElementById("borf borf");
   
  }else{
     document.getElementById("I'm an animal");   
  }
}
function button(){
  var animalsEle =["dog","fish","cat","shark","cat","dog"];
  list = animalsEle.sort(() => Math.random() - 0.5);
}