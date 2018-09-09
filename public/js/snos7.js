(function(global) {
	function Module() {
		var mn = document.getElementsByTagName('main')[0];
		var prm = document.getElementsByClassName('prim')[0];
		var sup = document.getElementsByTagName('sup');
		
		var sp = document.createElement('span');
		var dv = document.createElement('div');
		var i, l = sup.length;

		for (i = 0; i < l; i++) {
			var spp = sp.cloneNode(false);
			spp.className = 'ftn1';

			var dvv = dv.cloneNode(false);
			dvv.className = 'ftn1';

			var msup = sup[i].innerHTML;
			var pprm = prm.querySelector('a[name="' 
				+ sup[i].innerHTML.match(/\d+/)
				+ '"]');

			var aprm = pprm.parentNode;
			// spp.appendChild(aprm);
			// dvv.appendChild(aprm);
			// dvv.innerHTML = aprm.innerHTML;
			spp.innerHTML = aprm.innerHTML;
			sup[i].appendChild(spp)
			// sup[i].appendChild(dvv)
		}
	}
	global.snos = new Module
})(this)
