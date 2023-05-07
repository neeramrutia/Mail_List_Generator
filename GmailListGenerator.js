const emailValidator = require('email-validator');
const crypto = require('crypto');
const readline = require('readline-sync');
const emailExistence = require('email-existence');
const emoji = require("node-emoji");
const fs = require('fs');

const false_ = emoji.get("x");
const true_ = emoji.get("heavy_check_mark");

let emailProviders = "gmail"
let tlds = "com"

console.log("Enter the length of the email address:");
let emailLength = parseInt(readline.question());

console.log("Enter the number of emails you want to generate:");
let numberOfEmails = parseInt(readline.question());

const generateRandomString = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyz0123456789.-';
    let email = "";
    for (let i = 0; i < length; i++) {
        email += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return email;
}

const generateRandomEmail = async () => {
    const possibleLetters = 'abcdefghijklmnopqrstuvwxyz';
    let firstLetter = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
    let email = firstLetter + generateRandomString(emailLength-1) + '@' + emailProviders.trim() + '.' + tlds.trim();
    if(emailValidator.validate(email)){
        const isEmailReal = await checkEmailReal(email);
        if(isEmailReal){
            return email;
        }else{
            console.log(`[${false_}] - ${email}`);
            return generateRandomEmail();
        }
    }else{
        console.log(`[${false_}] - ${email}`);
        return generateRandomEmail();
    }
}



const checkEmailReal = (email) => {
    return new Promise((resolve, reject) => {
        emailExistence.check(email, (error, response) => {
            if (error) {
                resolve(false);
            }else{
                resolve(response);
            }
        });
    });
}

for (let i = 0; i < numberOfEmails; i++) {
    generateRandomEmail().then(email => {
        console.log(`[${true_}] - ${email}`);
        fs.appendFile('true_emails.txt', email + '\n', (err) => {
            if(err) {
                console.log(err);
            }
        });
    });
}
