require(['jquery','qinfo_indicator'],function($,qinfo) {
  var tmp = new qinfo();
	var keyCourse = '';
  tmp.course.list(function(course_list) {
		if(typeof course_list == 'array')
		{
			course_list.forEach(function(course) {
				console.log(course.value);
				$('#content').append(JSON.stringify(course.value));
				//keyCourse = course.value;
			});
		}
		else if(typeof course_list == 'object')
		{
			console.log(course_list);
			$('#content').append(JSON.stringify(course_list));
			//keyCourse = course_list.value;
		}
			
		
  });
});
