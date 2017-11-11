exports.up = function(knex, Promise) {
    return knex.schema
   .createTable('user', function(table) {
     table.string('firstname');
     table.string('lastname');
   }).then(()=>{
       return knex("user").insert([
           {
               firstname :"budi",
               lastname :"akbar"
           },
           {
               firstname :"andi bakti",
               lastname :"akbar"
           },
           {
               firstname :"dian",
               lastname :"kurni"
           }
       ])
   })
   
};

exports.down = function(knex, Promise) {
     return knex.schema
            .dropTable('user')
};