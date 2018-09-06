var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: "mk6OJYzlLkQ3DWL2XFVKSiGso",
  consumer_secret: "VqY1ptqTHcIuZJHDTnJ5C1jRZkvQzUlCcuhPJ6xliMkhtbXlBE",
  access_token_key: "1009388580106657792-Z8TqMEiIDkjVxyAdfQ1PY1YlJAxY0y",
  access_token_secret: "OLjdRGHMO74tmb4gHUtNHB6zt7p53NL6k0JWaSBTCpYSY"
});

client.get('search/tweets', {q: 'data + scientist OR analyst OR analist OR engineer + lang:nl'}, function(error, tweets, response) {
   console.log(tweets);
});
