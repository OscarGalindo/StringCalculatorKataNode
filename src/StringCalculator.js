StringCalculator = function() {
    function add(string) {
        if (!string.trim()) return 0;
        string += ',0'; // lol

        var regex = /\/\/(.*)\n(.*)/g;
        var match = regex.exec(string);

        var delimiter = (match) ? match[1] : '\n';
        var numbers = (match) ? match[2] : string;

        var re = new RegExp(delimiter, 'g');
        var negative = [];

        numbers = numbers
            .replace(re, ',')
            .split(",")
            .map(function(x) {
                x = parseInt(x, 10);
                if (x < 0) negative.push(x);
                return x;
            })
            .filter(function(number) {
                return (number < 1000);
            })
            .reduce(function(x, y) {
                return x + y;
            });


        if (negative.length > 0) throw new Error(JSON.stringify(negative));

        return numbers;
    }

    return {
        Add: add
    }
};

module.exports = StringCalculator;
