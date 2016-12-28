define(['jquery','apikey'],function($,apikey) {

  var query = function(url,db,view,data,cb) {
    var query_str = JSON.stringify(data);
    $.ajax({
      url:url+'/api/query/'+db+'/'+view,
      dataType:'json',
      contentType:'application/json',
      method:'POST',
      data:query_str,
    }).done(function(response) {
      cb(response);     
    });
  };

  var get_by_schooltime = function(schooltime,cb) {
    var data = {
      start:[schooltime],
      limit:1,
      include_doc:true
    };

    query(this.url,this.db,'schooltime',data,function(response) {
      if(response.length != 1) {
        cb({'message':''+schooltime+' does not exists'},null);
      } else {
        cb(null,response[0]);
      }
    });
  };

  var Course = function(url) {
    this.url = url;
    this.db = 'course';
  }

  Course.prototype = {
    'get_by_schooltime':get_by_schooltime
  }

  return Course;
});
