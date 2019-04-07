const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/autocompletegmaps'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/autocompletegmaps/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);