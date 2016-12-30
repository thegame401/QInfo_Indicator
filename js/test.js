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
    },
    {  
       'name':'TEST 3 LIST student by hostid [3720140208]',
       'db': 'educationchild',
       'view' : 'host_cid',
       'list': {'start':['3720140208'],'end':['3720140208f'],limit:2}
    },
    {  
       'name':'TEST 4 LIST student by [3720140208,5]',
       'db': 'educationchild',
       'view' : 'host_class_room',
       'list': {'start':['3720140208',5],'end':['3720140208',6],include_doc:true}
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
        content.append('QUERY ::'+JSON.stringify(test.get)+'<br>');
        content.append('RESULT ::<br>');
        content.append('<pre>'+JSON.stringify(result,null,2)+'</pre>');
      });
    }

    if(test.list) {
      q.list(test.db,test.view,test.list,function(err,result) {
        content.append('<p><b class="red">'+test.name+'</b><br><hr>');
        content.append('METHOD ::list<br>');
        content.append('DB ::'+test.db+'<br>');
        content.append('VIEW ::'+test.view+'<br>');
        content.append('QUERY ::'+JSON.stringify(test.list)+'<br>');
        content.append('RESULT ::<br>');
        content.append('<pre>'+JSON.stringify(result,null,2)+'</pre>');
      });
    }
  });
});
