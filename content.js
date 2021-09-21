let request = new XMLHttpRequest()


const tema = localStorage.getItem('theme');
const coin_new = localStorage.getItem('cache_coin');
const class_new = localStorage.getItem('cache_class');
var array_coin = coin_new.split(',');
var array_class = class_new.split(',');
// console.log(array_coin);
// console.log(array_class);


//alert(tema);
//const tema = 'dark';
// if (tema == null) {
// 	console.log(tema);
//   	document.querySelector("body").classList = "dark";
// }
// if (tema != null) {
// 	document.querySelector("body").classList = "dark";
// }

const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=USD'
async function cripto() {
	
	const response = await fetch(url);
	const data = await response.json();
	const coins = Object.values(data)[0];
	const lista_symbol = [];
	const lista_icon = [];
	const lista_price = [];
	const lista_priceChange1h = [];
	const lista_priceChange1d = [];
	const lista_priceChange1w = [];

	document.getElementById("loader").style.display = "none";
	document.getElementById("light").style.display = "block";
	document.getElementById("tabla1").style.display = "block";
	//document.getElementById("btnCoins").style.display = "inline";
	//document.getElementById("btnFavs").style.display = "inline";

	//insertText();
	//console.timeEnd("temporizador");
	for (let i = 0; i < coins.length ; i++) {
		symbol = coins[i].symbol;
		icon = coins[i].icon;
    	price = coins[i].price;
	    if (price >= 1000) {
	        price = parseInt(price);
	        //price = price.toFixed(0);
	    }
	    if (price >= 100 && price < 1000) {
	        price = parseFloat(price);
	        price = price.toFixed(2);
	    }
	    if (price >= 0.001 && price < 100) {
	        price = parseFloat(price);
	        price = price.toFixed(3);
	    }
	    if (price < 0.0001) {
	        price_str = price.toString();
	        price_str = price_str.substring(0, 8);
	        price = parseFloat(price_str); 
	    }
		priceChange1h = coins[i].priceChange1h;
		priceChange1d = coins[i].priceChange1d;
		priceChange1w = coins[i].priceChange1w;

		lista_symbol.push(symbol);
		lista_icon.push(icon);
		lista_price.push(price);
		lista_priceChange1h.push(priceChange1h);
		lista_priceChange1d.push(priceChange1d);
		lista_priceChange1w.push(priceChange1w);
	}
  // 	for (let i = 49; i < 100 ; i++) {
	 //    symbol = coins[i].symbol;
	 //    icon = coins[i].icon;
	 //    price = coins[i].price;
	 //    if (price >= 1000) {
	 //        price = parseInt(price);
	 //        //price = price.toFixed(0);
	 //    }
	 //    if (price >= 100 && price < 1000) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(2);
	 //    }
	 //    if (price >= 0.0001 && price < 100) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(3);
	 //    }
	 //    if (price < 0.0001) {
	 //        price_str = price.toString();
	 //        price_str = price_str.substring(0, 8);
	 //        price = parseFloat(price_str); 
	 //    }
	 //    priceChange1h = coins[i].priceChange1h;
	 //    priceChange1d = coins[i].priceChange1d;
	 //    priceChange1w = coins[i].priceChange1w;

	 //    lista_symbol.push(symbol);
	 //    lista_icon.push(icon);
	 //    lista_price.push(price);
	 //    lista_priceChange1h.push(priceChange1h);
	 //    lista_priceChange1d.push(priceChange1d);
	 //    lista_priceChange1w.push(priceChange1w);
  // 	}
  // 	for (let i = 100; i < 149 ; i++) {
	 //    symbol = coins[i].symbol;
	 //    icon = coins[i].icon;
	 //    price = coins[i].price;
	 //    if (price >= 1000) {
	 //        price = parseInt(price);
	 //        //price = price.toFixed(0);
	 //    }
	 //    if (price >= 100 && price < 1000) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(2);
	 //    }
	 //    if (price >= 0.0001 && price < 100) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(3);
	 //    }
	 //    if (price < 0.0001) {
	 //        price_str = price.toString();
	 //        price_str = price_str.substring(0, 8);
	 //        price = parseFloat(price_str); 
	 //    }
	 //    priceChange1h = coins[i].priceChange1h;
	 //    priceChange1d = coins[i].priceChange1d;
	 //    priceChange1w = coins[i].priceChange1w;

	 //    lista_symbol.push(symbol);
	 //    lista_icon.push(icon);
	 //    lista_price.push(price);
	 //    lista_priceChange1h.push(priceChange1h);
	 //    lista_priceChange1d.push(priceChange1d);
	 //    lista_priceChange1w.push(priceChange1w);
  // 	}
  // 	for (let i = 149; i < coins.length ; i++) {
	 //    symbol = coins[i].symbol;
	 //    icon = coins[i].icon;
	 //    price = coins[i].price;
	 //    if (price >= 1000) {
	 //        price = parseInt(price);
	 //        //price = price.toFixed(0);
	 //    }
	 //    if (price >= 100 && price < 1000) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(2);
	 //    }
	 //    if (price >= 0.0001 && price < 100) {
	 //        price = parseFloat(price);
	 //        price = price.toFixed(3);
	 //    }
	 //    if (price < 0.0001) {
	 //        price_str = price.toString();
	 //        price_str = price_str.substring(0, 8);
	 //        price = parseFloat(price_str); 
	 //    }
	 //    priceChange1h = coins[i].priceChange1h;
	 //    priceChange1d = coins[i].priceChange1d;
	 //    priceChange1w = coins[i].priceChange1w;

	 //    lista_symbol.push(symbol);
	 //    lista_icon.push(icon);
	 //    lista_price.push(price);
	 //    lista_priceChange1h.push(priceChange1h);
	 //    lista_priceChange1d.push(priceChange1d);
	 //    lista_priceChange1w.push(priceChange1w);
	 // }
  

	function createTable() {

		// const favs_new = localStorage.getItem('loadFavs');
		// console.log(favs_new);
		body = document.createElement('tbody');
		for (let i = 0; i < coins.length; i++) {
			num = i + 1;
			if (num.toString().length == 1) {
          	num = "0" + num;
	    }
	    if (num.toString().length == 2) {
	        num = "0" + num;
	    }
			icon = lista_icon[i];
			//fav = '<img src="' + 'https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-star-favorite-outline-icon.png' + '" height=15 width=15 id="estrella' + i + '" class="fav">';
			fav = '<img src="' + 'https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-star-favorite-outline-icon.png' + '" height=15 width=15 id="estrella">';
			logo = '<img src="' + icon + '" height=12 width=12>   ';
	 		let row = '<tr id="tr' + i + '"><td class="fav">' + fav + '</td><td>' + num + '</td><td>' + logo + lista_symbol[i] + '</td><td>' + lista_price[i] + '</td><td id="hour">' + lista_priceChange1h[i] + '</td><td id="day">' + lista_priceChange1d[i] + '</td><td id="week">' + lista_priceChange1w[i] + '</td></tr>';
	 		let html = document.getElementById("tbody").innerHTML + row;
		    document.getElementById("tbody").innerHTML = html;
		    //row.addEventListener('click', () => { onClick(row) })
		}

		let tabla_aux, filas, i, x, y;
		tabla_aux = document.getElementById("tabla1");
		filas = tabla_aux.rows;
		for (i = 1; i < filas.length; i++) {
			x = filas[i].getElementsByTagName("TD")[0];
			y = filas[i].getElementsByTagName("TD")[0];
			class_x = array_class[i-1];
			nombre = filas[i].getElementsByTagName("TD")[2];
			moneda = nombre.textContent;
			// console.log(moneda + ' ' + class_x);
			if (class_x == 'fav on') {
				var texto = x.innerHTML;
			 	var a_reemplazar = '<img src="https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-star-favorite-outline-icon.png" height="15" width="15" id="estrella">';
			 	var reemplazo = '<img src="https://images.vexels.com/media/users/3/134121/isolated/lists/5ff73adb05d7f1fe47dd49bb1b08affa-star-cartoon-icon-50.png" height="15" width="15" id="estrella">';
			 	texto = texto.replace(a_reemplazar,reemplazo);
			 	x.innerHTML = texto;
			}
			// console.log(moneda + ' ' + class_x);

		}
		
		document.querySelectorAll('#estrella').forEach(elmt => elmt.addEventListener("click", function() {
    		var img1 = "https://images.vexels.com/media/users/3/136916/isolated/lists/aa21eb60437133bf4f4be189636a187a-star-favorite-outline-icon.png";
    		var img2 = "https://images.vexels.com/media/users/3/134121/isolated/lists/5ff73adb05d7f1fe47dd49bb1b08affa-star-cartoon-icon-50.png";
    		elmt.src = (elmt.src === img1)? img2 : img1;
    		//console.log(elmt.parentNode.parentNode);
    		elmt.parentNode.classList.toggle('on');
    		var padre = elmt.parentNode.parentNode;
    		var moneda = padre.children[2].textContent;
    		//alert(moneda);
			
			addFav(moneda);
			
		}));
		// console.log(array_coin);
		// console.log(array_class);
	}
	 	
	createTable();


	function addClass() {
		let hour = document.querySelectorAll("[id^='hour']");
		for (let i = 0; i < hour.length; i++) {
			if (hour[i].textContent >= 0) {
				hour[i].classList.add("positivo");
			}
			if (hour[i].textContent < 0) {
				hour[i].classList.add("negativo");
			}
		}
		let day = document.querySelectorAll("[id^='day']");
		for (let i = 0; i < day.length; i++) {
			if (day[i].textContent >= 0) {
				day[i].classList.add("positivo");
			}
			if (day[i].textContent < 0) {
				day[i].classList.add("negativo");
			}
		}
		let week = document.querySelectorAll("[id^='week']");
		for (let i = 0; i < week.length; i++) {
			if (week[i].textContent >= 0) {
				week[i].classList.add("positivo");
			}
			if (week[i].textContent < 0) {
				week[i].classList.add("negativo");
			}
		}
		
	}
	addClass();
	
}
cripto();




function addFav(coin) {
	console.log(coin);

	let table, rows, i, x, y;
	table = document.getElementById("tabla1");
	rows = table.rows;
	
	// console.log(array_coin);
	// console.log(array_class);
	
	for (i = 1; i < rows.length; i++) {
		x = rows[i].getElementsByTagName("TD")[0];
		class_x = x.classList.value;
		nombre = rows[i].getElementsByTagName("TD")[2];
		moneda = nombre.textContent;
		if (moneda == coin) {
			console.log(moneda + ' ' + class_x + ' ' + i);
			
		}
		// array_coin[i-1] = moneda;
		// array_class[i-1] = class_x;
		localStorage.setItem('cache_coin', array_coin);
		localStorage.setItem('cache_class', array_class);
	}
	// console.log("\n");
	// console.log(array_coin);
	// console.log(array_class);
	
	//imprimir();
}





let object = document.getElementById("modo");
let body1 = document.querySelector("body");
body1.classList = tema;
if (body1.classList == null) {
	// alert('hola');
	document.querySelector("body").classList = "light";
}

object.addEventListener("click", toggleClass);
function toggleClass() {
	var light = 'light';
	var dark = 'dark';
	aux = document.querySelector("body");
	if (aux.classList == 'dark') {
		document.querySelector("body").classList = "light";
	}
	else if (aux.classList == 'light') {
		document.querySelector("body").classList = "dark";
	}
	let fondo = aux.classList;
	localStorage.setItem('theme', fondo);
}






var tabla = document.getElementById("btnCoins");
tabla.addEventListener("click", showCoins);
function showCoins() {
	let i, tabcontent, tablinks;
    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Display the clicked tab and set it to active.
    document.getElementById('Coins').style.display = "block";
    //evt.currentTarget.className += " active";
}
// var tabla = document.getElementById("btnFavs");
// tabla.addEventListener("click", showFavs);
// function showFavs() {
// 	let i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById('Favorites').style.display = "block";
//     //evt.currentTarget.className += " active";
// }






function insertText() {
    let toInsert = document.createElement("div");
	toInsert.innerHTML = "Follow us on Twitter @ValorCriptoBot";
	//toInsert.style.position = "absolute";     
	toInsert.classList = "bottom";
	document.body.appendChild(toInsert);
}






let moneda = document.getElementById("sort_num");
moneda.addEventListener("click", sortNum);
function sortNum() {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tabla1");
	switching = true;
	// Set the sorting direction to ascending:
	dir = "asc";
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
	    // Start by saying: no switching is done:
	    switching = false;
	    rows = table.rows;
	    /* Loop through all table rows (except the
	    first, which contains table headers): */
	    for (i = 1; i < (rows.length - 1); i++) {
		    // Start by saying there should be no switching:
		    shouldSwitch = false;
		    /* Get the two elements you want to compare,
		      one from current row and one from the next: */
		    x = rows[i].getElementsByTagName("TD")[1];
		    y = rows[i + 1].getElementsByTagName("TD")[1];
		    /* Check if the two rows should switch place,
		    based on the direction, asc or desc: */
	      	if (dir == "asc") {
		       	if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				    // If so, mark as a switch and break the loop:
				    shouldSwitch = true;
				    break;
		        }
	      	} 
	      	else if (dir == "desc") {
	        	if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
			        // If so, mark as a switch and break the loop:
			        shouldSwitch = true;
			        break;
	        	}
	      	}
	    }
	    if (shouldSwitch) {
	      /* If a switch has been marked, make the switch
	      and mark that a switch has been done: */
	      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      switching = true;
	      // Each time a switch is done, increase this count by 1:
	      switchcount ++;
	    } 
	    else {
	      /* If no switching has been done AND the direction is "asc",
			set the direction to "desc" and run the while loop again. */
			if (switchcount == 0 && dir == "asc") {
				dir = "desc";
				switching = true;
			}
	    }
  	}
}


let hora = document.getElementById("sort_hour");
hora.addEventListener("click", sortHour);
function sortHour() {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tabla1");
	switching = true;
	dir = "desc";
	while (switching) {
		switching = false;
		rows = table.rows;
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[4];
			y = rows[i + 1].getElementsByTagName("TD")[4];
			if (dir == "desc") {
			    if (Number(x.innerHTML) < Number(y.innerHTML)) {
					shouldSwitch = true;
					break;
			    }
		  	} 
		  	else if (dir == "asc") {
			    if (Number(x.innerHTML) > Number(y.innerHTML)) {
			    	shouldSwitch = true;
			    	break;
			    }
		  	}
		}
		if (shouldSwitch) {
		  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		  switching = true;
		  switchcount ++;
		} 
		else {
			if (switchcount == 0 && dir == "desc") {
		    	dir = "asc";
		    	switching = true;
		  	}
		}
	}
}


let dia = document.getElementById("sort_day");
dia.addEventListener("click", sortDay);
function sortDay() {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tabla1");
	switching = true;
	dir = "desc";
	while (switching) {
	    switching = false;
	    rows = table.rows;
	    for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[5];
			y = rows[i + 1].getElementsByTagName("TD")[5];
			if (dir == "desc") {
		        if (Number(x.innerHTML) < Number(y.innerHTML)) {
					shouldSwitch = true;
					break;
		        }
	    	} 
	    	else if (dir == "asc") {
	        	if (Number(x.innerHTML) > Number(y.innerHTML)) {
					shouldSwitch = true;
					break;
	        	}
      		}
	    }
	    if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
			switchcount ++;
	    }
	    else {
	    	if (switchcount == 0 && dir == "desc") {
		        dir = "asc";
		        switching = true;
	     	}
	    }
  	}
}

let semana = document.getElementById("sort_week");
semana.addEventListener("click", sortWeek);
function sortWeek() {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tabla1");
	switching = true;
	dir = "desc";
	while (switching) {
	    switching = false;
	    rows = table.rows;
	    for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[6];
			y = rows[i + 1].getElementsByTagName("TD")[6];
			if (dir == "desc") {
				if (Number(x.innerHTML) < Number(y.innerHTML)) {
					shouldSwitch = true;
					break;
				}
			}
			else if (dir == "asc") {
				if (Number(x.innerHTML) > Number(y.innerHTML)) {
			  		shouldSwitch = true;
			  		break;
				}
			}
	    }
	    if (shouldSwitch) {
	      	rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      	switching = true;
	      	switchcount ++;
	    }
	    else {
	      	if (switchcount == 0 && dir == "desc") {
	        	dir = "asc";
	        	switching = true;
	      	}
	    }
  	}
}




let favoritos = document.getElementById("sort_fav");
favoritos.addEventListener("click", sortFav);
function sortFav() {
	let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	table = document.getElementById("tabla1");
	switching = true;
	dir = "desc";
	while (switching) {
	    switching = false;
	    rows = table.rows;
	    for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[0];
			y = rows[i + 1].getElementsByTagName("TD")[0];
			class_x = x.classList.value;
			class_y = y.classList.value;
			a = rows[i].getElementsByTagName("TD")[2];
			
	      	if (dir == "desc") {
	        	if ((class_x == 'fav') && (class_y == 'fav on')) {
	          		shouldSwitch = true;
	          		break;
	        	}
	      	}
	      	else if (dir == "asc") {
	        	if ((class_x == 'fav') && (class_y == 'fav')) {
	         		shouldSwitch = false;
	          		break;
	        	}
	      	}
	      	moneda = a.textContent;
	    }
	    if (shouldSwitch) {
	      	rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      	switching = true;
	      	switchcount ++;
	    }
	    else {
	      	if (switchcount == 0 && dir == "desc") {
	        	dir = "asc";
	        	switching = true;
	      	}
	    }
  	}
}









function imprimir() {
	//console.log(a_coin + ' ' + b_class);
	// var lista_coin = [];
	// var lista_class = [];
	// lista_coin.push(a_coin);
	// lista_class.push(b_class);
	// for (let i = 0; i < 1 ; i++) {
	// 	//clase = ;
	// 	//console.log(a_coin + ' ' + b_class);
	// 	// console.log(lista_coin[i] + ' ' + lista_class[i]);
	// 	console.log(lista_coin.length)
	// 	// let cache = aux.classList;
	// 	// localStorage.setItem('theme', fondo);
	// }
	//console.log(lista_coin);
	const coin_new = localStorage.getItem('cache_coin');
	const class_new = localStorage.getItem('cache_class');
	var array_coin = coin_new.split(',');
	var array_class = class_new.split(',');
	
	console.log(array_coin);
	console.log(array_class);
}




