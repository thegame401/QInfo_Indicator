define(['queryable'],function(queryable) {

  var query = function() {
    console.log('create new query');
    var obj = queryable(this);
    console.log(obj);
    return obj;
  }

  query.prototype = {
  }

  return query;
});
