# Movies App

It is a simple app that allows users to view a list of movies and their details like trailer and backdrops. Users can also add new reviews to the movies.

## Components
### Frontend
The frontend is built using React.

### Backend
The backend is built using Java Spring with Maven. It uses MongoDB as the database. It contains demo data from [The Movie Database](https://www.themoviedb.org/)

## How to run
### Frontend
1. Go to the frontend directory
2. Run `npm install`
3. Run `npm start`

### Backend
1. Go to the backend directory
2. Open in IntelliJ
3. Go to MongoDB and create a database called `movies`
4. Create a collection called `movies`
5. Create a collection called `reviews`
6. Create .env file where .env.example is located
7. Add the following to the .env file
    ```
    MONGO_DATABASE=
    MONGO_USER=
    MONGO_PASSWORD=
    MONGO_CLUSTER=
    ```
8. Replace the values with your MongoDB credentials
9. Download the data.json in data folder.
10. Import the data.json to the `movies` collection
11. Run the main method in the `MoviesApplication` class
