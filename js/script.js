    function selectRating(rating) {
      const selectedRating = rating;
      localStorage.setItem('selectedRating', selectedRating);
    }

    function submitRating() {
      const selectedRating = localStorage.getItem('selectedRating');
      const successLink = document.querySelector('.submit-btn');
      successLink.href = 'success.html';
      successLink.search = '?rating=' + selectedRating;
    }


   // Función para recuperar el valor de calificación seleccionado de la URL y mostrarlo en el párrafo "seleccionado"
   document.addEventListener('DOMContentLoaded', function () {
       const queryString = window.location.search;
       const urlParams = new URLSearchParams(queryString);
      const selectedRating = urlParams.get('rating');

      const selectedParagraph = document.querySelector('.selected');
      selectedParagraph.innerText = `You selected ${selectedRating} out of 5`;
   });
 