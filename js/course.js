define(['jquery','apikey'],function($,apikey) {

  var list = function(cb) {
    $.ajax({
      url:this.url+'/api/dbs/course',
      dataType:'json',
      data:{'apikey':apikey.key}
    }).done(function(msg) {
      console.log(msg);
      cb(msg);     
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
