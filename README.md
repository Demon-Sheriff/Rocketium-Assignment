# Rocketium Assignment

## Overview

This project is a Node.js application that fetches and serves dummy JSON data. The application includes functionalities for filtering and sorting the data. The project is built using Express.js and includes Swagger documentation for the API endpoints.

## Project Structure

```
Rocketium-Assignment/
│
├── data/
│ └── Data.json
├── node_modules/
├── src/
│ ├── controllers/
│ │ └── dataController.js
│ ├── routes/
│ │ └── dataRoutes.js
│ ├── scripts/
│ │ └── fetchData.js
│ └── app.js
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Demon-Sheriff/Rocketium-Assignment.git
   cd Rocketium-Assignment
   ```
2. **Install dependencies**
   ```bash
    npm install
   ```
3. **Run the initialization script to fetch the dummy data:**
   ```bash
    npm run init-data
   ```

4. **Start the server:**
   ```bash
    npm run start
   ```

---

# API Endpoints
## Base URL
The base URL for all endpoints is `http://localhost:3000/api`

## Endpoints

1. **Get Complete Data**

    - URL: `http://localhost:3000/api/data`
    - Method: GET
    - ***Description***: Retrieve all the data from the server.

2. **Get Data by ID**

    - URL: `http://localhost:3000/api/data/:id`
    - Example Usage : `http://localhost:3000/api/data/2`
    - Method: GET
    - ***Description***: Retrieve all the data from the server for a specific id which exists.

3. **Get Data by Language**

    - URL: `http://localhost:3000/api/data?language=INSERT_LANGUAGE`
    - Example Usage : `http://localhost:3000/api/data?language=Sindhi`
    - Method: GET
    - ***Description***: Retrieve all the data from the server for a specific language which exists.

4. **Get Sorted Data (Ascending or Descending by Name)**

    - URL: `http://localhost:3000/api/data?order=SORT_TYPE`
    - Example Usage for desceding order: `http://localhost:3000/api/data?order=desc`
    - Example Usage for ascending order: `http://localhost:3000/api/data?order`
    - Method: GET
    - ***Description***: Retrieve all data sorted by name both ascending or descending.

---

# Swagger API Documentation

The project includes Swagger documentation for the API endpoints. You can access the Swagger UI at:
```bash
    http://localhost:3000/api-docs
```

# Error Handling

The API includes basic error handling. If the requested data is not available or the script to fetch the data has not been run, appropriate error messages will be returned.

# Notes

- Ensure that you run the initialization script `fetchData.js` before starting the server to fetch and store the dummy JSON data.
- Use query parameters for filtering and sorting the data.