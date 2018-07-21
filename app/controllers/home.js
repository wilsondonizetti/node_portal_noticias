module.exports.index = function (application, req, res) {

    var noticiasModel = new application.app.models.NoticiasDAO(application.config.database());
    noticiasModel.get5UltimasNoticias(function (error, result) {
        res.render('home/index', { noticias: result });
    })

}