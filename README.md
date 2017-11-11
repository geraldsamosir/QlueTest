Qlue  Testing run in heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

rest ini di bangun dengan

expresJS dan knexjs

untuk migrate database

``` 
    knex migrate:latest
```

di run di port 5000

untuk mengganti  port tinggal mengganti 

```javascript
app.set('port', (process.env.PORT || 5000))
```

pada file server.js



sesuai dengan port yang anda inginkan 
