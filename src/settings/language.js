module.exports = {
	".text.html.ss": {
		"editor": {
			"commentStart": "<%-- ",
			"commentEnd": " --%>",
			"increaseIndentPattern": "<%\\s*(?:if|else|loop|with|control)|<%t|<(?!area|base|br|col|frame|hr|html|img|input|link|meta|param)[a-zA-Z]+|^\\/>",
			"decreaseIndentPattern": "<%\\s*end_[a-zA-Z]+|include|require|else]|<\\/?[a-zA-Z]+(\\s\\/)?>"
		}
	}
}
