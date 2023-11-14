document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        var menuAbierto = false;
        var menuButton = document.querySelector('.menu-icon, .menu');
        var mobileMenu = document.querySelector('.menu');
        var navLinks = document.querySelectorAll('.menu a');

        menuButton.addEventListener('touchstart', toggleMenu);

        navLinks.forEach(function (link) {
            link.addEventListener('touchend', closeMenu);
        });

        window.addEventListener('click', function (event) {
            if (menuAbierto && event.target !== menuButton && !menuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                closeMenu();
            }
        });

        function toggleMenu() {
            if (!menuAbierto) {
                openMenu();
            } else {
                closeMenu();
            }
        }

        function openMenu() {
            mobileMenu.style.display = 'block';
            menuAbierto = true;
        }

        function closeMenu() {
            // Espera 300 ms antes de cerrar el menú
            setTimeout(function() {
                mobileMenu.style.display = 'none';
                menuAbierto = false;
            }, 200);
        }
    
        }

    //funcion de aparicion de elementos de la pagina al realizar el scroll
    const elementosParaAparecer = document.querySelectorAll('.caja-servicios-padre,.contacto_locales, .sobremi, .sobremi div, .testimonios section, .testimonios div,.contacto h2, .contacto h5, .contacto div ');
    // Añade un evento para detectar cuando el usuario haga scroll
    window.addEventListener('scroll', function () {
        elementosParaAparecer.forEach(function (elemento) {
            if (isInViewport(elemento)) {
                elemento.classList.add('visible'); // Añade la clase 'visible' al elemento
            }
        });
    });
    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //funcion de verificacion para poner en visible la section servicios al regresar de las paginas secundarias
    const serviciosSection = document.querySelector('.caja-servicios-padre');
    const urlParams = new URLSearchParams(window.location.search);

    // Verifica si el parámetro 'regreso' está presente en la URL
    if (urlParams.has('regreso')) {
        // Si el parámetro 'regreso' está presente, agrega la clase 'visible' a la sección 'servicios'
        serviciosSection.classList.add('visible');
    }

    /*función que muestra u oculta la tarjeta de datos de cada consultorio*/
    const ovelarTriggerElements = document.querySelectorAll('.ovelar-trigger');
    const cardOvelar = document.querySelectorAll('.card-ovelar');

    ovelarTriggerElements.forEach(function (triggerElement, index) {
        triggerElement.addEventListener('click', function (event) {
            event.preventDefault();
            if (cardOvelar[index].style.transform === 'scale(1)') {
                cardOvelar[index].style.transform = 'scale(0)';
            } else {
                cardOvelar.forEach(function (card) {
                    card.style.transform = 'scale(0)';
                });
                cardOvelar[index].style.transform = 'scale(1)';
            }
        });
    });

    //función para los botones de desplazamiento del contenedor de sucursales
    const scrollContainer = document.querySelector('.contacto_locales');
    const scrollLeftButton = document.querySelector('.scroll-left-button');
    const scrollRightButton = document.querySelector('.scroll-right-button');

    scrollLeftButton.addEventListener('click', function () {
        scrollContainer.scrollLeft -= 100; // Ajusta la cantidad de desplazamiento
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollLeft += 100; // Ajusta la cantidad de desplazamiento
    });

    //función para cargar el mapa solo cuando esté en la sección correspondiente 
    const mapFrames = document.querySelectorAll('.mapa-ovelar, .mapa');
    let mapsLoaded = new Array(mapFrames.length).fill(false);

    function loadMap(i) {
        if (!mapsLoaded[i]) {
            mapFrames[i].src = mapFrames[i].getAttribute("data-src");
            mapsLoaded[i] = true;
        }
    }
    
    window.addEventListener("scroll", function () {
        mapFrames.forEach((mapFrame, i) => {
            const rect = mapFrame.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0 && !mapsLoaded[i]) {
                loadMap(i);
                console.log("El código JavaScript se ejecutó correctamente.");
            }
        });
    });
});


//funcion para mostrar u ocultar boton de comentarios
// Obtiene referencias a los elementos del DOM
var toggleButton = document.getElementById("toggleComments");
var commentsSection = document.getElementById("comentarios");

// Agrega un evento de clic al botón
toggleButton.addEventListener("click", function() {
    // Cambia la visibilidad de la sección de comentarios
    if (commentsSection.style.display === "none" || commentsSection.style.display === "") {
        commentsSection.style.display = "block"; // Muestra la sección
    } else {
        commentsSection.style.display = "none"; // Oculta la sección
    }
});
