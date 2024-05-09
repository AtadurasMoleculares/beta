document.addEventListener('DOMContentLoaded', function() {
    // Obtiene una lista de todos los bloques
    var blocks = document.querySelectorAll('.block');

    // Agrega un evento de clic a cada bloque
    blocks.forEach(function(block) {
        block.addEventListener('click', function() {
            // Obtiene el ID del bloque clickeado
            var blockId = this.id;

            // Redirige a la página correspondiente
            switch (blockId) {
                case 'introduccionContainer':
                    window.location.href = 'introduccion.html';
                    break;
                case 'enlaceCovalenteContainer':
                    window.location.href = 'enlace-covalente.html';
                    break;
                case 'enlaceIonicoContainer':
                    window.location.href = 'enlace-ionico.html';
                    break;
                // Agrega más casos según sea necesario para otros bloques
            }
        });
    });
        // Inicializar los sliders al cargar la página
        initSlider(0);
        initSlider(1); // Agrega más llamadas a initSlider() si tienes más sliders
    
        function initSlider(index) {
            const sliderContainers = document.querySelectorAll('.slider-container');
            const slider = sliderContainers[index].querySelector('.slider');
            const slides = slider.querySelectorAll('.slide');
            const totalSlides = slides.length;
            let currentIndex = parseInt(sessionStorage.getItem(`currentIndex_${index}`)) || 0;
    
            // Calcular el nuevo índice de la imagen
            function navigate(direction) {
                currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    
                // Ocultar todas las imágenes y mostrar solo la actual
                slides.forEach((slide, index) => {
                    if (index === currentIndex) {
                        slide.style.display = 'block';
                    } else {
                        slide.style.display = 'none';
                    }
                });
    
                // Guardar el índice actual en el sessionStorage
                sessionStorage.setItem(`currentIndex_${index}`, currentIndex);
            }
    
            // Event listeners para los botones "Anterior" y "Siguiente"
            sliderContainers[index].querySelector('.prev-button').addEventListener('click', () => {
                navigate(-1);
            });
    
            sliderContainers[index].querySelector('.next-button').addEventListener('click', () => {
                navigate(1);
            });
    
            // Mostrar la primera imagen al cargar la página
            navigate(0);
        }
});
function copiarURL() {
    // Obtener la URL actual
    var urlActual = window.location.href;

    // Intentar copiar la URL al portapapeles
    navigator.clipboard.writeText(urlActual)
        .then(function() {
            // Se ha copiado la URL con éxito
            console.log("URL copiada al portapapeles:", urlActual);
            alert("URL copiada al portapapeles: " + urlActual);
        })
        .catch(function(error) {
            // Ha ocurrido un error al intentar copiar la URL
            console.error("Error al copiar la URL:", error);
            alert("Error al copiar la URL. Por favor, cópiela manualmente.");
        });
        
}
