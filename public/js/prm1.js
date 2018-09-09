(function(global) {
	function Module() {
		// body...
		var prm = document.getElementsByClassName('prim')[0];
		// var hdn = document.getElementsByClassName('hidden_all');
		// var hdn = document.querySelectorAll('main div.hidden_all');
		var hdn = document.querySelectorAll('main div.hidden_all');

		for (var i = 0; i < hdn.length; i++) {
			prm.appendChild(hdn[i])
		}

		return {
			getPrm: function() {
				return prm;
			}
		}
	}

	global.prm1 = new Module;
})(this)