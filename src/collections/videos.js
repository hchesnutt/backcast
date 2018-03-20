var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(string) {
    console.log(string);
    $.ajax({
      key: window.YOUTUBE_API_KEY,
      url: '',
      method: 'GET',
      query: string,
      maxResults: 5,
      contentType: 'application/json',
      success: data => {
        console.log('success! Check out these datas:', data);
      },
      error: error => {
        console.log('You dun screwed the pooch');
      }
    });
  },
});
