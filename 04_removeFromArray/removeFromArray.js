const removeFromArray = function(array, ...args) {

    for (let i = 0; i < args.length; i++) {
        while(array.indexOf(args[i]) >= 0) {
            const index = array.indexOf(args[i]);
            array.splice(index, 1);
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
