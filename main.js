let icon=document.querySelector('.icon');
let ul=document.querySelector('.header .links ul');
let backdrop=document.querySelector('.backdrop');

icon.addEventListener('click',function(){
  ul.classList.toggle('show');
  if(ul.classList.contains("show")){
      backdrop.style.display="flex";
  }else{
    backdrop.style.display="none";

  }
})
// icon.onclick=()=>{
//    ul.style.display="block";
//    backdrop.style.display="block";
// }

// backdrop.onclick=()=>{
//     ul.style.display="none";
//     backdrop.style.display="none";
//  }

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
  
  