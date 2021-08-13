var request = new XMLHttpRequest()


const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=200&currency=USD'
async function cripto() {
	const response = await fetch(url);
	const data = await response.json();
	const coins = Object.values(data)[0];

	const lista_symbol = []
	const lista_icon = []
	const lista_price = []
	const lista_priceChange1h = []
	const lista_priceChange1d = []
	const lista_priceChange1w = []

	for (var i = 0; i < 49 ; i++) {
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
  for (var i = 49; i < 100 ; i++) {
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
    if (price >= 0.0001 && price < 100) {
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
  for (var i = 100; i < 149 ; i++) {
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
    if (price >= 0.0001 && price < 100) {
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
  for (var i = 149; i < coins.length ; i++) {
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
    if (price >= 0.0001 && price < 100) {
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
  

	function createTable() {
		body = document.createElement('tbody');
		for (var i = 0; i < coins.length; i++) {
			num = i + 1;
			if (num.toString().length == 1) {
          num = "0" + num;
      }
      if (num.toString().length == 2) {
          num = "0" + num;
      }
			src = lista_icon[i];
			texto = '<img src="' + src + '" height=12 width=12>   ';
	 		var row = '<tr><td>' + num + '</td><td>' + texto + lista_symbol[i] + '</td><td>' + lista_price[i] + '</td><td id="hour">' + lista_priceChange1h[i] + '</td><td id="day">' + lista_priceChange1d[i] + '</td><td id="week">' + lista_priceChange1w[i] + '</td></tr>';
	 		var html = document.getElementById("tbody").innerHTML + row;
		    document.getElementById("tbody").innerHTML = html;
	 	}
	}
	createTable();

	function addClass() {
		var hour = document.querySelectorAll("[id^='hour']");
		for (var i = 0; i < hour.length; i++) {
			if (hour[i].textContent >= 0) {
				hour[i].classList.add("positivo");
			}
			if (hour[i].textContent < 0) {
				hour[i].classList.add("negativo");
			}
		}
		var day = document.querySelectorAll("[id^='day']");
		for (var i = 0; i < day.length; i++) {
			if (day[i].textContent >= 0) {
				day[i].classList.add("positivo");
			}
			if (day[i].textContent < 0) {
				day[i].classList.add("negativo");
			}
		}
		var week = document.querySelectorAll("[id^='week']");
		for (var i = 0; i < week.length; i++) {
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

var object = document.querySelector(".light-dark");
object.addEventListener("click", toggleClass);
function toggleClass() {
	document.querySelector("body").classList.toggle("dark");
}


function insertText() {
    var toInsert = document.createElement("div");
	toInsert.innerHTML = "Follow us on Twitter @ValorCriptoBot";
	//toInsert.style.position = "absolute";     
	toInsert.classList = "bottom";
	document.body.appendChild(toInsert);
}
insertText();

var moneda = document.getElementById("sort_num");
moneda.addEventListener("click", sortNum);
function sortNum() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
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
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
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
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


var hora = document.getElementById("sort_hour");
hora.addEventListener("click", sortHour);
function sortHour() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabla1");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


var dia = document.getElementById("sort_day");
dia.addEventListener("click", sortDay);
function sortDay() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabla1");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[4];
      y = rows[i + 1].getElementsByTagName("TD")[4];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

var semana = document.getElementById("sort_week");
semana.addEventListener("click", sortWeek);
function sortWeek() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tabla1");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[5];
      y = rows[i + 1].getElementsByTagName("TD")[5];
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

