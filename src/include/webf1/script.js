/*Sticky Header*/
var pageLoaded = function() {
        window.addEventListener("scroll", stickyScroll);
        window.addEventListener()
};
var stickyScroll = function() {
        var nav = document.getElementById('navigation');
          if (this.pageYOffset > 75) {
            nav.classList.add('nav-fixed');
          }
          else {
            nav.classList.remove('nav-fixed');
          };
};
window.addEventListener("load", pageLoaded);

/*Worklog toggle*/
function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block') {
          e.style.display = 'none';
          e.classList.remove('transitionArrow');
        }
       else {
          e.style.display = 'block';
          e.classList.add('transitionArrow');
        }

  };


  /*Worklog rotate arrow*/
  //function rotateArrow
