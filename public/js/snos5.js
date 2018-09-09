(function(global) {
	function Module() {
		// body...
		var mn = document.getElementsByTagName('main')[0];
		var amain = mn.querySelectorAll('a[id*="link_n"');
		// var prm = document.getElementsByClassName('prim')[0];
		var prm = prm1.getPrm();
		// var prm = mn.querySelectorAll('div.hidden_all');
		// prm.innerHTML = prm.innerHTML.replace(/<br>/g, '');
		var sp = document.createElement('span');
		var i, l = amain.length;
		for (i = 0; i < l; i++) {
			// var attrid = (amain[i].getAttribute('id').replace(/link_n_/,'')).replace(/_/,'');
			var attrid = (amain[i].getAttribute('id').replace(/link_n/,'')).replace(/_/,'');
			var spp = sp.cloneNode(false);
			spp.className = 'ftn1';
			var pa = prm.querySelector('span[id=book_n' 
				+ attrid
				+ ']');
			spp.innerHTML = pa.innerText;
			// spp.appendChild(pa);
			amain[i].appendChild(spp)
		}

	}
	global.snos = new Module
})(this)