// Generated by CoffeeScript 1.6.1
var LazyList, OperationList,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LazyList = require('./lazy-list');

OperationList = (function(_super) {

  __extends(OperationList, _super);

  function OperationList() {
    return OperationList.__super__.constructor.apply(this, arguments);
  }

  OperationList.prototype.info = function(callback) {
    return this;
  };

  OperationList.prototype.refund = function(callback) {
    return this;
  };

  return OperationList;

})(LazyList);

module.exports = OperationList;