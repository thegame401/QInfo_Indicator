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
        content.append('<p><b class="red">'+test.name+'</b><br><hr>');
        content.append('METHOD ::get<br>');
        content.append('DB ::'+test.db+'<br>');
        content.append('VIEW ::'+test.view+'<br>');
        content.append('QUERY ::'+JSON.stringify(test.get)+'<br><br>');
        content.append(q.toHTML(result.value.doc));
      });
    }

    if(test.list) {
      q.list(test.db,test.view,test.list,function(err,result) {
        content.append('<p><b class="red">'+test.name+'</b><br><hr>');
        content.append('METHOD ::list<br>');
        content.append('DB ::'+test.db+'<br>');
        content.append('VIEW ::'+test.view+'<br>');
        content.append('QUERY ::'+JSON.stringify(test.list)+'<br><br>');
        result.forEach(function(item) {
          content.append(q.toHTML(item.value));
        });
      });
    }
  });
});
