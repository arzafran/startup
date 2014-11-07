$(document).ready(function(){
  $('.greet:hidden').fadeIn(1000,function(){
    $(".alias").focus();
  });
  $('.ready-button').click(function(){
    $.get('http://bootcamp.aws.af.cm/welcome/' + $('#user-input').val(), function(data){
      $('#greeter-text').html(function(){
        var arr = data.response.split(" ");
        return arr.shift() + ' <span class="higlight">' + arr.join(" ") + ' </span>';
      })
	}, "json" ).fail(function() { $("#greeter-text").addClass("error"); });
    $.ajax({
      url: "http://localhost:3000/search?q=html5",
      type: "get"
    }).success(function(data){
      console.log(data);
      $.each(data.statuses,function(i,val){
        var tweetBox = '<article class="tweets-unit">' +
                       '<img src=' + val.user.profile_image_url + ' alt=""/>' +
                       '<p class="tweets-text">' + val.text + '</p>' + 
                       '<p class="tweets-user"><em>' + val.user.name + '</em></p>' +
                       '<p class="tweets-date">' + val.created_at + '</p>' +
                       '</article>';
          $('#tweets-box').append(tweetBox);
      });
    }); 
  });
});