// rem4.js

    window.addEventListener("beforeunload", function(event) {
      // localStorage.setItem(document.location.toString(), window.pageYOffset);
      localStorage.setItem('poff', window.pageYOffset);
    });
    console.log('local storage set: ', window.pageYOffset);

    // var rem2 = localStorage.getItem(document.location.toString());
    var rem2 = localStorage.getItem('poff');
    console.log('rem2: ', rem2)
    document.getElementById('result').innerHTML = rem2;
    window.scrollTo(0, rem2);
