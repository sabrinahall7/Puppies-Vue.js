new Vue({
  el: '#app',
  data: {
    puppies: [
      {
        name: 'Lily',
        gender: 'female',
        age: 0.7,
        breed: 'Italian Greyhound',
        weightKG: 7,
        image: 'http://pedigreedoghealth.org/wp-content/uploads/2010/10/italiangreyhound.jpg'
      },
      {
        name: 'Barney',
        gender: 'male',
        age: 0.9,
        breed: 'Beagle',
        weightKG: 8.5,
        image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001000/Beagle-On-White-01.jpg'
      },
      {
        name: 'NuoMI',
        gender: 'female',
        age: 0.4,
        breed: 'Pomeranian',
        weightKG: 4,
        image: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225627/Pomeranian-On-White-01.jpg'
      }
    ]
  }
})
