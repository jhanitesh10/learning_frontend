let express = require('express'),
    bodyPraser = require('body-parser'),
    cors = require('cors'),
    server = express();
let route = require('./routes/handleUser.js'),
    addUserDetail = route.addUserDetail,
    showUserDetail = route.showUserDetail,
    getSingleUser = route.getSingleUser,
    updateUser = route.updateUser;


    server.use(cors());
    server.use(bodyPraser.urlencoded())
    server.use(bodyPraser.json());

    server.get('/show', showUserDetail);
    server.post('/add', addUserDetail);

    server.get('/edit/:id', getSingleUser);
    server.post('/edit/:id', updateUser);

    let PORT = 12345;
    server.listen(PORT, (err) => {
        if(!err){
            console.log("listening to local server at PORT:", PORT);
        }
    });