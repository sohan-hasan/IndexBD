$(document).ready(function () {
	productNamespace.init();
});

(function () {
	this.productNamespace = this.productNamespace || {};
	var ns = this.productNamespace;
	var currentProduct;
	var request, db;
	if (!window.indexedDB) {
		console.log("Your Browser does not support IndexedDB");
	}
	else {
		request = window.indexedDB.open("myTestDB", 25);
		request.onerror = function (event) {
			console.log("Error opening DB", event);
		}
		request.onupgradeneeded = function (event) {
			console.log("Upgrading");
			db = event.target.result;
			var objectStore = db.createObjectStore("students", { keyPath: "rollNo", autoIncrement: true });
		}
		request.onsuccess = function (event) {
			console.log("Success opening DB");
			db = event.target.result;
		}
	}
	ns.init = function () {
		$('#prImage').on('change', bindImage);
		
	}


	function bindImage(e) {
		var file = e.originalEvent.target.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function (evt) {
			var result = evt.target.result;
			$('#holdImg').removeAttr('src');
			$('#holdImg').attr('src', result);
		}
	}

	
            // Dropdown ---------------------------------------------------------------------------
            document.getElementById('dropZone').addEventListener('dragover',  (e) =>{
				e.preventDefault();
				});
	
			document.getElementById('dropZone').addEventListener('drop',  (e) =>{
				e.preventDefault();
				var files = e.dataTransfer.files;
				
				if (files && files[0]) {
					var reader = new FileReader();
	
					reader.onload = function (e) {
						imageName=e.target.result;
						$('#holdImg').attr('src', e.target.result);
					};
					reader.readAsDataURL(files[0]);
				}
				});

	
})();