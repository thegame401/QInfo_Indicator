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
    query(url,db,view,data,function(response) {
      if(response.length != 1) {
        cb({'message':'Does not exists'},null);
      } else {
        cb(null,response[0]);
      }
    });
  };

  var list = function() {
    var args = Array.prototype.slice.call(arguments);
    var url = args[0];
    var db = args[1];
    var view = args[2];
    var data = args[3];
    var cb = args[4];
    query(url,db,view,data,function(response) {
      cb(null,response);
    });
  };

  var Queryable = function(obj) {
    this.url = "https://202.143.174.208:8083";

    if(!obj.get)  {
      obj.get = get.bind(null,this.url);
    }

    if(!obj.list) {
      obj.list = list.bind(null,this.url);
    }
    return obj;
  }

  Queryable.prototype = {
    get:get
  }

  return Queryable;
});
