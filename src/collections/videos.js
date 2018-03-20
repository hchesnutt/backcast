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
      'q': 'surfing',
      'key': window.YOUTUBE_API_KEY
    };
    
    $.ajax({
      url: `https://www.googleapis.com/youtube/v3/search`,
      method: 'GET',
      data: params,
      contentType: 'application/json',
      success: data => {
        console.log(data.items);
      },
      error: error => {
        console.log('You dun screwed the pooch:', error);
      }
    }); 
  }
});
