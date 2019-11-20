const dbHelper = require("./db_helper");

//deal with the promise
findUserById(1234)
    .then(user => {
        console.info(user);
    })
    .catch(error => {
        console.error(error);
    });

/**
 *
 * @param userId
 * @returns a Promise with the user row for the given id
 * @throws error if there's a connection issue or if the user was not found by the id
 */
async function findUserById(userId) {
    const query = "SELECT * FROM users WHERE id = $1 LIMIT 1";
    const bindings = [userId];
    const result = await dbHelper.execute.query(query, bindings);
    if (result.rows.length > 0) {
        return result.rows[0];
    } else {
        throw Error("User not found by id " + userId);
    }
}
