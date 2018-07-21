module.exports.noticias = function (application, req, res) {
    var noticiasModel = new application.app.models.NoticiasDAO(application.config.database());
    noticiasModel.getNoticias(function (error, result) {
        res.render('noticias/noticias', { noticias: result });
    });
};

module.exports.noticia = function (application, req, res) {
    var noticiasModel = new application.app.models.NoticiasDAO(application.config.database());
    
    noticiasModel.getNoticia(req.query.id, function (error, result) {
        res.render('noticias/noticia', { noticia: result[0] });
    });
};
