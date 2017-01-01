define(['query'], function(query){
	return {
		get_from_schooltime: function(schooltimeid){
			var test_sets = [
				{
					'name':'TEST 1 LIST ExamRatio',
					'db': 'examratio',
					'view' : 'schooltimeid',
					'list': {'start':[schooltimeid],'end':[schooltimeid + 1],include_doc:true,limit:1}
				}
			];
			var arr = [];
			var q = new query(); 
			test_sets.forEach(function(test) {
				if(test.list) {
					q.list(test.db,test.view,test.list,function(err,result) {
						var isSchoolTime = true;
						for (var prop in result[0]['value']['doc']) {
							if(isSchoolTime === true)
							{
								isSchoolTime = false;
							}
							else
							{
								arr.push({
									Point : result[0]['value']['doc'][prop]
								})
							}
						}
						console.log('output_ExamRatio', {
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