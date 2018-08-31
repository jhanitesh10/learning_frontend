let Promise = require('bluebird');

let query = require('../database/query.js'),
    qr_inserUserDetail = query.qr_inserUserDetail,
    qr_showUserDetail = query.qr_showUserDetail,
    qr_updateUser = query.qr_updateUser,
    qr_getSingleUser = query.qr_getSingleUser;



let addUserDetail = (req, res) => {
    let data = req.body;

    let userDetailObj = {

        email : data.email,
        password : data.password,
        status : 1

    }
    console.log(userDetailObj);
        
    return qr_inserUserDetail({ userDetail: userDetailObj }).then((data) => {
        console.log(data);
    }).catch((e) => {
        console.log("error inside handleUser function", e);
    });
}

let showUserDetail = (req, res) => {
    
    return qr_showUserDetail({}).then((data) => {
        console.log(data);  
        res.json(data);      
    }).catch( () => {
        console.log("error inside handle user @ showUserDetail function", e);        
    });
}

let getSingleUser = (req, res) => {
    let id = req.query.id,
        email = req.query.email;
    console.log(id, email);
    return 0;
    
    return getSingleUser({id: id, emai: email}).then((data) => {
        res.json(data);
    });
}

let updateUser = (req, res) => {
    let data = req.body;
    console.log(data);
    return 0;
    return qr_updateUser({id : 1}).then((data) => {
        res.json(data);
    });
}
module.exports = {
    addUserDetail : addUserDetail,
    showUserDetail : showUserDetail,
    getSingleUser : getSingleUser,
    updateUser : updateUser
}