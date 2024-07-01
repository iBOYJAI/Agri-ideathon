const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://agriideathongasc:9j5NP3vffr1r1L2z@cluster0.7gxro6w.mongodb.net/Registers_2k24?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => console.error('Error connecting to MongoDB:', err));
