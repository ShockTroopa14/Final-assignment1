"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('../views/homePage.ejs', { title: 'Home Page' });
});
router.get('/AboutMe', function (req, res, next) {
    res.render('../views/AboutMe.ejs', { title: 'Home Page' });
});
router.get('/ContactPage', function (req, res, next) {
    res.render('../views/ContactPage.ejs', { title: 'Home Page' });
});
router.get('/ProjectsPage', function (req, res, next) {
    res.render('../views/ProjectsPage.ejs', { title: 'Home Page' });
});
router.get('/ServicePage', function (req, res, next) {
    res.render('../views/ServicesPage.ejs', { title: 'Home Page' });
});
//# sourceMappingURL=index.js.map