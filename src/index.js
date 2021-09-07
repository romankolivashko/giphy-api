import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $('#giphySearch').click(function() {
    const gif = $('#giphy').val();
    $('#giphy').val("");

    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${process.env.API_KEY}&limit=5`;

//  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    console.log(url);

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();
    
    console.log(url);
    function getElements(response) {
      $('.showGif').html(`<img src="${response.data[0].images.original.url}">`);
      console.log(response.data[0].images.original.url);
    }

  });
});