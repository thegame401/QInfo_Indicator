require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
  tmp.course.list(function(course_list) {
    course_list.forEach(function(course) {
      console.log(course);
      $('#content').append('<p>'+course.value.SubjectID+'</p>');
    });
  });
});
