var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(string) {
    this.fetch(string);
  },
  // gets default video data from youtube api
  fetch: function(string) {
    let params = {
      'maxResults': '5',
      'part': 'snippet',
      'q': string,
      'key': window.YOUTUBE_API_KEY
    };
    
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search`,
      method: 'GET',
      data: params,
      contentType: 'application/json',
      success: data => {
        // remove old videos and add new ones
        this.reset(this.parse(data));
      },
      error: error => {
        console.log('You dun screwed the pooch:', error);
      }
    }); 
  },
  
  parse: function(data) {
    return data.items;
  }
});
