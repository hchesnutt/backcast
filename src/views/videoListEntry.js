var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click' : 'clickHandler'
  },

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(this.template());
    return this;
  },
  
  clickHandler: function(e) {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
