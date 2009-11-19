// ==========================================================================
// Project:   Cc.Person
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Cc */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Cc.Person = SC.Record.extend(
/** @scope Cc.Person.prototype */ {

  isIdentified: SC.Record.attr(Boolean),
  name: SC.Record.attr(String),
  username: SC.Record.attr(String),
  avatar: SC.Record.attr(String)

}) ;
