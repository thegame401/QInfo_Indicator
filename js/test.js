require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
	var keyCourse = '';
  tmp.course.list(function(course_list) {
    course_list.forEach(function(course) {
      console.log(course);
			keyCourse = course.value;
    });
  });
});
