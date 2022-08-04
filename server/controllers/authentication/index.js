
// const userModel = require('../../models/users');

const cookieParser = require("cookie-parser");
const { signedCookie } = require("cookie-parser");


const authntication = (req, res) => {
    
console.log(req.headers.cookie);
        const cook = req.headers.cookie;
        console.log(`my cookie is ${req.headers.cookie}`);
        try {
            if(cook){
            res.status(200).send(true);
            }
            else{
                res.status(200).send(false);
            }
        }
        catch {
            ((err) => {
                console.log(err);
                res.status(500).send('cookie not found');
            })
        }

    // res.cookie(tokenname, accessToken, {
    //     maxAge: 1000 * 60 * 60,
    //     httpOnly: false,
    // })

}


// const setToken = (req, res) => {
//     console.log(`my cookie is ${req.headers.cookie}`);
//     try {
//         // res.clearCookie('password');

//         //  res.cookie('password','1234',{
//         //     maxAge: 1000 *60 *5,
//         //     httpOnly: false,
//         // })
//         res.status(200).send('cookie is sent');
//     }
//     catch {
//         ((err) => console.log(err))
//         res.status(500).send('some problem to set cookie');

//     }
// }

// const getToken = (req, res) => {
//     const cook = req.headers.cookie;
//     console.log(`my cookie is ${req.headers.cookie}`);
//     try {
//         res.status(200).send(cook);
//     }
//     catch {
//         ((err) => {
//             console.log(err);
//             res.status(500).send('cookie not found');

//         })
//     }
// }


module.exports = {
    authntication,
    // setToken,
    // getToken,
}








