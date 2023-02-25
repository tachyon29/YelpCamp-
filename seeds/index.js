const mongoose=require('mongoose');
const cities=require('./cities')
const {places,descriptors}=require('./seedHelpers')
const Campground=require('../models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection error:"));
db.once("open",()=>{
    console.log("Database Connected")
})

const sample=array=>array[Math.floor(Math.random()*array.length)];

const seedDB=async()=>{
    await Campground.deleteMany({});
    for(let i=0;i<300;i++){
const random1000=Math.floor(Math.random()*1000)
const price=Math.floor(Math.random()*20)+10
const camp=new Campground({
    author:'63f63efcfc1c680236b30cfb',
    location:`${cities[random1000].city},${cities[random1000].state}`,
    title:`${sample(descriptors)} ${sample(places)}`,
    
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam placeat amet molestias dolorem veritatis nostrum quia unde nobis beatae deserunt deleniti officia voluptates corporis sequi magnam doloremque error! Error.',
    price,
    geometry:{
      type:"Point",
      coordinates:[
        cities[random1000].longitude,
      cities[random1000].latitude,
    ]
    },
    images:[
        {
          url: 'https://res.cloudinary.com/dvzqlzc0u/image/upload/v1677173892/YelpCamp/mntno49gfok6h6loox76.jpg',
          filename: 'YelpCamp/mntno49gfok6h6loox76'
          
        },
        {
          url: 'https://res.cloudinary.com/dvzqlzc0u/image/upload/v1677309664/YelpCamp/josh-hild-8f_VQ3EFbTg-unsplash_e5c5hb.jpg',
          filename: 'YelpCamp/josh-hild-8f_VQ3EFbTg-unsplash_e5c5hb'
        }
      ]
      
})
await camp.save();
    }
}

seedDB().then(()=>{
    mongoose.connection.close();
});