;(function() {
 "use strict";
 var menuToggle = document.querySelector('.ba-menu-toggle'),
         menu = document.querySelector('.ba-menu'),
         body = document.body;


     menuToggle.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
         console.log('hello');
     });

    /* overlay.addEventListener('click', function(){
         body.classList.toggle('ba-menu-open');
     });*/


})();

