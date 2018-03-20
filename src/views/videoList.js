var VideoListView = Backbone.View.extend({

  // create sync event listener
  initialize: function() {
    this.render();
    // this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // for each video, render videoListEntry and append to video-list
    var context = this;
    this.collection.forEach(function(video) {
      this.$('.video-list').append(context.renderVideo(video).el);
    });
   
    return this;
  },
  
  renderVideo: function(video) {
    // instantiate new instance of videoListEntry - View
    return new VideoListEntryView({
      model: video
    });
  },

  template: templateURL('src/templates/videoList.html')

});
