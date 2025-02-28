document.getElementById("submit1")
.addEventListener("click", function(event){
    alert("Fix Mobile Button Issue ")
   const total= document.getElementById("Assingd").innerText;
   //console.log (typeof total)
  const result = taskAssinged(total);
  //console.log (result)
   
document.getElementById("Assingd").innerText = result;
 const inactive = document.getElementById("submit1")
 inactive.disabled = true;
//  inactive.innerText = disaabled;

})