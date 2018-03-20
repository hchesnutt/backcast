var SearchView = Backbone.View.extend({

  events: {
    'click button': 'clickHandler',
    'keyup': 'keyupHandler'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  clickHandler: function(e) {
    var query = $('.form-control').val();
    this.collection.search(query);
  },
  
  keyupHandler: function(e) {
    if (e.keyCode === 13) {
      this.collection.search(e.target.value); 
    }
  },

  template: templateURL('src/templates/search.html')

});
