# My Public API

## Description
This is a simple public API that provides information about the user, Debb, including my email, current date and time, and GitHub profile URL. The API is built using Express.js and supports CORS for cross-origin requests.

## Setup Instructions

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)
  

### Running the Project Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Debb07/Task0.git
   cd Task0

   
2. ### Install Dependencies
npm install express cors

3. ### Run the server
node server.js

4. ### Access the API
   Open your browser or API client (like Postman) and go to http://localhost:3000/info to see the user information.

# API Documentation

## Base URL
http://localhost:3000
### Note: Replace localhost:3000 with deployed URL on Vercel (https://task0-steel.vercel.app/info) when accessing the live API.

## Endpoints
1. Get User Info
### Endpoint URL: /info
### Method: GET
### Request Format: No parameters required.
### Response Format:
  #### Status Code: 200 OK
  #### Response Body:
   {
      "email": "latonadeborah@gmail.com",
      "currentDatetime": "2023-01-30T22:28:00.000Z",
      "githubUrl": "https://github.com/Debb07/Task0"
   }

## Example Usage
# Fetching User Info
You can use an API client like Postman or curl to make a request to the /info endpoint.

## Fetching User Info with Postman
1. Open Postman.
2. Set the request type to GET.
3. Enter the URL: http://localhost:3000/info.
4. Click on the Send button.

 #### Expected Response:
   {
      "email": "latonadeborah@gmail.com",
      "currentDatetime": "2023-01-30T22:28:00.000Z",
      "githubUrl": "https://github.com/Debb07/Task0"
   }

## Backlink
Backlink related to my chosen programming language/stack: https://hng.tech/hire/nodejs-developers
