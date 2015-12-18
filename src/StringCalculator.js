StringCalculator = function() {
    function add(string) {
        if (!string.trim()) return 0;
        string += ',0'; // lol

        var regex = /\/\/(.*)\n(.*)/g;
        var match = regex.exec(string);

        var delimiter = (match) ? match[1] : '\n';
        var numbers = (match) ? match[2] : string;

        var re = new RegExp(delimiter, 'g');
        numbers = numbers.replace(re, ',');

        return numbers
            .split(",")
            .reduce(function(x, y) {
                return parseInt(x, 10) + parseInt(y, 10);
            });
    }

    return {
        Add: add
    }
};

module.exports = StringCalculator;