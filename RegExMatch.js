var RegExMatch = function() {
	this.evaluate = function() {

		var flags = 'g';
		flags += this.ignoreCase ? 'i' : '';
		flags += this.multiline ? 'm' : '';

		var regex = new RegExp(this.re, flags);

		var m = regex.exec(this.input);
		if(m != null) {
			if(m.length === 1) {
				return m[0];
			}
			else {
				return m[1];
			}
		}
		else {
			return "";
		}
	}

	this.text = function(context) {
		if (!this.input && this.input.length === 0) {
			return null;
		}
		return "➤ " + this.input;
	}
}

RegExMatch.identifier = "com.luckymarmot.RegExMatch";
RegExMatch.title = "RegExp Match";
RegExMatch.help = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_meaning_in_regular_expressions";
RegExMatch.inputs = [
	InputField("re", "RegExp", "String"),
	InputField("input", "Input", "String"),
	InputField("ignoreCase","Case-insensitive", "Checkbox", {defaultValue: false}),
	InputField("multiline","Multiline", "Checkbox", {defaultValue: false})
]

registerDynamicValueClass(RegExMatch);
