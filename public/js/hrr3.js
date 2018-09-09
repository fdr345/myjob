(function(global) {
	function Module() {
		var mn1 = document.querySelector('main')
		var tt = (mn1.innerHTML).match(/h[1-6]/g)
		var bb = (mn1.innerHTML).match(/<b>/g)
		var tl = (mn1.innerHTML).match(/text_title/g)
		var st= (mn1.innerHTML).match(/strong/g)
		var nm= (mn1.innerHTML).match(/_Toc4597/g)
		
		if (tt != null) {
			// var tg = tt
			tt.className = 'tocol3'
		}  else if (nm != null) {
			// tg = 'a[NAME*="_Toc4597"'
			nm.className = 'tocol3'
		} else if (bb != null) {
			// tg = 'b'
			bb.className = 'tocol3'
		} else if (tl != null) {
			// tg = 'div[class*="text_title"'
			tl.className = 'tocol3'
		} else if (st != null) {
			// tg = 'strong'
			st.className = 'tocol3'
		}

		var zg = mn1.querySelectorAll('.tocol3')

		return {
			getZg: function() {
				return zg
			}
		}
	}
	global.hrr2 = new Module

})(this)