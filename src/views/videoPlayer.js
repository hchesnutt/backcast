var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function() {
    this.render();
    this.collection.on('select', this.selectHandler, this);
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  selectHandler: function() {
  },

  template: templateURL('src/templates/videoPlayer.html')

});
