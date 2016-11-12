const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise,
});

exports.search = (req, res) => {
  googleMapsClient.places({ query: req.query.term }).asPromise()
    .then(places => res.handleSend(null, places.json.results));
    // Does this need no .catch? Throws 500 on missing API key.
    // .catch((err) => {
    //   res.handleSend(err);
    //   console.log('INSIDE CATCH');
    // });
};
