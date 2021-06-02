import express from 'express'
const router = express.Router();
export default router;
/* GET home page. */
  
router.get('/', function(req, res, next) {
    res.render('/Content/homePage.ejs', { title: 'Home Page' });
});

router.get('/AboutMe', function(req, res, next) {
    res.render('/Content/AboutMe.ejs', { title: 'Home Page' });
});

router.get('/ContactPage', function(req, res, next) {
    res.render('/Content/ContactPage.ejs', { title: 'Home Page' });
});

router.get('/ProjectsPage', function(req, res, next) {
    res.render('/Content/ProjectsPage.ejs', { title: 'Home Page' });
});

router.get('/ServicePage', function(req, res, next) {
    res.render('/Content/ServicesPage.ejs', { title: 'Home Page' });
});

