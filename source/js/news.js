window.fbAsyncInit = function() {
  FB.init({
    appId      : '199641883439198',
    status     : true,
    xfbml      : true
  });
  getPosts();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

var getPosts = function() {
  FB.api(
      "156461214445282/posts?access_token=CAACEdEose0cBAD11mbMZBwYQ0oYzdnAB7QrkyVxKH3yCzvMksbxTl2SvkETvOyTpaC4vIZBZBo7oDN0fp7YckTvOUDq9HbDPqGZC0NcCgBOnnMOZCZCzyvBjAYZBLz0Mm2RIcZAwyoAL3lSYlG3I1qHPGNW1WX85NCZBRKytiHZBBaGQfUzUFSS8F1NJ9pw6m7jnhmJbYVcbffiQZDZD",
      function (response) {
        console.dir(response);
        // $('#photos').html('');
        // try {
        //   console.dir(response);
        //   var data = response.data;
        //   if (data.length < 1)
        //     throw err;
        //   // displaying 24 recent photos
        //   var $row = '<div class="row">';
        //   var limit = data.length > 23 ? 24 : data.length;
        //   for (var count = data.length-1; count >= data.length-limit; count--) {
        //       var link = '<div class="col-sm-3"><div class="image" style="background-image: url(' + data[count].source + ')"></div></div>';
        //       $row = $row + link;
        //   }
        //   $row = $row + '</div>';
        //   $('#photos').append($row);
        // }
        // catch(err) {
        //   console.dir("Error: no photos to display");
        //   var $row = '<div class="row"><p><b>There are no photos to display.</b></p></div>';
        //   $('#photos').append($row);
        // }
      }
  );
}