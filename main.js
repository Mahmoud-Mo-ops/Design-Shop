let icon=document.querySelector('.icon');
let ul=document.querySelector('.header .links ul');
let backdrop=document.querySelector('.backdrop');

icon.onclick=()=>{
   ul.style.display="block";
   backdrop.style.display="block";
}

backdrop.onclick=()=>{
    ul.style.display="none";
    backdrop.style.display="none";
 }

 /*start to make scroll effect*/
 let header=document.querySelector('.header');
 let landing=document.querySelector('.landing');

 window.onscroll=function(){
   header.classList.add('scroll');
   landing.style.height="100vh";
 }
 // Dark mode
//select button
let toggle=document.getElementById('toggleDark');
//select body
let body=document.querySelector('body');
toggle.addEventListener('click',toggleDark);
function toggleDark(){
  this.style.transition="all 1s linear";
  this.style.transform="rotate(360deg)";
   this.classList.toggle('bi-moon');
    if(toggle.classList.contains('bi-moon')){                      
              body.classList.add('darkMode');
    } else{
            body.classList.remove('darkMode');
            body.style.transition="2s";
      
      }
  }
  
  //scroll to top
  let up =document.querySelector('.up');
  if(window.scrollY >= 45){
   up.style.display="block";
 } else{
    up.style.display="none";
 }

 up.onclick=function(){
   console.log(up)
 }
 up.addEventListener('click',()=>{
   window.scrollTo({
     left:0,
     top:0,
     behavior:"smooth",
   })
 })  
