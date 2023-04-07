# Subdomain API

This is an API that uses SecurityTrails api to get the subdomains of a domain. It has the following routes:

- Type: POST, Route: /auth: Route for login that receives user name and password and authenticates;
- Type: POST, Route: /logout: Route to disconnect user from the application;
- Type: GET, Route: /domains: Route to get all domains registered in the database;
- Type: GET, Route: /domains/:id: Route to get only the domain with the id corresponding to the one passed in the request;
- Type: GET, Route: /subdomains/:id: Route to get the subdomains of a domain, which are filtered from the id passed in the request;
- Type: POST, Route: /domains: Route to insert a new domain in the database;
- Type: DELETE, Route: /domains/:id: Route to remove a domain from the database.

## Dependencies

The following dependencies are required for this API to work:

- axios
- cors
- crypto
- dotenv
- express
- mysql

## Installation

To install and run this API locally, you must follow these steps:

1. Clone this repository to your local machine.
2. Install the dependencies by running the command `npm install`.
3. Create a file named `.env` in the root directory and define the following environment variables:
   - `DB_HOST`: the host of your MySQL database;
   - `DB_PORT`: the port of your MySQL database;
   - `DB_USER`: the user of your MySQL database;
   - `DB_PASSWORD`: the password of your MySQL database;
   - `DB_NAME`: the name of your MySQL database.
   - `SECURITYTRAILS_APIKEY`: your SecurityTrails api key
4. Start the API by running the command `npm start`.

## License

This API is licensed under the ISC License.
