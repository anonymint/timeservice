'use Strict';

var Time = function() {

	this.getTime = function(datetime, long) {
		return {"unix":long, "natural":datetime};
	}
	
}

function TimeController() {

	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	this.process = function(val) {
		var date;
		if (isNaN(val)) {
			var buffer = new Date(Date.parse(val));
			if (!isNaN(buffer)){
				date = new Date(Date.UTC(buffer.getFullYear(), buffer.getMonth(), buffer.getDate()));
			}			
		} else {
			date = new Date(Number(val*1000));		
		}		

		var result = new Time();
		if (date) {
			return result.getTime(monthNames[date.getUTCMonth()]+' '+date.getUTCDate()+', '+date.getUTCFullYear(),date.getTime()/1000)	
		} else {
			return result.getTime('null','null');
		}		

	}
}

module.exports = TimeController;