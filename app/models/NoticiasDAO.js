function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._conn.query('select * from noticias order by data_noticia desc', callback);
};

NoticiasDAO.prototype.getNoticia = function (idnoticia, callback) {
    this._conn.query('select * from noticias where idnoticias = ' + idnoticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._conn.query('insert into noticias set ? ', noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function (callback) {
    this._conn.query('select * from noticias order by data_noticia desc limit 5 ', callback);
};

module.exports = function () {
    return NoticiasDAO;
}