// Función para abrir una pestaña específica
function openTab(tabName) {
	// Obtenemos todos los elementos con clase 'tabcontent' y los ocultamos
    var tabContents = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
	// Obtenemos todos los elementos con clase 'tablink' y eliminamos la clase 'active'
    var tabLinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
	// Mostramos el contenido de la pestaña seleccionada y le añadimos la clase 'active' al botón correspondiente
    document.getElementById(tabName).style.display = "flex";
	// Cambia 'display' a 'flex'
    event.currentTarget.classList.add("active");
}

openTab('tab1'); // Abre la primera pestaña por defecto al cargar la página

