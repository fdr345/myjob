(function(global) {
	function Module() {
		var mn1 = document.querySelector('main');
		var tt = (mn1.innerHTML).match(/h[1-4]/g);
		var bb = (mn1.innerHTML).match(/<b>/g);
		// var tc = (mn1.innerHTML).match(/text_cite/g);
		// var tc = mn1.querySelector('.text_cite .text_emphasis');
		var tl = (mn1.innerHTML).match(/text_title/g);
		var st = (mn1.innerHTML).match(/strong/g);
		// var nm= mn1.querySelectorAll('a[NAME="_Toc4597');
		var nm = (mn1.innerHTML).match(/_Toc4597/g);
		var zz = (mn1.innerHTML).match(/_zz/g);
		
		if (tt != null) {
			var tg = tt
		}  else if (nm != null) {
			tg = 'a[NAME*="_Toc4597"'
		} else if (bb != null) {
			tg = 'b'
		// } else if (tc != null) {
		// 	// tc1 = mn1.querySelectorAll('span.text_cite');
		// 	// for (var i = 0; i < tc1.length; i++) {
		// 	// 	tc1[i].innerHTML.split('—', 1);
		// 	// }
		// 	tg = 'span[class*="text_cite"';
		} else if (tl != null) {
			tg = 'div[class*="text_title"'
		} else if (st != null) {
			tg = 'strong'
		} else if (zz != null) {
			tg = '._zz'
		}

		var zg = mn1.querySelectorAll(tg);

		return {
			getZg: function() {
				return zg;
			}
		}
	}
	global.hrr2 = new Module;

})(this);

// console.log(window.hrr2.mn1);
// console.log(window.hrr2.tg);
// console.log(window.hrr2.zg);
// console.log( window.hrr2.getZg()); 