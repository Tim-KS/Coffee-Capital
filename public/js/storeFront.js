let orderNowBtn = document.getElementById('orderNowBtn');
let readyBtn = document.getElementById('readyBtn');
let yesBtn = document.getElementById('yesBtn');
let aboutBtn = document.getElementById('aboutBtn');

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    var cartOpen = false;
    if(cartOpen === false) {
        document.getElementById("mySidebar").style.width = "450px";
        document.getElementById("cart").style.marginLeft = "450px";
        var cartOpen = true;
    } else if(cartOpen === true) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("cart").style.marginLeft = "0";
        cartOpen = false;
    }
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("cart").style.marginLeft = "0";
    cartOpen = false;
  }

// orderNowBtn.addEventListener('click', function() {
//     document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
// })

readyBtn.addEventListener('click', function() {
    document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
})

yesBtn.addEventListener('click', function() {
    document.getElementById("menu").scrollIntoView({behavior: 'smooth'});
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbarTop").style.top = "0";
  } else {
    document.getElementById("navbarTop").style.top = "-100px";
  }
}