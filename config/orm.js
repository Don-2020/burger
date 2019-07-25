var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


var orm = {
    selectAll: function(tableInput, getResults){
        var queryString = "SELECT * From ?";
        connection.query(queryString, [tableInput], function(err, data){
            if(err) throw err;
            getResults(data);
        });
    },

    insertOne: function(table, col, val, cb){
        var queryString= "INSERT INTO "+ table;

        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(val.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, val, function(err, data){
            if(err){
                throw err;
            }
            cb(data);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, data){
            if(err){
                throw err;
            }

            cb(data);
        });
    },

    delete: funct
};

// export the orm object
module.exports = orm;