	var link = document.querySelector(".major-btn.write-to-us-btn");
	var popup = document.querySelector(".write-to-us-modal");
	var close = popup.querySelector(".modal-close");
	
	link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("write-to-us-show");
      });
	close.addEventListener("click", function(event){
		event.preventDefault();
		popup.classList.remove("write-to-us-show");
	});
	
	var link_map = document.querySelector(".map-open");
	var popup_map = document.querySelector(".map-modal");
	var close_map = popup_map.querySelector(".modal-close");
	
	link_map.addEventListener("click", function(event) {
		event.preventDefault();
		popup_map.classList.add("map-modal-show");
	});
	close_map.addEventListener("click", function(event){
		event.preventDefault();
		popup_map.classList.remove("map-modal-show");
	});
	
	
	var link_buy = document.querySelector(".item-buttons-buy");
	var popup_buy = document.querySelector(".buy-modal");
	var close_buy = popup_buy.querySelector(".modal-close");
	
	link_buy.addEventListener("click", function(event){
		event.preventDefault();
		popup_buy.classList.add("buy-modal-show");
	});
	close_buy.addEventListener("click", function(event){
		event.preventDefault();
		popup_buy.classList.remove("buy-modal-show");
	});