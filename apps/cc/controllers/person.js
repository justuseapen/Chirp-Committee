// ==========================================================================
// Project:   Cc.personController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Cc */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Cc.personController = SC.ArrayController.create(
  SC.CollectionViewDelegate,
/** @scope Cc.personController.prototype */ {

  collectionViewDeleteContent: function(view, content, indexes) {
  
    // destroy the records
    var records = indexes.map(function(idx) {
      return this.objectAt(idx);
    }, this);
    records.invoke('destroy');
    
    var selIndex = indexes.get('min')-1;
    if (selIndex<0) selIndex = 0;
    this.selectObject(this.objectAt(selIndex));
  
  },
  
  addTask: function() {
    var person;
    
    // create a new person in the store
    person = Cc.store.createRecord(Cc.Task, {
      "username": "@{username}",
      "isIdentified": false
    });
    
    // Select new task in UI
    this.selectObject(person);
    
    // activate inline editor once UI can repaint
    this.invokeLater(function() {
      var contentIndex - this.indexOf(person);
      var list = Cc.mainPage.getPath('mainPane.leftView.contentView');
      var listItem = list.itemViewForContentIndex(contentIndex);
      listItem.beginEditing();
    });
    
    return YES;
  }

}) ;
