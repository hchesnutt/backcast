var VideoListView = Backbone.View.extend({

  // create sync event listener
  initialize: function() {
    this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // for each video, render videoListEntry and append to video-list
    this.collection.forEach(function(video) {
      this.renderVideo(video);
    });
   
    return this;
  },
  
  renderVideo: function(video) {
    // instantiate new instance of videoListEntry - View
    new VideoListEntryView({
      el: this.$('.video-list'),
      model: video
    });
  },

  template: templateURL('src/templates/videoList.html')

});
