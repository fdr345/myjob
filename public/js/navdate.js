(function(global) {
	function Module() {
		// body...
		var formatterDate = new Intl.DateTimeFormat('ru', {
		  weekday: 'long',
		  day: 'numeric',
		  month: 'numeric',
		  year: 'numeric'
		});
		var dt = Date.now();

		document.getElementById('navDate').innerHTML
		 = formatterDate.format(dt);
	}

	global.navdate = new Module;
})(this)