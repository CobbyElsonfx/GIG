// Search Bar & Toggle
//open to bar button 
$('#toggle-search').on('click', function() {
    $('#searchBar').fadeIn("slow");
  });

//close top bar 

$('.fa-xmark ').on('click', function() {
    $('#searchBar').fadeOut("slow");
  });


//navbar toggler
function hideFunction(x) {
    
    $('.fa-toggle-on').hide();
    $('.fa-toggle-off').show();

    // x.classList.toggle("fa-solid fa-toggle-off");
  }
  function showFunction(x) {
    
    $('.fa-toggle-on').show();
    $('.fa-toggle-off').hide();

    // x.classList.toggle("fa-solid fa-toggle-off");
  }
  









// button that takes user to top of the screen
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
 } else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 