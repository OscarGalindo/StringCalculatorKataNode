StringCalculator = function() {
    function add(string) {
        if (!string.trim()) return 0;
        string += ',0'; // lol

        var regex = /\/\/(.*)\n(.*)/g;
        var match = regex.exec(string);

        var delimiter = (match) ? match[1] : '\n';
        var numbers = (match) ? match[2] : string;

        var re = new RegExp(delimiter, 'g');

        numbers = numbers
            .replace(re, ',')
            .split(",")
            .map(function(x) {
                return parseInt(x, 10);
            });

        var negative = [];
        numbers.forEach(function(number) {
            if (number < 0) negative.push(number);
        });

        if (negative.length > 0) throw new Error(JSON.stringify(negative));

        return numbers.reduce(function(x, y) {
            return x + y;
        });
    }

    return {
        Add: add
    }
};

module.exports = StringCalculator;