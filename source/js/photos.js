window.fbAsyncInit = function() {
  FB.init({
    appId      : '199641883439198',
    status     : true,
    xfbml      : true
  });

  FB.api(
      "254914714599931/photos",
      function (response) {
        $('#photos').html('');
        if (response && !response.error) {
          console.dir(response);
          var data = response.data;
          // displaying 24 recent photos (assuming there are more than 24 photos in the album)
          for (var count = data.length; count >= data.length-20; count-=4) {
            var $row = '<div class="row">';
            var sliced = data.slice(count-4, count);
            console.dir(sliced);
            for (var i = sliced.length-1; i>=0; i--) {
              var link = '<div class="col-sm-3"><div class="image" style="background-image: url(' + sliced[i].source + ')"></div></div>';
              $row = $row + link;
            }
            $row = $row + '</div>';
            $('#photos').append($row);
          }
        }
        else {
          console.dir("No photos to display");
        }
      }
  );
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

25
21
17
13
9
5