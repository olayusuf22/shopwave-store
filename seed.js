// Usage: node seed.js
(async () => {

 const productData = [
    {
        image : '/images/emilio pucci gown.jpg',
        name : ' Red Emilio Pucci Gown',
        price: 300,
        currency: 'USD',
        stock: 10,
        tags: ['Ladies', 'gown'],
        category: 'Ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/dress-gorgeous-floral-evening-gown.jpg',
        name : ' Elegant Long Evening Gown',
        tags: ['Ladies', 'Prom gown'],
        price: 400,
        stock: 5,
        currency: 'USD',
        category: 'Ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/Black Tailored Fit Havana Tuxedo.jpg',
        name : ' Men Black Tailored Fit Havana Tuxedo',
        tags: ['Men', 'Tuxedo'],
        stock: 20,
        price: 500,
        currency: 'USD',
        category: 'Men',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
       
        image : '/images/Mens-Cheap-Slim-Fit-Suit-Charcoal.jpg',
        name : ' Men Charcoal Slim Fit Suit',
        tags: ['Men', 'Suit'],
        price: 200,
        stock: 30,
        currency: 'USD',
        category: 'Men',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/purle gala gown.jpg',
        name : ' Purple Elegant Long Evening Gown',
        tags: ['Ladies', 'Gala gown'],
        price: 800,
        stock: 5,
        currency: 'USD',
        category: 'Ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/Lace-Embroidery-Sweetheart-Satin-Prom-Dresses-Front-Short-Long-Back-.jpg',
        name : ' Satin Green Prom Dress',
        tags: ['Ladies', 'Prom gown'],
        price: 700,
        stock: 10,
        currency: 'USD',
        category: 'Ladies',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/womens-clothing.png',
        name : ' Green Elegant Long Evening Gown',
        price: 100,
        stock: 10,
        currency: 'USD',
        category: 'Ladies',
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
        image : '/images/Mens 2-Piece Shawl Lapel Jacuard Dark Purple Tuxedo.jpg',
        name : ' Mens 2-Piece Shawl Lapel Jacuard Dark Purple Tuxedo.jpg',
        tags: ['Men', 'Tuxedo'],
        price: 200,
        stock: 10,
        currency: 'USD',
        category: 'Men',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla eos fuga maiores dolore, cum facere aperiam doloremque praesentium totam expedita quibusdam excepturi necessitatibus autem perspiciatis sunt eligendi minima quam.',
    },
    {
        image : '/images/Vera Wang BrideROYALBLUE.jpg',
        name : ' Royal Blue Evening Gown',
        tags: ['Ladies', 'Gala Night Gown'],
        price: 150,
        stock: 10,
        currency: 'USD',
        category: 'Ladies',
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