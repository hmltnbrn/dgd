(function() {

  var pattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,})/;

  $("#form-submit").click(function() {
    // Values for form fields
    var name = $('#form-name').val();
    var website = $('#form-website').val();
    var prof = $('input[name=profession]:checked').val();

    // Validate fields
    !name ? $('#name-error').text("Required field") : $('#name-error').text("");
    !pattern.test(website) ? $('#website-error').text("Please enter a valid URL.") : $('#website-error').text(""); // RegExp for valid website
    !prof ? $('#profession-error').text("Choose a profession") : $('#profession-error').text("");

    if(name && prof && pattern.test(website)) { // If everything checks out
      $(".start-text").hide(); // Hide initial empty cards text

      // Build divs for cards
      var $card = $("<div>", {"class": "card"});
      var $cardImage = $("<div>", {"class": "card-image"});
      var $cardFull = $("<div>", {"class": "full " + prof});
      var $info = $("<div>", {"class": "info"});
      var $doctorName = $("<div>", {"class": "doctor-name"});
      var $doctorProf = $("<div>", {"class": "doctor-prof"});
      var $doctorWebsite = $("<a>", {"class": "doctor-website", "href": website, "target": "_blank"});

      // Append divs to where they need to be
      $cardImage.append($cardFull);
      $info.append($doctorName.text(name));
      $info.append($doctorProf.text(prof));
      $info.append($doctorWebsite.text("Website"));
      $card.append($cardImage);
      $card.append($info);
      $("#card-container").append($card);

      $('.form-error').text(""); // Empty error fields
      $(".form-text").val(""); // Empty form fields
      $('input[name=profession]').prop('checked', false); // Uncheck profession field

    }
  });

})();
