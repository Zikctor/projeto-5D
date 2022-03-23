module.exports=function (app) {
	app.get('/noticia',function(req,res){
		const mysql=require('mysql');
		const dbConnection=require('../../config/dbConnection');//importação do módulo mysqL
		const connection=dbConnection();
			connection.query('select * from noticias', function(error,result) {
				if (error) {
					console.log(error);
				}
				//res.send(result);//resposta da query para o cliente;
				res.render('noticias/noticias.ejs',{noticias:result});
				//renderização da tela noticia.ejs juntamente com o envio da tela
			})	//res.render('noticias/noticia.ejs');
});

}