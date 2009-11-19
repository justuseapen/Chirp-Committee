// ==========================================================================
// Project:   Cc - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Cc */

// This page describes the main user interface for your application.  
Cc.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'topView leftView rightView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 50 },
      childViews: 'labelView addButton'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: 'Chirp Committee'
      }),
      
      addButton: SC.ButtonView.design({
        layout: { centerY: 0, height: 24, right: 12, width: 100 },
        title: "Sign In"
      })
    }),
    
    leftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      layout: { top: 50, bottom: 0, left: 0, width: 300 },
      backgroundColor: 'white',
      
      contentView: SC.ListView.design({
        contentBinding: 'Cc.personController.arrangedObjects',
        selectionBinding: 'Cc.personController.selection',
        contentValueKey: 'username',
        rowHeight: 45,
        canEditContent: YES,
        canDeleteContent: YES
      })
    }),
    
    rightView: SC.ScrollView.design({
      layout: { top: 50, bottom: 0, left: 300, right: 0 },
      anchorLocation: SC.ANCHOR_BOTTOM
    })
    
  })

});
