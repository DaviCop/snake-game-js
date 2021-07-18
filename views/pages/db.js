

        var mysql = require('mysql');
        var con = mysql.createConnection({
        host: "sql5.freemysqlhosting.net",
        user: "sql5426114",
        password: "iVaRRtsPgv",
        database: "sql5426114"
        });

        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT 'nome' FROM `Rank` WHERE `id`= 1", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });

 