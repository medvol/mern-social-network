# MERN Social Network

 MERN Social Network is a full-stack web application that allows users to create profiles, post messages, comment on posts, and interact with other users. It is built using the MERN stack, which consists of MongoDB, Express.js, React, and Node.js.

The repository is well-organized, with separate directories for the server-side and client-side code. The server-side code is written in Node.js and Express.js, and includes routes for handling user authentication, profile creation, post creation, and comment creation. The server-side code also includes models for MongoDB, which define the data structures used by the application.

The client-side code is written in React, and includes components for rendering the user interface, such as the profile page, the post feed, and the comment section. The client-side code communicates with the server-side code using API endpoints defined in the server-side routes.

The application features user authentication using JSON Web Tokens (JWT) and password encryption with bcrypt. Users can sign up for an account, log in, and log out. Once logged in, they can create a profile with a profile picture, a bio, and other details. They can also create posts, which can include text, images and comment on other users' posts. The application uses MongoDB to store user data, posts, and comments.

## Live demo
Check the live demo here 👉️ https://mern-social-network-coral.vercel.app/

## Technologies Used
- React
- Node.js
- Express.js
- MongoDB
- Redux
- Axios
- MUI


## Usage
This is a React and Node.js project bootstrapped with create-next-app.

### Getting Started

To get started with the project, first clone this repository to your local machine:
```bash
  git clone https://github.com/medvol/mern-social-network.git
```

 Next, navigate to the project directory and install the necessary dependencies using npm:
 ```bash
  cd mern-social-network
  npm install
```

Create a .env file in the project directory and set the following environment variables:
 ```bash
  REACT_APP_API_URL=<url_mern-social-network_backend>
```
Replace <url_mern-social-network_backend> with the URL of your locally running MERN-social-network Backend instance (e.g., http://localhost:8000).

Finally, start the development server:
 ```bash
  npm start
```

You should now be able to access the MERN-social-network application at http://localhost:3000/.
