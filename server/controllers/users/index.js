


const userModel = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rounds = 4;

const register = async (req, res) => {

    try {
        const { name, email, password, confirmPassword } = req.body;
        console.log(name);
        console.log(email);
        console.log(password);

        if (!name || !email || !password || !confirmPassword) {
            res.status(400).send('please fill all the field');
        }

        if (password != confirmPassword) {
            res.status(400).send('confirm password wrong');
        }                                                  //validation
        const hashPass = await bcrypt.hash(password,rounds);
        await userModel.create({ name, email, password:hashPass});   
        res.status(200).send({ message: 'user created succefully' });
    }
    catch {
        (err) => {
            console.log(`erorr ${err}`);
            res.status(500).send('somthing wrong');
        }
    }
}

const logIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log('entering email > ' + email);
        console.log('entering password > ' + password);
        if (!email || !password) {
            res.status(400).send('please fill all the field');
        }

        const user = await userModel.findOne({
            where:{
                email: email,
                             
            }
        });
        if (!user) {
            
            res.status(500).send('email or password is not taken 1');
        }
        const isComparePasword = await bcrypt.compare(password,user.password);   //validation

        if(!isComparePasword){
            res.status(500).send('email or password is not taken 2(no compare)');
        }
        console.log(isComparePasword);

        const tokenname = 'token'
        const accessToken = jwt.sign({ name: user.name }, 'myKey', {
            algorithm: 'HS256',
            expiresIn: '1h'
        });
        console.log(`set cookie  ${accessToken}`)
console.log('bedore');

 
        res.cookie(tokenname,accessToken, {
            maxAge:1000*60*1,
            httpOnly: false,
        })
        res.status(200).send(`log in success`);

    }
    catch {
        return ((err) => {

            res.status(500).send(err);
            console.log('catch error')

        })
    }
}
module.exports = {
    register,
    logIn,
}
