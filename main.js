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