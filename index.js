require('semantic-ui/dist/semantic.css');
var $ = require('jquery');
var _ = require('lodash');

var _members = [
  {id: 1, displayName: 'Ryan Florence', twitterHandle: 'ryanflorence', createdAt: '01 Dec 2015', img: 'https://pbs.twimg.com/profile_images/378800000743351448/1baa39b31470c1f03d333fbca13ac47e_400x400.jpeg'},
  {id: 2, displayName: 'Dan Abramov', twitterHandle: 'dan_abramov', createdAt: '02 Dec 2015', img: 'https://pbs.twimg.com/profile_images/553711083064541184/9VsY9i09_400x400.jpeg'},
  {id: 3, displayName: 'Christopher Chedeau', twitterHandle: 'Vjeux', createdAt: '05 Dec 2015', img: 'https://pbs.twimg.com/profile_images/639314683/vjeux-twitter_400x400.PNG'},
  {id: 4, displayName: 'Pete Hunt', twitterHandle: 'floydophone', createdAt: '10 Dec 2015', img: 'https://pbs.twimg.com/profile_images/378800000217182692/abd0d6b4263078e79e58f861ace400a1_400x400.jpeg'},
  {id: 5, displayName: 'Sebastian McKenzie', twitterHandle: 'sebmck', createdAt: '23 Desc 2015', img: 'https://pbs.twimg.com/profile_images/617366285601636352/tWP8r55T_400x400.jpg'}
];

var MembersTemplate = _.template($('#members-list-template').html());
var Members = MembersTemplate({members: _members})

$('#content').html(Members);
