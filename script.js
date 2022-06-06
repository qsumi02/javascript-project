document.getElementById('text-changer').onclick =function() {
    var textentered="";
    textentered=document.getElementById('text-input').value;
    document.getElementById('text').innerHTML=textentered;
}
var myArray=new Array()

document.getElementById('checkingmagicword').onclick= function(){
  var magicwordentered=document.getElementById('magicword').value;
  var magicword="sumayyah";
  if (magicwordentered==magicword){
      alert('correct ✔');
  }
  else{
      alert('wrong!, Try Again!')
  }
  
}
document.getElementById('checkguess').onclick=function() {
 var randomNumber=
 Math.floor(Math.random() *6)
  if (document.getElementById('guess').value==randomNumber) {
      alert('well done, you got it right!')
  }  
  else{
      alert('nope! the number was' + randomNumber);
    }
}


 document.getElementById('first-button').onclick=function() {
     document.getElementById ('first-paragraph') .innerHTML= " A. Sumayyah Tajudeen Olabisi"
    }
 document.getElementById('second-button').onclick=function()  {
     document.getElementById('second-paragraph') .innerHTML=  " B. I think"  +  document.getElementById('second-paragraph').innerHTML + "awesome"
 } 
 document.getElementById('third-button').onclick=function(){
     document.getElementById('empty-paragraph') .innerHTML= " <h2> D. HI THERE</h2>👋"
 }
 document.getElementById('styletext').onclick=function(){
     document.getElementById('fourth-paragraph') .style.color="blue"
 }    
 document.getElementById('red-circle').onclick=function() {
     document.getElementById('red-circle').style.display="none"
 }
 document.getElementById('yellow-circle').onclick=function() {
     document.getElementById('yellow-circle').style.display="none"
 }
     
document.getElementById('blue-circle').onclick=function() {
     document.getElementById('blue-circle').style.display="none"
     }





