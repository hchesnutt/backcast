var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // create new instance of videoplayer and pass it in this.videos
    // var newVideoPlayer = new VideoPlayerView({collection: this.videos});
    // create new instance of videolistview and pass it in this.videos
    console.log(this);
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    });
    
    return this;
  },


  template: templateURL('src/templates/app.html')

});
