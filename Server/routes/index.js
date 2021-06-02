"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
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
//# sourceMappingURL=index.js.map