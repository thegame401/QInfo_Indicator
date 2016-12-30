require(['jquery','query'],function($,
  query) {

  var test_sets = [
    {
			'name':'TEST 1 LIST knowledge_structure',
      'db': 'knowledgestructure',
      'view' : 'subjectstructureid',
      'list': {'start':['3083200101201510905'],'end':['3083200101201510905f'],include_doc:true,limit:10}
		}
  ];
  var q = new query(); 
  var content = $('#content');
  test_sets.forEach(function(test) {
		
    if(test.get) {
      q.get(test.db,test.view,test.get,function(err,result) {
        content.append('<p><b class="red">'+test.name+'</b><br><hr>');
        content.append('METHOD ::list<br>');
        content.append('DB ::'+test.db+'<br>');
        content.append('VIEW ::'+test.view+'<br>');
        content.append('QUERY ::'+JSON.stringify(test.list)+'<br>');
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
				var arr = [];
				for(var i = 0;i < result.length ; i++){
					arr.push(result[i]['value']);
				}
        content.append('<pre>'+JSON.stringify(arr,null,2)+'</pre>');
      });
    }
  });
});


/*
	{  
			'name':'TEST 1 knowledgestructure',
      'db': 'knowledgestructure',
      'view' : 'subjectstructureid',
      'get' : {'start':['3083200101201510905'],'end':['3083200101201510905f'],include_doc:true,limit:1},
    },
		{
			'name':'TEST 2 LIST examratio',
      'db': 'examratio',
      'view' : 'schooltimeid',
      'list': {'start':[54065],'end':[54066],include_doc:true,limit:10}
		},
		{
			'name':'TEST 3 LIST desirecharacteristicdata_schooltimeid',
      'db': 'desirecharacteristicdata',
      'view' : 'schooltimeid',
      'list': {'start':[54065],'end':[54066],include_doc:true,limit:10}
		},
		{
			'name':'TEST 4 LIST desirecharacteristicdata_cid',
      'db': 'desirecharacteristicdata',
      'view' : 'cid',
      'list': {'start':['1839901813141'],'end':['1839901813141f'],include_doc:true,limit:1}
		},
		{
			'name':'TEST 5 LIST readthinkwritedata_schooltimeid',
      'db': 'readthinkwritedata',
      'view' : 'schooltimeid',
      'list': {'start':[54065],'end':[54066],include_doc:true,limit:10}
		},
		{
			'name':'TEST 6 LIST readthinkwritedata_cid',
      'db': 'readthinkwritedata',
      'view' : 'cid',
      'list': {'start':['1839901813141'],'end':['1839901813141f'],include_doc:true,limit:1}
		},
		{
			'name':'TEST 7 LIST indicatordata_schooltimeid',
      'db': 'indicatordata',
      'view' : 'schooltimeid',
      'list': {'start':[54065],'end':[54066],include_doc:true,limit:1}
		},
		{
			'name':'TEST 8 LIST indicatordata_cid',
      'db': 'indicatordata',
      'view' : 'cid',
      'list': {'start':['1839901813141'],'end':['1839901813141f'],include_doc:true,limit:1}
		},
		{
			'name':'TEST 10 LIST indicatordata_grade',
      'db': 'indicatordata',
      'view' : 'grade',
      'list': {'start':['4'],'end':['4f'],include_doc:true,limit:1}
		}
	*/
	
	/*
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
    }*/
  