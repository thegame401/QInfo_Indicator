require(['jquery','query'],function($,
  query) {

  var test_sets = [
    {  
       'db': 'educationchild',
       'view' : 'cid',
       'get' : {'start':['111'],include_doc:true,limit:1},
       'list': {'start':['111'],'end':['112'],limit:10}
    }
  ];

  var q = new query(); 

  var content = $('#content');

  test_sets.forEach(function(test) {
    q.get(test.db,test.view,test.get,function(err,result) {
      content.append('<p>Get: <b>'+test.db+'</b><br>');
      content.append(q.toHTML(result.value.doc));
      content.append('</p>');
    });

    q.list(test.db,test.view,test.list,function(err,result) {
      content.append('<p>List :<b>'+test.db+'</b><br>');
      result.forEach(function(item) {
        content.append(q.toHTML(item.value));
      });
      content.append('</p>');
    });
    
  });
});
