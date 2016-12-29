require(['jquery','query'],function($,
  query) {
  var q = new query(); 

  q.get('educationchild','cid',{
    start:['111'],
    end:['112'],
    limit:1},function(result) {
    console.log(result);
  });
});
