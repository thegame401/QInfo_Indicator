require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
  var keyCourse = '';

  tmp.course.list_by_schooltime(4679,function(s) {
    var str = '';
    s.forEach(function(item) {
      for(var key in item.value.doc) {
        str+=key+':'+item.value.doc[key]+'<br>';
      }
      str+="<hr>";
    });

    $('#content').append(str);
  });
});
