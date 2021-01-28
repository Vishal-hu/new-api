const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/studs-api", {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Successfully connected');
}).catch((e) => {
    console.log(e);
});