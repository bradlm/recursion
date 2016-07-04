// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  switch(true) {
  	case /^true|false$/.test(json):
  		return Boolean(json);
  	case /^[-+]?\d*\.?\d+([eE][-+]?\d+)?$/.test(json): //number
  		return +json;
	case /$['"][^]*['"]^/.test(json): //string
		return json.slice(1,json.length-1);
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
		return; //invalid inpiut
  }
};
