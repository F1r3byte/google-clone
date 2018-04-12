document.addEventListener('DOMContentLoaded', function() {

  var Buttons = Array.from(document.getElementsByClassName('InputButtons'));
  var search = document.getElementById('search');

  Buttons.forEach(function(button){
    button.addEventListener('click', function(event){

      event.preventDefault();
      var SearchText = search.value;
      var URISearchText = encodeURIComponent(SearchText);
      var GoogleSearch = 'https://www.google.com/search?q=';

      window.location.href = GoogleSearch + URISearchText;

    });
  });
});
