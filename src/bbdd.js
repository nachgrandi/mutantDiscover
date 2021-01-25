var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '35.198.1.178',
    port            : '3306',
    user            : 'root',
    password        : 'nachomen9595',
    database        : 'mutants'
  });

  exports.insert = (dna, mutant) => {

    var sql = 'insert into mutant  (mutant, cadena1, cadena2,cadena3,cadena4,cadena5,cadena6) values '+
    '('+mutant+',"'+dna[0]+'","'+dna[1]+'","'+dna[2]+'","'+dna[3]+'","'+dna[4]+'","'+dna[5]+'")'
    
    return new Promise(function(resolve, reject){
        pool.getConnection((err,conn)=>{
            if (err) {
                return reject(err);
            }
            conn.query(sql, function (err, rows, fields) {
                // Call reject on error states,
                // call resolve with results
                conn.release()
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        })
    })
  }

  exports.select = () => {
    return new Promise(function(resolve, reject){
        pool.getConnection((err,conn)=>{
            if (err) {
                return reject(err);
            }
            sql = 'SELECT (SELECT COUNT(mutant) FROM mutant WHERE mutant = 1) AS mutantes, (SELECT COUNT(mutant) FROM mutant WHERE mutant = 0) AS humanos'
            conn.query(sql, function (err, rows) {
                // Call reject on error states,
                // call resolve with results
                conn.release()
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        })
    })
  }