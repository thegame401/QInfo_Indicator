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

  var get = function() {
    var args = Array.prototype.slice.call(arguments);
    var url = args[0];
    var db = args[1];
    var view = args[2];
    var data = args[3];
    var cb = args[4];
    console.log(args);
    query(url,db,view,data,function(response) {
      if(response.length != 1) {
        cb({'message':'Does not exists'},null);
      } else {
        cb(null,response[0]);
      }
    });
  };

  var Queryable = function(obj) {
    this.url = "https://202.143.174.208:8083";
    console.log('init');
    if(!obj.get)  {
      obj.get = get.bind(null,this.url);
      console.log('bind get');
    }
    return obj;
  }

  Queryable.prototype = {
    get:get
  }

  return Queryable;
});
