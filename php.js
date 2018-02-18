/**
*
*/
class ExecPHP {
	/**
	*
	*/
	constructor() {
		this.phpPath = '/usr/bin/php';
		this.phpFolder = '';
	}	
	/**
	*
	*/
	parseFile(fileName,callback) {
		var realFileName = this.phpFolder + fileName;
		
		console.log('parsing file: ' + realFileName);

		var exec = require('child_process').exec;
		var cmd = 'php -S 0.0.0.0:9000 -t /home/joe/Ripos/Tuts/sqlite ' + ' ' + realFileName;
		
		exec(cmd, function(error, stdout, stderr) {
			callback(stdout);
		});
	}
}
module.exports = function() {
	return new ExecPHP();
};