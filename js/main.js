require.config({
  baseUrl:"js",
  paths:{
    "jquery":"https://code.jquery.com/jquery-2.2.4.min"
  }
});

//requirejs(["test"]);


requirejs(["examratio","knowledgestructure"], function(examratio,know){
	var a = examratio.get_from_schooltime(75577);
	var b = know.get_from_schooltime(75577);
	console.log(a);
	console.log(b);
});
