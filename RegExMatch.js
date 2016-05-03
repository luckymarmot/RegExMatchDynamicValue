var RegExMatch = function() {
	this.evaluate = function() {
		var regex;
		if (this.ignoreCase && this.multiline) {
			regex = new RegExp(this.re, "gim");
		}
		else if (this.ignoreCase && !this.multiline) {
			regex = new RegExp(this.re, "gi");
		}
		else if (!this.ignoreCase && this.multiline) {
			regex = new RegExp(this.re, "gm");
		}
		else {
			regex = new RegExp(this.re, "g");
		}

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
		return " ➤ " + this.input;
	}
}

RegExMatch.identifier = "com.luckymarmot.RegExMatch";

RegExMatch.title = "RegEx Match";

RegExMatch.help = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_meaning_in_regular_expressions";

RegExMatch.inputs = [
	InputField("re", "RegEx", "String"),
	InputField("input", "Input", "String"),
	InputField("ingnoreCase","ignore case", "Checkbox", {defaultValue: false}),
	InputField("multiline","multiline", "Checkbox", {defaultValue: false})
]

registerDynamicValueClass(RegExMatch);