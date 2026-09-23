// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home - Week 1"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// contact route
app.get('/staff', (req, res) => {
    state={staff : true}
    head={title:"Staff - Week 1"}
    res.render('staff', { state, head});
    console.log('staff')
  });

  app.get('/gallery', (req, res) => {
    state={gallery : true}
    head={title:"Gallery - Week 1"}
    res.render('gallery', { state, head});
    console.log('gallery')
  });

  app.get('/guides', (req, res) => {
    state={guides : true}
    head={title:"Guides - Week 1"}
    res.render('guides', { state, head});
    console.log('guides')
  });

  app.get('/contact_form', (req, res) => {
    state={contact_form : true}
    head={title:"Contact_form - Week 1"}
    res.render('contact_form', { state, head});
    console.log('contact_form')
  });


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});