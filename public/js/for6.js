///////////////////////////////////////////////
// title.js

(function(global) {
  function Module() {

    var zg = hrr2.getZg();

    var myTitles = [];
    for (var i = 0; i < zg.length; i++) {
      zg[i].className = 'titles'
      myTitles.push(zg[i])
    }

    ///////////////////////////////////////////
    // toNav.js
    var ulNav = document.getElementById('scrl');

    for (var i = 0; i < myTitles.length; i++) {
      var aAtr = myTitles[i].getAttribute('name')
              || myTitles[i].getAttribute('id')
              || i + 1;
      if (!myTitles[i].hasAttribute('id')) {
        myTitles[i].setAttribute('id', aAtr);
      }
      
      var aNav = document.createElement('a');
      aNav.innerHTML = myTitles[i].innerText;
      aNav.setAttribute('href', '#' + aAtr);
      var liNav = document.createElement('li');
      liNav.appendChild(aNav);
      ulNav.appendChild(liNav);
    }

    ///////////////////////////////////////
    // scroll.js

    window.addEventListener('scroll',scrollFix);

    function scrollFix() {
      if (window.pageYOffset > 50) {
        document.getElementById('clogl').className = 'fixed';
      } else {
        document.getElementById('clogl').className = '';
      }

      //------------add Img---------------
      var image = document.querySelector('header img');
      if (image == null) {
        image = document.querySelector('main img');
      }
      if (window.scrollY > 500) {
        document.getElementById("img").src = image.src;
      } else {
        document.getElementById("img").src = '';
      }
      
      // ----- current title -------------
      var changeLine = window.pageYOffset + 200;
      var aLiOgl = document.querySelectorAll('#scrl a');

      for (var i = 0; i < myTitles.length; i++) {
        var titl = (myTitles[i].getBoundingClientRect()).top + pageYOffset;
        if (changeLine >= titl) { var k = i }

        for (var j = 0; j < aLiOgl.length; j++) {
          aLiOgl[j].className = ''
        }

        if (aLiOgl[k]) {
          aLiOgl[k].className = 'current';
        }
      }

    }

    ///////////////////////////////////////////////
    // name1 name2

    var mn1 = document.querySelector('main');
    var hh = (mn1.innerHTML).match(/h[1-2]/g);

    if (hh != null) {
      document.getElementById('name1').innerHTML = document.querySelector('h1').innerHTML;
      document.getElementById('name2').innerHTML = document.querySelector('h2').innerHTML;
    } else {
      document.getElementById('name1').innerHTML = document.querySelector('._zz1').innerHTML
      document.getElementById('name2').innerHTML = document.querySelector('._zz2').innerHTML
    }

    ///////////////////////////////////////////
    // clckNav.js

    var mA = document.querySelectorAll('#scrl a');

    clckA(mA);

    function clckA(liA) {
      for (var i = 0; i < liA.length; i++) {
        var atr = liA[i].hash.replace('#',"");

        liA[i].onclick = function(mAnch) {
          return function(k) {
            k.preventDefault();
            mAnch.scrollIntoView();
          }
        }(document.getElementById(atr));
      }
    }

    ////////////////////////////////////////////////
    // rem3.js

    window.addEventListener("beforeunload", function(event) {
      localStorage.setItem(document.location.toString(), window.pageYOffset);
    });

    var rem1 = localStorage.getItem(document.location.toString());
    document.getElementById("result").innerHTML = rem1;
    window.scrollTo(0, rem1);

  }
  global.for6 = new Module;
})(this);

