var months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var categories = ["shared_story", "mobile_status_update", "wall_post", "published_story"];

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
      "156461214445282/posts?access_token=199641883439198|vek5DCKZitLd9raLUiT0rT7guhM",
      function (response) {
        $('#news').html('');
        try {
          console.dir(response);
          var data = response.data;
          if (data.length < 1)
            throw err;
          // displaying 24 recent news
          var $row = '<div class="row">';
          var limit = data.length;
          var columnCount = 0;
          for (var count = 0; count < limit; count++) {
            if (typeof data[count].status_type != "undefined" && $.inArray(data[count].status_type, categories) > -1) {
              var picture = 'img/logos/link_logo.jpg';
              if (typeof data[count].picture != "undefined") {
                var index = data[count].picture.indexOf('url=');
                if (index > -1) {
                  picture = data[count].picture.substring(index+4).replace(/%3A/g, ':');
                  picture = picture.replace(/%2F/g, '/');
                }
                else
                  picture = data[count].picture;
              }
              var message = typeof data[count].message != "undefined" ? data[count].message : "No content";
              message = message.split("\n").join("<br>").replace(/<br><br>/g, "<br>");
              if (message.length > 140) {
                message = message.substring(0, 137) + '...';
              }
              var time = data[count].created_time.split('T')[0];

              var year  = time.split("-")[0];
              var month   = months[time.split("-")[1]];
              var day = time.split("-")[2];

              var link = 'http://www.facebook.com/' + data[count].id.split("_").join("/posts/");
              var news = '<div class="col-sm-3"><a href="' + link + '" target="_blank"><div class="image"><img src=' + picture + '></div><div class="text"><h4>' + month + ' ' + day + ', ' + year + '</h4><p>' + message + '</p></div></a></div>';
              $row = $row + news;
              columnCount++;
              console.dir(data[count]);
            }
            if (columnCount > 3 || count == limit-1) {
              $row = $row + '</div>';
              $('#news').append($row);
              $row = '<div class="row">';
              columnCount = 0;
            }
          }
        }
        catch(err) {
          console.dir(err + "Error: no news to display");
          var $row = '<div class="row"><p><b>There are no news to display.</b></p></div>';
          $('#news').append($row);
        }
      }
  );
}