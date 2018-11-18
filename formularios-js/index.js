 
 let card_el  = document.getElementById("card-person__likes-js")


 for(let i=7;i>=1; i--){
 	let newEl = document.createElement("li")
 		newEl.setAttribute("class", "card-person__likes__item")
 		newEl.textContent = `${i}- Elements`
 		card_el.insertBefore(newEl, card_el.children[1])
 }

 let cardContainer  = document.getElementById("card-person-js")
 let cardImages= [...(cardContainer.querySelectorAll('img'))]
 
for(let i=0;i<cardImages.length; i++){

 cardImages[i].addEventListener("click", function(e){
 	let imagesOverlay = document.createElement("img")

 	let overlay = document.createElement("section")
 		overlay.setAttribute("class", "overlay__images");
 	 	overlay.style.width = window.outerWidth+'px'
 	 	overlay.style.height = window.outerHeight+'px'
 		imagesOverlay.src = e.target.src;
 		imagesOverlay.setAttribute("class", "overlayImg")


 		overlay.appendChild(imagesOverlay);

 		imagesOverlay.addEventListener("click",function(){
 			overlay.remove()
 		},false);

 		document.body.insertBefore(overlay, document.body.children[0])
 },false)

}
 