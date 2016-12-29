require(['jquery','query'],function($,
  query) {

  var test_sets = [
    {  
       'name':'TEST 1 GET educationchild',
       'db': 'educationchild',
       'view' : 'cid',
       'get' : {'start':['111'],include_doc:true,limit:1},
    },
    {  
       'name':'TEST 2 LIST educationchild',
       'db': 'educationchild',
       'view' : 'cid',
       'list': {'start':['111'],'end':['112'],limit:10}
    }
  ];
  

  var q = new query(); 

  var content = $('#content');

  test_sets.forEach(function(test) {
    if(test.get) {
      q.get(test.db,test.view,test.get,function(err,result) {
        content.append('<p>GET: <b>'+test.name+'</b><br>');
        content.append(q.toHTML(result.value.doc));
        content.append('</p>');
      });
    }

    if(test.list) {
      q.list(test.db,test.view,test.list,function(err,result) {
        content.append('<p>List :<b>'+test.name+'</b><br>');
        result.forEach(function(item) {
          content.append(q.toHTML(item.value));
        });
        content.append('</p>');
      });
    }
  });
});
