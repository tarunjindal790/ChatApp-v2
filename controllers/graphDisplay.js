module.exports=function(async,Users){
	return{
		SetRouting:function(router){
			router.get('/graphDisplay',this.graphDisplay);
		},
		graphDisplay:function(req,res){
			async.parallel([
				function(callback){
					Users.countDocuments({},(err,result)=>{
						callback(err,result);
					})
				}
				],(err,results)=>{
					const res1=results[0];//number of dots we need to create
					console.log(res1);
					res.render('graphDisplay',{nodes:res1});

				})
		}
	}
}