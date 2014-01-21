var photos = [];

window.fbAsyncInit = function() {
  FB.init({
    appId      : '199641883439198',
    status     : true,
    xfbml      : true
  });
  getPhotos("254914714599931/photos");
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var getPhotos = function(query) {
  FB.api(
      query,
      function (response) {
        $('#photos').html('');
        try {
          console.dir(response);
          for (var i=0; i<response.data.length; i++) {
            photos.push(response.data[i]);
          }
          // photos['data'].push(response.data);// = $.extend({}, photos, response.data);
          var next = typeof response.paging.next != "undefined" ? response.paging.next : "null";
          if (next != "null") {
            getPhotos(next);
          }
          else {
            getRecentPhotos();
          }
        }
        catch(err) {
          console.dir(err);
          console.dir("Error: no photos to display");
          var $row = '<div class="row"><p><b>There are no photos to display.</b></p></div>';
          $('#photos').append($row);
        }
      }
  );
}

var getRecentPhotos = function() {
  console.dir(photos);
  var data = photos;
  if (data.length < 1)
    throw err;
  // displaying 24 recent photos
  var $row = '<div class="row">';
  var limit = data.length > 23 ? 24 : data.length;
  for (var count = data.length-1; count >= data.length-limit; count--) {
      var link = '<div class="col-sm-3"><a data-fancybox-group="portfolio" class="fancybox" href="' + data[count].source + '"><div class="image" style="background-image: url(' + data[count].source + ')"></div></a></div>';
      $row = $row + link;
  }
  $row = $row + '</div>';
  $('#photos').append($row);
}