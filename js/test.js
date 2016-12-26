require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
  $('#content').append(tmp.course.list());
});
