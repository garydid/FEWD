


var hamburger = document.getElementById('hamburger');

var navContainer = document.getElementById('navContainer');

var container = document.getElementById('container');

hamburger.addEventListener("click", function(){

  // navContainer.style.display = "block";

  // container.style.width = "50%";
  if( navContainer.style.display == "")

    { navContainer.style.display = "block"; }

    else if( navContainer.style.display == "block")

      { navContainer.style.display = ""; }




});
