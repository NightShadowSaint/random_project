const fetch = require('node-fetch');

module.exports = (app) => {

  let cityID;

  app.post('/select-city', (req, res) => {
    cityID = req.body.cityID;

    if (!cityID) {
      res.redirect('/error');
    } else {
      res.redirect('/current-weather');
    }
  });

  app.get('/search-city-forecast', (req, res) => {
    //build api URL with user zip
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=';
    const apiId = '&appid=27627e7ed949cc4d1a540d9206e76be1';

    const cityChoice = (url1, url2, id) => {

      let newUrl = url1 + id + url2;
      return newUrl;
    };

    const apiUrl = cityChoice(baseUrl, apiId, cityID);


    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        res.redirect('/error');
      });

  })

};
