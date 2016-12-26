define(['jquery','apikey'],function($,apikey) {

  var list = function() {
    $.ajax({
      url:this.url+'/api/dbs/course',
      data:{'apikey':apikey.key}
    }).done(function(msg) {
      console.log(msg);
    });
  }

  var Course = function(url) {
    this.url = url;
  }

  Course.prototype = {
    'list':list
  }
  return Course;
});
