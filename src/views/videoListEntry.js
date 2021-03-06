var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'clickHandler',
    'click .media-object': 'clickHandler'
  },

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  clickHandler: function(e) {  
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
