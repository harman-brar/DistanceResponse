(function () {

  function init(){
    $('#submitButton').click(submitButtonHandler);
  }

  function submitButtonHandler (evt) {
     var testForm = document.getElementById('testForm');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      $('#post-results-container').fadeOut();
      $('.ajaxLoader').css('display', 'inline-block');


      //make the AJAX call
      $.ajax({
        url: '/form',
        type: 'POST',
        data: {
          lat1: testForm.lat1.value,
          long1: testForm.long1.value,
          lat2: testForm.lat2.value,
          long2: testForm.long2.value
        },
        success: postSuccessHandler
      });
  }

  function postSuccessHandler (jsonData) {
    var $data = $('#post-results-container .data');

    //resets the response UI when new coordinates are entered and new jsonData is recieved
    $data.html('');
    $('.ajaxLoader').hide();

    //update the response UI with the data returned from the AJAX call (res)
    $.each(jsonData, function (key, val) {
      $data.append('<li><b>' +  key + ': ' + '</b>'   + val + ' km' + '</li>');
    });

    $('#post-results-container').fadeIn();
  };

//init on document.ready
$(document).ready(init);
})();
