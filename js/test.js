require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
  var keyCourse = '';

  tmp.course.get_by_schooltime(4679,function(err,s) {
    if(s) {
      var str = '';
      for(var key in s.value.doc) {
        str+=key+':'+s.value.doc[key]+'<br>';
      }
      $('#content').append(str);
    } else {
      $('#content').append(err.message);
    }
  });
});
