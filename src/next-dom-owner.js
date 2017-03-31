(function () {

  global = global || this;

  var nx = global.nx || require('next-js-core2');
  var DomOwner = nx.declare('nx.dom.Owner', {
    statics: {
      ownerDocument: function (inElement) {
        return (inElement && inElement.ownerDocument) || document;
      },
      ownerWindow: function (inElement) {
        var doc = DomOwner.ownerDocument(inElement);
        return doc && doc.defaultView || doc.parentWindow;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      ownerDocument: DomOwner.ownerDocument,
      ownerWindow: DomOwner.ownerWindow
    };
  }

}());
