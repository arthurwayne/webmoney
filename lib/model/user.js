// Generated by CoffeeScript 1.6.3
var List, Purse, User;

Purse = require('./purse');

List = require('./list');

User = (function() {
  function User() {}

  User.prototype.createPurse = function(data) {
    return new Purse(data);
  };

  User.prototype.purses = function() {
    return new PurseList({
      wmid: this._id
    });
  };

  User.prototype.inInvoices = function(selector) {
    return new InvoiceList({
      wmid: this._id
    }).filter(selector);
  };

  return User;

})();

module.exports = WMID;