module.exports = {
    RandomChar : function(length) {
        var string = "abcdefghijklmnopqrstuvwxyx0123456789";
        var str = ''

        var i = 0;
        while (i < length) {
            str += string.charAt(Math.floor(Math.random() * string.length));
            i++
        }

        return str;

    }
}
