$(document).ready(function(){
  
   $("#anim-text").typed({
    strings: ["EventsGuru", "Making every event better"],
    typeSpeed: 7,
    backDelay: 900,
    backSpeed: 1,
    loop: true,
    startDelay: 1
  });

  $("#scenary").typed({
    strings: ["We will make you a scenary", "It will be something like this" ,"...", "...",
     "First verse of scenary" ,"..." ,"..." ,"Oh no, it's bad",
     "Second verse of scenary" ,"..." ,"..." ,"Oh, it's better",
     "Fine" , "We are sending it to you" , "Поставьте зачет", "))))"],
    typeSpeed: 12,
    backDelay: 900,
    backSpeed: 1,
    loop: true,
    startDelay: 1
  });
  
  
  let header = document.getElementsByTagName('header')[0];
  window.onscroll = () => {
    let h =  window.pageYOffset;
    if(h>100)
      header.classList.add('active');
    else  
      header.classList.remove('active');
  }
});