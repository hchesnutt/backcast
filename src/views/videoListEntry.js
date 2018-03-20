var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click' : 'clickHandler'
  },

  initialize: function() {
    this.render();
  },
  
  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },
  
  clickHandler: function(e) {
    console.log(e);
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
