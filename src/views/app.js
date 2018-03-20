var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // create Video List view
    new VideoListView({
      el: this.$('.list'),
      collection: this.collection
    }); 
    // create video player view
    new VideoPlayerView({
      collection: this.collection
    });
    
    return this;
  },


  template: templateURL('src/templates/app.html')

});
