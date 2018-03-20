var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',
  // selected video is static

  initialize: function() {
    this.render();
    this.collection.on('select', this.selectHandler, this);
  },
  
  render: function(video) {
    var newVideo = video || this.collection.at(0);
    this.$el.html(this.template(newVideo.attributes));
  },
  
  selectHandler: function(video) {
    this.render(video);
  },

  template: templateURL('src/templates/videoPlayer.html')

});
