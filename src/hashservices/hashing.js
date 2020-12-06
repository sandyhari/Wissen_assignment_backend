const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.generateHash = (plaintext)=>{
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(plaintext,salt);
    return hash;
};

exports.compareHash = (plainText,passwordHash)=>{
    console.log(plainText,passwordHash);
    return new Promise((resolve,reject)=>{
        bcrypt.compare(plainText,passwordHash,(err,result)=>{
            if(!err){
                resolve(result);
            }
            else{
                reject(err);
            }
        })
    })
}