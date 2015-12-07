(function(){
var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
  this.product = gem;
});

app.controller('ReviewController', function(){
  this.review = {};
    this.addReview = function(product) {
    product.review.push(this.review);
    this.review = {};
  };
});

var gem = [
{
  name: 'Dodecahedron',
  price: 2.95,
  description: 'This is a Dodecahedron gem',
  canPurchase: true,
  soldOut: false,
  image: 'gem1.jpg',
  imgfull: 'dodecahedron.html',
  spec: 'It has a dodecahedron shape.',
  review: [
    {
      stars: '5 stars',
      body:'I like it. five stars for that!',
      author:'nwoeginew@gmail.com',
    },
      {
        stars: '1 star',
        body:'nope,nope',
        author:'woeignerogin@yahoo.com',
      }
    ]
  },{
  name: 'Pentagonal Gem',
  price: 5.95,
  description: 'This is a Pentagonal gem',
  canPurchase: true,
  soldOut: false,
  image: 'gem2.jpg',
  imgfull: 'pentagonal.html',
  spec: 'It has a pentagonal shape',
  review: [
    {
      stars: '5 stars',
      body:'Woohoo!',
      author:'nwoeginew@gmail.com',
    },
    {
      stars: '1 star',
      body:'no,no,no.',
      author:'woeignerogin@yahoo.com',
    }
  ]
},{
  name: 'Lenovo YOGA 300',
  price: 150.99,
  description: 'This laptop can withstand heavy memory files and is good for gaming. IT ALSO BENDS 360 degrees and has a multi touch feature!',
  canPurchase: true,
  soldOut: false,
  image: 'laptop.jpg',
  imgfull: 'laptop.html',
  spec: '2345234 GB memory, Dolby audio, always-on USB, Multitouch, Intel inside PENTIUM.',
  review: [
    {
      stars: '5 stars',
      body:'nice!',
      author:'nwoeginew@gmail.com',
    },
    {
      stars: '4 star',
      body:'meh.',
      author:'woeignerogin@yahoo.com',
    }
  ]
},{
  name: 'DIY Robotic Hand',
  price: 299.99,
  description: 'The hand itself comes from an open-source, 3D-printable download. It is part of a project called InMoov: http://inmoov.blogspot.com (http://www.inmoov.fr).',
  canPurchase: true,
  soldOut: false,
  image: 'handthumb.jpg',
  imgfull: 'hand.html',
  spec: 'The basic components of the hand and glove are the hand itself, the servos, the Arduino, the glove, and the flex sensors. The glove is mounted with flex sensors: variable resistors that change their resistance value when bent.',
  review: [
    {
      stars: '5 stars',
      body:'awesome!',
      author:'wejfnwef@gmail.com',
    },
    {
      stars: '4 star',
      body:'it is nice.',
      author:'jnoin@yahoo.com',
    }
  ]
}]
})();
