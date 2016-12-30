define(['queryable'],function(queryable) {

  var objToHTML = function(obj) {
    var str = '';
    for(var key in obj) {
      str+='<b>'+key+'</b> :'+
         obj[key]+'<br>';
    }
    return str;
  }

  var query = function() {
    var obj = queryable(this);
    return obj;
  }

  query.prototype = {
    toHTML : function(obj) {
      
      if((typeof obj) === 'object') {
        return objToHTML(obj);
      } 
      if((typeof obj) === 'string') {
        return obj+'<br>';
      } 
    }
  }

  return query;
});
