module.exports = {
  "scopeName": "text.html.ss",
  "name": "HTML Silverstripe",
  "fileTypes": [
    "ss"
  ],
  "foldingStartMarker": "<%\\s+(?:if|else|loop|with|control|cache|uncache)|<%--",
  "foldingStopMarker": "<%\\s+end_[a-zA-Z]+|else].*\\s%>|--%>",
  "patterns": [
    {
      "include": "text.html.basic"
    },
    {
      "begin": "<% +(?!>)(include|require)*[-=]?",
      "captures": {
        "0": {
          "name": "support.function.ss"
        },
        "1": {
          "name": "keyword.control.import.include.ss"
        }
      },
      "end": "-? %>",
      "name": "keyword.control.ss",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.comment"
            }
          },
          "match": "(#).*?(?=-? %>)",
          "name": "comment.line.number-sign"
        }
      ]
    },
    {
      "begin": "<%--+(?!>)[-=]?",
      "captures": {
        "0": {
          "name": "punctuation.definition.comment.html"
        }
      },
      "end": "-?--%>",
      "name": "comment.block.ss",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.comment.html"
            }
          },
          "match": "(#).*?(?=-?--%>)",
          "name": "invalid.illegal.bad-comments-or-CDATA.html"
        }
      ]
    },
    {
      "begin": "<%t",
      "beginCaptures": {
        "0": {
          "name": "support.function.ss"
        }
      },
      "end": "-? %>",
      "endCaptures": {
        "0": {
          "name": "support.function.ss"
        }
      },
      "name": "keyword.control.import.include.ss"
    },
    {
      "begin": "(<(?!/|%)([a-zA-Z]*))",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.begin.html.ss"
        }
      },
      "end": "(?!%>)(>)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.tag.end.html.ss"
        }
      },
      "name": "meta.tag.block.any.html.ss",
      "patterns": [
        {
          "include": "#ss-variable-open"
        },
        {
          "include": "#ss-variable-closed"
        }
      ]
    },
    {
      "include": "#ss-variable-open"
    },
    {
      "include": "#ss-variable-closed"
    }
  ],
  "repository": {
    "ss-variable-open": {
      "match": "\\$(\\.?[\\w]+(\\([\\,\\.'\"\\s\\w]*\\))*)*",
      "name": "variable.parameter.ss"
    },
    "ss-variable-closed": {
      "begin": "{\\$",
      "end": "}",
      "name": "variable.parameter.ss"
    }
  }
}
