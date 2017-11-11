const express = require('express')
const app = express()

const knex =  require('knex')({
    client: 'mysql',
    connection: {
      host     : 'sql36.main-hosting.eu',
      user     : 'u709419413_qlue',
      password : 'gerald_samosir',
      database : 'u709419413_qlue'
    }
});

const ModelUsers = new ( 
    class _ModelUsers  {

      getall(req,res){
        return knex("user")
      }

    }
)


const ControllerUser = new ( 
  class _ControllerUser {

      getall(req,res){
         ModelUsers.getall()
         .then((result)=>{
            res.status(200)
            res.json({
              respond :"success",
              result : result
            })
         })
        // if(User !=""){
        //   res.status(200)
        //   res.json({
        //     respond :"success",
        //     result : User
        //   })
        // }
    }

  }
)

const test = {
    testfing : function(req,res){
        res.json({messsage: "ok" })
    }
}


app.set('port', (process.env.PORT || 5000))


app.get('/', function(request, response) {
  response.send('Welcome to Qlue Test by : Gerald halomoan Samosir')
})


app.get("/listUser", test.testfing)

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
