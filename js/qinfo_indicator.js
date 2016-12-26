define(['jquery','course'],function($,Course) {
  var url = "http://202.143.174.208:8083";

  var QinfoIndicator = function() {
  }
  
  QinfoIndicator.prototype = {
    test: function() {
      return 'Test';
    },
    'course':new Course(url)
  }

  return QinfoIndicator;
});
