StringCalculator = function() {
    function add(numbers) {
        if(!numbers.trim()) return 0;
        return numbers;
    }
    return {
        Add: add
    }
};

module.exports = StringCalculator;