// Usage: node seed.js
(async () => {

 const productData = [
    {
        image : '/images/ml2.jpg',
        name : ' Elegant Long Evening Gown',
        price: 10,
        currency: 'USD',
        stock: 10,
        tags: ['ladies', 'evening gown'],
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/topm1.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 120,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ld1.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        stock: 10,
        price: 150,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
       
        image : '/images/ml1.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 10,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/tr1.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 13,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ld3.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 160,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/gown2.jpg',
        name : ' Elegant Long Evening Gown',
        price: 10,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/topm2.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 100,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ml3.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 60,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/topm3.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 70,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/gown3.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 90,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/tr3.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 40,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/gown4.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 30,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/tr2.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 140,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ld4.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 150,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ld5.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 120,
        stock: 10,
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/ld6.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['ladies', 'evening gown'],
        price: 90,
        stock: 10,   
        currency: 'USD',
        category: 'ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
]

const mongoose = require("mongoose");

    require("dotenv").config();
    mongoose.connect(process.env.MONGODB_URI);

    mongoose.connection.on("connected", () => {
      console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
    });

    const Product = require('./backend/models/product'); // Ensure you have a corresponding Mongoose model
    await Product.deleteMany({}); // Clears existing products
    const products = await Product.create(productData); // Insert new products
    console.log(products);
    process.exit();
(async () => {
  })().catch(err => console.error(err));
})();