var spawn = require('child_process').spawn;

module.exports = function(command, cb) {
    if(!cb) {
        cb = function(){};
    }
    var awesome = spawn('awesome-client');
    awesome.on('exit', function(code) {
        if(!cb) {
            return;
        }
        if(code === 0) {
            cb();
        } else {
            cb(new Error('awesome-client exited with code ' + code));
        }
        cb = null;
    });
    awesome.on('error', function(err) {
        if(!cb) {
            return;
        }
        cb(err);
        cb = null;
    });
    awesome.stdin.write(command);
    awesome.stdin.end();
};
