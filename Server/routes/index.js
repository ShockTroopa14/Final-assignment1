"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require('express');

const bodyParser = require('body-parser');

const { check, validaitonResult, validationResult } = require('express-validator');

const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function(req, res, next) {
    res.render('../views/Content/homePage.ejs', { title: 'Home Page' });
});
router.get('/AboutMe', function(req, res, next) {
    res.render('../views/Content/AboutMe.ejs', { title: 'Home Page' });
});
router.get('/ContactPage', function(req, res, next) {
    res.render('../views/Content/ContactPage.ejs', { title: 'Home Page' });
});
router.get('/ProjectsPage', function(req, res, next) {
    res.render('../views/Content/ProjectsPage.ejs', { title: 'Home Page' });
});
router.get('/ServicePage', function(req, res, next) {
    res.render('../views/Content/ServicesPage.ejs', { title: 'Home Page' });
});
router.get('/register', function(req, res, next) {
    res.render('../views/Content/register.ejs', { title: 'Home Page' });
});
router.get('/logIn', function(req, res, next) {
    res.render('../views/Content/logIn.ejs');
});
router.post('/register', urlencodedParser, [
    //validation
    check('username', 'The username must be more then 3 character long')
    .exists()
    .isLength({ min: 3 }),

    check('email', 'this email is not valid')
    .isEmail()
    .normalizeEmail(),

    check('password', 'this password is to short. Must be more then 5 Charactors.')
    .exists()
    .isLength({ min: 5 })


], function(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

        // return res.status(422).jsonp(errors.array());
        const alertErrors = errors.array();
        res.render('../views/Content/register.ejs', {
            alertErrors

        })
    } else {

        res.render('../views/Content/homePage.ejs', {})
        console.log(req.body)
    }
});

router.get('/logIn', function(req, res, next) {
    res.render('../views/Content/ServicesPage.ejs', { title: 'Home Page' });
});
//# sourceMappingURL=index.js.map