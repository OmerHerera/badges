var colors = require('colors')
, async = require('async');

function _privateColors () {
    console.log(colors.green('hello')); // outputs green text
    console.log(colors.red.underline('i like cake and pies')); // outputs red underlined text
    console.log(colors.inverse('inverse the color')); // inverses the color
    console.log(colors.rainbow('OMG Rainbows!')); // rainbow
    console.log(colors.trap('Run the trap')); // Drops the bass

}

function _privateAsync(err) {
    async.parallel([
            function(callback){
                _privateColors(err);
                callback(null, 'one');
            },
            function(callback){
                _privateColors(err);
                callback(null, 'two');
            }
        ],
        // optional callback
        function(err, results){
        });
}


module.exports.start = function () {
    _privateAsync();

};
