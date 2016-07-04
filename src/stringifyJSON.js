// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  switch(typeof obj) {
  	case 'boolean':
  	case 'number':
  		return ''+obj;
	case 'string':
		return '\"' + obj + '\"';
	case 'object':
		var str = '';
		if(Array.isArray(obj)) {
			if(obj.length === 0) {
				return '[]'
			} else {
				obj.forEach(x => { 
					var check;
					if(check = stringifyJSON(x))
						str += check + ','; 
				})
				str = str.slice(0, str.length - 1); 
				str ='[' + str + ']';
			}
		} else if(obj === null) {
			return ''+null;
		} else {
			for(var each in obj) {
				var check;
				if(check = stringifyJSON(obj[each]))
					str += '\"' + each + '\":' + check + ',';
			}
			if(str.length > 2)
				str = str.slice(0, str.length - 1);
			str = '{' + str + '}';
		}
		return str;
	default: 
		return;
  }
};
