# user-post-api

A simple and clean RESTful API for managing **Users**, **Posts**, and **Comments**, built with **Node.js**, **Express**, **Sequelize**, and **MySQL**.

> Supports full CRUD operations, filtering, search, relationships, and bulk actions — for learning.

 **Postman Documentation**:  
[https://documenter.getpostman.com/view/45055428/2sB34fnggY](https://documenter.getpostman.com/view/45055428/2sB34fnggY)


 **Features**
================
- User Registration and Search by Email
- Create, Update, Delete, and Filter Posts
- Comment on Posts (including recent and specific fetch)
- Full-text Comment Search and Count
- Count comments per post
- Bulk insert comments
- Relational structure between Users ↔ Posts ↔ Comments

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



 ****Technologies Used****
===========================
- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **MySQL**
- **Postman (for API testing)**
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Installation
====================
```bash
# Clone the repo
git clone https://github.com/Abdallahyasser14/user-post-api.git
cd user-post-api

# Install dependencies
npm install

# Set up environment variables
# (Create a .env file if needed with DB credentials)

Run the server
npm run dev

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Folder Structure**
====================
user-post-api/
│
├── DB/
│   └── Models/         # Sequelize models (User, Post, Comment)
│
├── Routes/             # Express routes
│
├── Controllers/        # Route logic (CRUD operations, filters, etc.)
│
├── index.js            # App entry point
└── db.connection.js    # Sequelize DB connection
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Sample Endpoints**
====================
| Method | Endpoint                   | Description                          |
| ------ | -------------------------- | ------------------------------------ |
| `GET`  | `/users/by-email/:email`   | Get user by email                    |
| `POST` | `/posts`                   | Create a new post                    |
| `GET`  | `/posts/details`           | Get all posts with user+comments     |
| `POST` | `/comments/bulk`           | Bulk add comments                    |
| `GET`  | `/comments/search`         | Search comments by content           |
| `GET`  | `/comments/:commentId`     | Get a specific comment with details  |
| `GET`  | `/comments/recent/:postId` | Get 3 most recent comments on a post |
| `GET`  | `/posts/count-comments`    | Get comment count per post           |


🔗 See full list in Postman Docs
