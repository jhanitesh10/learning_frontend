const configuration = require('./configuration'),
    getConnection = configuration.getConnection,
    getQuery = configuration.getQuery;


let qr_inserUserDetail = ({ userDetail }) => {
    let sqlQuery = `INSERT INTO user_detail
                    (email, password, status) 
                    VALUES 
                    (?, ?, ?)`;

    let paramr = [userDetail.email, userDetail.password, userDetail.status];
    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}


let qr_showUserDetail = ({ }) => {
    let sqlQuery = `SELECT * from user_detail`;
    let paramr = [];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.length) {
            return row;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}

let qr_updateUser = ({email, id}) => {
    let sqlQuery = `UPDATE user_detail SET email=? WHERE id = ?`;
    let paramr = [email, id];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.affectedRows) {
            return row.affectedRows;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}


let qr_getSingleUser = ({id}) => {
    let sqlQuery = `SELECT * FROM user_detail WHERE id = ?`;
    let paramr = [id];

    return getQuery({ sqlQuery: sqlQuery, paramr: paramr }).then((row) => {

        if (row.affectedRows) {
            return row.affectedRows;
        } else {
            return 0;
        }

    }).catch((err) => {
        console.log("error, while making query for qr_getWhome query function!!!", err);
    });
}

module.exports = {
    qr_inserUserDetail: qr_inserUserDetail,
    qr_showUserDetail: qr_showUserDetail,
    qr_updateUser : qr_updateUser,
    qr_getSingleUser : qr_getSingleUser
};