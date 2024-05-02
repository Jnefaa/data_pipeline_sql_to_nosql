let cassandra = require('cassandra-driver');
const keyspace="news";
let contactPoints = ['localhost'];
let client = new cassandra.Client({
 contactPoints:contactPoints,
 keyspace:keyspace,localDataCenter:
 'datacenter1'
});
async function cassandra_interaction(){
  
    const sql_insert = "INSERT INTO news (id, content, category, published) VALUES (uuid (), 'SQL TO CASSANDRA SQL TO NOSQL  Nefaa Jmal .', 'technology', dateof(now()));";
    const sql_select = "SELECT * FROM NEWS";
    await client.execute(sql_insert);
    let query = sql_select;
    let parameters= [];
    client.execute(query,parameters, function(error, result){
        if(error!=undefined){
            console.log('Error:',error);
        }else{
            console.table(result.rows);
        }
    });
} 
/*
async function deleteRowsWithWord(word) {
    const result = await client.execute("SELECT * FROM news");

    // Iterate over each row
    for (const row of result.rows) {
        // Check if the content contains the word
        if (row.content.includes(word)) {
            // If it does, delete the row
            await client.execute("DELETE FROM news WHERE id = ?", [row.id]);
            console.log(`Deleted row with id ${row.id}`);
        }
    }
}

// Call the function to delete rows containing the specified word
deleteRowsWithWord("It is very"); 
*/ 

cassandra_interaction();