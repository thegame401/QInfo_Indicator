define(['jquery','apikey'],function($,apikey) {

  var list_by_schooltime = function(schooltime,cb) {
    var query = {
      start:[schooltime],
      limit:1,
      include_doc:true
    };

    $.ajax({
      url:this.url+'/api/query/'+this.db+'/schooltime',
      dataType:'json',
      contentType:'application/json',
      method:'POST',
      data:JSON.stringify(query),
    }).done(function(msg) {
      console.log(msg);
      cb(msg);     
    });
  }

  var Course = function(url) {
    this.url = url;
    this.db = 'course';
  }

  Course.prototype = {
    'list_by_schooltime':list_by_schooltime
  }

  return Course;
});
