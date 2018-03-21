var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',
  selectedVideo: '',

  initialize: function() {
    this.selectedVideo = this.collection.at(0);
    this.render();
    this.collection.on('reset', this.resetHandler, this);
    this.collection.on('select', this.selectHandler, this);
  },
  
  render: function(collection) {
    this.$el.html(this.template(this.selectedVideo.attributes));
  },
  
  selectHandler: function(video) {
    this.selectedVideo = video;
    this.render();
  },
  
  resetHandler: function(resetCollection) {
    this.selectedVideo = resetCollection.at(0);
    this.render();
  },
  
  template: templateURL('src/templates/videoPlayer.html')

});
