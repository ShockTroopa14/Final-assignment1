import express from 'express'
const router = express.Router();
export default router;
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('../views/homePage.ejs', { title: 'Home Page' });
});
router.get('/AboutMe', function(req, res, next) {
    res.render('../views/AboutMe.ejs', { title: 'Home Page' });
});
router.get('/ContactPage', function(req, res, next) {
    res.render('../views/ContactPage.ejs', { title: 'Home Page' });
});
router.get('/ProjectsPage', function(req, res, next) {
    res.render('../views/ProjectsPage.ejs', { title: 'Home Page' });
});
router.get('/ServicePage', function(req, res, next) {
    res.render('../views/ServicesPage.ejs', { title: 'Home Page' });
});

