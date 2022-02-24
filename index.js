var favorites = [];
var cart = [];

//Funcion para marcar el boton como clickeado
function clickedButtonStyle (button) {
  if (button.classList.contains("clickedButton")) {
    button.classList.remove("clickedButton");
  }
  else{
    button.classList.add("clickedButton");
  }

}
//iterador sobre todos los botones del tipo favoritos, la funcion clickedFavorite, aunque no lo especifica
//le llega como parametro el objeto que fue clickeado, es decir, el boton de la estrella
for (var i = 0; i < document.querySelectorAll("div.cardButtons a").length; i++) {
  document.querySelectorAll("div.cardButtons a")[i].addEventListener("click",clickedFavorite);
}

for (var j = 0; j < document.querySelectorAll(".navbarButton").length; j++) {
  document.querySelectorAll(".navbarButton")[j].addEventListener("click",showHoverNavbarButton);
}

function clickedFavorite () {
  //Aca lo que estamos haciendo es desde el boton, conseguir el div que lo contiene para asi poder manipular el h5
  //que es donde esta el nombre de la prenda
  var buttonFather = this.parentNode;
  var cardBody = buttonFather.parentNode;
  var childArray = cardBody.children;
  var name = childArray.item(0).innerHTML;


  if (this.classList.contains("favorite")) {
    if (this.classList.contains("clickedButton")) {
      //Aca estamos buscanod el elemento en el array para eliminarlo
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i] === name) {
          var position = i;
          //Esto lo que hace es eliminar la cantidad de elementos indicados por el numero(en este caso es el uno)
          //empezando desde la posicion indicada (position)
          favorites.splice(position,1);
          //ponemos el break para que elimine al primero que encuentre con ese nombre y no a todos
          break;
        }
      }
    }
    else{
      favorites.push(name);
    }



    //Aca lo que hacemos es guardar la lista de favoritos en una constante
    const list = document.getElementById("yourFavorites");
    //Cada vez que se preciona un nuevo favorito, la lista se tiene que borrar entera (que es lo que hace este while )
    //si no hacemos esto, el ciclo for va a agregar doblemente los elementos debido a que cada vez que se preciona el boton
    //de favoritos va a agregar a TODOS los elementos del array favorites.
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }



    //Agrega a la lista segun la cantidad de favoritos que tenga el array
    for (var i = 0; i < favorites.length; i++) {
      node = document.getElementById('yourFavorites');

      //Con esta linea hago que se agrege un elemento de lista al html, en cada elemento de lista esta el nombre de la prenda que se agrega
      node.insertAdjacentHTML('afterbegin', "<li>" + favorites[i] + "</li>");
    }

  }
  else {
    if (this.classList.contains("clickedButton")) {
      //Aca estamos buscanod el elemento en el array para eliminarlo
      for (var i = 0; i < cart.length; i++) {
        if (cart[i] === name) {
          var position = i;
          //Esto lo que hace es eliminar la cantidad de elementos indicados por el numero(en este caso es el uno)
          //empezando desde la posicion indicada (position)
          cart.splice(position,1);
          //ponemos el break para que elimine al primero que encuentre con ese nombre y no a todos
          break;
        }
      }
    }
    else{
      cart.push(name);
    }



    //Aca lo que hacemos es guardar la lista de favoritos en una constante
    const list = document.getElementById("yourShopping");
    //Cada vez que se preciona un nuevo favorito, la lista se tiene que borrar entera (que es lo que hace este while )
    //si no hacemos esto, el ciclo for va a agregar doblemente los elementos debido a que cada vez que se preciona el boton
    //de favoritos va a agregar a TODOS los elementos del array favorites.
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }



    //Agrega a la lista segun la cantidad de favoritos que tenga el array
    for (var i = 0; i < cart.length; i++) {
      node = document.getElementById('yourShopping');

      //Con esta linea hago que se agrege un elemento de lista al html, en cada elemento de lista esta el nombre de la prenda que se agrega
      node.insertAdjacentHTML('afterbegin', "<li>" + cart[i] + "</li>");
    }
  }

  //ese this hace referencia al boton que fue clickeado, que se paso como parametro en el iterador aunque no este especificado
  clickedButtonStyle(this);

}

function showHoverNavbarButton () {

  if (this.classList.contains("buying")) {
    var container = document.querySelector(".hidenBox.cart");
  }
  else {
    var container = document.querySelector(".hidenBox.favorite");
  }

  if (container.classList.contains("showHover")) {
    container.classList.remove("showHover");
    clickedButtonStyle(this);
  }
  else {
  clickedButtonStyle(this);
  container.classList.add("showHover");
  }


}
