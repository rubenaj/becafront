var serie = /** @class */ (function () {
    function serie(titulo, numCapitulo) {
        this.titulo = titulo;
        this.numCapitulo = numCapitulo;
    }
    serie.prototype.gettitulo = function () {
        return this.titulo;
    };
    serie.prototype.settitulo = function (titulo) {
        return this.titulo = titulo;
    };
    serie.prototype.getnumCapitulo = function () {
        return this.numCapitulo;
    };
    serie.prototype.setnumCapitulo = function (numCapitulo) {
        return this.numCapitulo = numCapitulo;
    };
    return serie;
}());
