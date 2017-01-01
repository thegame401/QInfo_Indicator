define(['query'], function(query){
	return {
		get_from_schooltime: function(schooltimeid){
			var test_sets = [
				{
					'name':'TEST 1 LIST knowledgestructure',
					'db': 'knowledgestructure',
					'view' : 'schooltimeid',
					'list': {'start':[schooltimeid],'end':[schooltimeid + 1],include_doc:true,limit:1}
				}
			];
			var arr = [];
			var q = new query(); 
			test_sets.forEach(function(test) {
				if(test.list) {
					q.list(test.db,test.view,test.list,function(err,result) {
						for(var i = 0; i < result[0]['value']['doc']['knowledgestructuredata'].length; i++){
							arr.push({
								KnowledgeID : result[0]['value']['doc']['knowledgestructuredata'][i]['knowledgeid'],
								KnowledgeNumber : result[0]['value']['doc']['knowledgestructuredata'][i]['knowledgenumber'],
								KnowledgeName : result[0]['value']['doc']['knowledgestructuredata'][i]['knowname'],
								LearningSTDID : result[0]['value']['doc']['knowledgestructuredata'][i]['learnstdid'],
								KnowledgeResultNo : result[0]['value']['doc']['knowledgestructuredata'][i]['knowledgeresultno'],
								Point : result[0]['value']['doc']['knowledgestructuredata'][i]['point'],
								Hour : result[0]['value']['doc']['knowledgestructuredata'][i]['hour'],
								Assignment : result[0]['value']['doc']['knowledgestructuredata'][i]['assignment'],
								Note : result[0]['value']['doc']['knowledgestructuredata'][i]['note'],
								SortNumber : result[0]['value']['doc']['knowledgestructuredata'][i]['sortnumber']
							})
						}
						console.log('output_knowledgestructure', {
							key : result[0]['value']['key'],
							data : arr
						})
					});
				}
			});
			return arr;
		}
	}
});