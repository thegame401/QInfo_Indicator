define(['jquery','course'],function($,Course) {
  var url = "https://202.143.174.208:8083";

  var QinfoIndicator = function() {
  }
  
  QinfoIndicator.prototype = {
    test: function() {
      return 'Test';
    },
    //'course':new Course(url,'course_index','GET','SchoolTimeID','10119','')
		'course':new Course(url,'course','GET','','','67ba3cb0caa211e6b9dafdedc5a41a9f')
  }

  return QinfoIndicator;
});

//https://202.143.174.208:8083/api/dbs/course_index?gte=course_index:SchoolTimeID:10119&lte=course_index:SchoolTimeID:10119xFF&apikey=test12345
