"use strict";
/*
FILE NAME: /routes/index.js
THIS WAS CODED BY: ALEX GREEN 
last Eddited: 6/4/2021
BOOTSTRAP was used in this project.

*/
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
//importing everything 
let LoginValue = false;
let currentUser = "";
let id = "";
const express = require('express');

const mongoose = require('mongoose');

const { check, validaitonResult, validationResult } = require('express-validator');

mongoose.connect('mongodb://localhost/assignment2', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const User = require('../Models/user');
const Contact = require('../Models/contact');
const app = express();
app.use(express.json());
//app.post goes here 
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;

//these are the routes for each link on the website.
router.get('/', function(req, res, next) {

    res.render('../Views/Content/homePage.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get("/edit/:id", async(req, res) => {
    id = req.params.id;
    let editContact = await Contact.findById(id)

    let currentEditContact = editContact;
    console.log('current edit contact', currentEditContact);
    res.render('../Views/Content/editContact.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser, editContact: currentEditContact })
})

router.get("/delete/:id", async(req, res) => {

    let id = req.params.id;
    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/ContactList')
        }
    })
})

router.post("/edit/:id", async(req, res) => {
    console.log("AWOOO")
    let id = req.params.id;
    let { name, email, cellphone, relation } = req.body;
    console.log(name, email, cellphone, relation);
    let UpdatedContact = new Contact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "cellphone": req.body.cellphone,
        "relation": req.body.relation
    });
    Contact.updateOne({ _id: id }, UpdatedContact, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Updated');
        res.redirect('/ContactList')
    })


})

router.get('/AboutMe', function(req, res, next) {
    res.render('../Views/Content/AboutMe.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/ContactPage', function(req, res, next) {
    res.render('../Views/Content/ContactPage.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/ProjectsPage', function(req, res, next) {
    res.render('../Views/Content/ProjectsPage.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/ServicePage', function(req, res, next) {
    res.render('../Views/Content/ServicesPage.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/BuissnessContactView', function(req, res, next) {
    res.render('../Views/Content/BuissnessContact.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/register', function(req, res, next) {
    res.render('../Views/Content/register.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
});

router.get('/addContact', function(req, res) {
    res.render('../Views/Content/addContact.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser });
})

router.post('/addContact', async(req, res, next) => {
    let { name, email, cellphone, relation } = req.body;

    let newContact = await Contact.create({ name, email, cellphone, relation });
    console.log('Successful  Contact created', newContact);

    res.redirect('/ContactList')
});

router.get('/login', function(req, res, next) {
    res.render('../Views/Content/logIn.ejs', { error: false });
});
router.get('/ContactList', async(req, res, next) => {
    const errors = validationResult(req);
    const ContactList = await Contact.find({}, null, { sort: { name: 1 } }, function(err, users) {
        if (err) {
            console.log(err);
        }
        console.log(users);
    })
    console.log('Contact-list', ContactList);

    // let name = "Another";
    // let email = "alex20green01@gmail.com";
    // let cellphone = "9059734148";
    // let relation = "co worker";

    // let newContact = await Contact.create({ name, email, cellphone, relation });
    //console.log('Successful  Contact created', newContact);
    res.render('../Views/Content/ContactList.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser, Contacts: ContactList });
});

// router.post('/ContactList', async(req, res) => {
//     const errors = validationResult(req);


//     res.render('../Views/Content/ContactList.ejs', { title: 'Home Page', Login: LoginValue, username: currentUser, Contacts: ContactList });
// })
router.get('/logout', async(req, res) => {
    LoginValue = false;
    res.redirect('/');
})

router.post('/login', async(req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password }).lean()

    if (!user) {
        res.render('../Views/Content/logIn.ejs', { error: true })
        return res.json({ status: 'error', error: "we cant find those details in our server" })
    } else {
        currentUser = username
        LoginValue = true
        console.log('Successful  log in', username, password);
        res.render('../Views/Content/homePage.ejs', { username: username, Login: LoginValue });
    }
});

router.post('/register', [
    //validation username
    check('username', 'The username must be more then 3 character long')
    .exists()
    //checks length
    .isLength({ min: 3 }),

    //validation email
    check('email', 'this email is not valid')
    .isEmail()
    //checks if its an actual email with built in functions
    .normalizeEmail(),

    //validation password
    check('password', 'this password is to short. Must be more then 5 Charactors.')
    .exists()
    //checks the length of the password
    .isLength({ min: 5 })

    //function that handles the errors and correct data if entered.

], async(req, res) => {
    const errors = validationResult(req);
    // const username = req.body.username; 
    // const email = req.body.email; 
    // const password = req.body.password; 

    const { username, email, password } = req.body;
    if (!errors.isEmpty()) {

        // return res.status(422).jsonp(errors.array());
        const alertErrors = errors.array();
        res.render('../Views/Content/register.ejs', {
            alertErrors

        })
    } else {


        // res.render('../Views/Content/homePage.ejs', {})
        try {
            console.log(username, email, password)

            let user = await User.create({ username, email, password });
            console.log("User Created", user);


            // let responce = res.json(user); 
            // console.log(responce) 
            // const responce = await User.create({ 
            //     username, 
            //     email, 
            //     password 
            // })
        } catch (error) {
            //here will go the code tosend the error to the screen. 
            console.log("There is an error", error)
            res.render('../Views/Content/register.ejs', {
                error
            })
            console.log(error);

        }

    }
});

//# sourceMappingURL=index.js.map