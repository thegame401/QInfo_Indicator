define(['jquery','apikey'],function($,apikey) {

  var list = function(cb) {
		if(this.key != '')
		{
			$.ajax({
				url:this.url+'/api/dbs/'+this.dbs+'/'+this.key+'?apikey='+apikey.key,
				dataType:'json',
				method:this.method,
				data:{'apikey':apikey.key}
			}).done(function(msg) {
				console.log(msg);
				cb(msg);     
			});
		}
		else
		{
			$.ajax({
				url:this.url+'/api/dbs/'+this.dbs+'?gte='+this.dbs + ':'+this.indexname+':'+this.value
				+'&lte='+this.dbs + ':'+this.indexname+':'+this.value+'xFF&apikey='+apikey.key,
				dataType:'json',
				method:this.method,
				data:{'apikey':apikey.key}
			}).done(function(msg) {
				console.log(msg);
				cb(msg);     
			});
		}
  }

  var Course = function(url, dbs, method, indexname, value, key) {
    this.url = url;
		this.dbs = dbs;
		this.method = method;
		this.indexname = indexname;
		this.value = value;
		this.key = key;
  }

  Course.prototype = {
    'list':list
  }
  return Course;
});
