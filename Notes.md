# 🎯 Day-1 Onboarding to Workshop

## Project vs Product

### 📌 Project

- A project is built mainly to showcase skills, learn, or for self-satisfaction.

- It runs fine on your own system, but:

  - Different users may have different setups (RAM, CPU power, internet speed, browsers, OS versions, etc.)

  - So, the same performance/experience cannot be guaranteed for all users.

**Goal**: Learning, experimenting, or demonstrating capability.

### 📌 Product

- A product is software built with real users in mind.

- It must work reliably across different devices, browsers, and environments.

- While building a product, we mainly focus on:

  - **Scalability** → Can the system handle growth (more users, more data) while continuing in the same codebase?

  - **Robustness** → Can it handle failures, edge cases, and unexpected inputs?

  - **Maintainability** → Is the codebase clean, modular, and easy to update in the long run?

**Goal**: Delivering value to users with consistent performance and reliability.

## Roadmap:

- we will build:
  - Small range application : cover basics
  - Mid range application : Job ready with project
  - Enterprise application : Product development

## 🖥️ Server

- A server is a machine (computer/CPU) that:
  - Accepts requests from clients (users’ devices).
  - Processes those requests using the source code hosted on it.
  - Sends back a response (data, page, or resource).

In web development, our application code is kept on the server so it’s accessible to users worldwide.

### 🔑 Types of Servers

#### 1. Shared Server 🖥️

- Multiple applications/websites(a.com, b.com, c.com) share the same physical server resources (CPU, RAM, storage, bandwidth).
- Compnies like GoDaddy, BigRock, Hostinger provide shared service on rent
- In shared servers OS like linux, windows are already installed so you have to use the same, you can not change.
- In shared server you do not get root access means you are not admin so you can not change software or hardware configuration.
- Pros: Cost-effective, simple to set up.

- Cons: Limited performance, less secure, not scalable (if traffic spikes, all websites slow down).

- Example: Small blogs, portfolio sites, smaller/mid level applications.

#### 2. Cloud Server ☁️

- Hosted on cloud infrastructure (AWS, Azure, GCP, DigitalOcean, etc.).

- Provides virtualized resources(dedicated CPU) that scale on demand.
- In software world everything is depend on data and we store data in data centers, data centers are nothing but infinite collection of Harddisk, which stores data(text, image, audio, video etc)

- Data centers serves data based on edge location (nearest location), if data is not present at nearest data center it fetches data from origin server, cache it and serve it.

- Some compnies like GoDaddy, BigRock also promise that they provide cloud servers, web hosting is not only cloud server, it provide other multiple services also like team observe, code safety & security, robust architucture, scale
- Pros: Highly scalable, secure, reliable, pay-as-you-go.

- Cons: More expensive than shared hosting, requires technical setup.

- Example: Enterprise apps, e-commerce, social media platforms.

##### 👉 In short:

- Shared Server = Budget option, limited power.

- Cloud Server = Scalable, reliable, modern standard.

### 🌐 Hosting

- When we keep our source code on a server so that it can be accessed by users over the internet, it is called Hosting (or Web Hosting).

- Hosting makes your application publicly available instead of running only on your local machine.

### 🔑 Types of Hosting

1. Shared Hosting → Multiple websites share the same server.

2. Cloud Hosting → Application is hosted on cloud infrastructure (AWS, GCP, Azure, etc.).

3. Dedicated Hosting → A full physical server is dedicated to one application.

4. VPS Hosting → A physical server is divided into virtual servers, each with dedicated resources.

5. Serverless Hosting → Code runs on demand without managing servers (e.g., AWS Lambda, Vercel, Netlify).

#### 👉 In short:

- Hosting = Putting your code on a server so everyone can access it.

- Example:

  - GitHub Pages → Free static hosting.
  - Vercel/Netlify → Modern frontend hosting.
  - AWS/Azure/GCP → Enterprise-level hosting.

# 👩🏼‍💻 Day-02: Understanding Servers and Databases

### Levels of Workshop

- Here we will learn software development in **3 phases** :
  1. Smaller Applications
  2. Mid Range Application (Project Development)
  3. Enterprise Applications (Product Development)

### Web Servers

- **Shared Server** - Multiple applications/websites are hosted on the same CPU.
  - No root access.
  - Limited flexibility.
- **Cloud Server** - Dedicated CPU with root access. You can configure OS, applications, and settings as needed.
  - Cloud servers provide consistent speed for overseas market (World wide market - worldwide accessibility).

**Que: Can you host your application on your own CPU?**

- Yes,but we usually don’t.
- Reason: Lack of fault tolerance and scalability.

**Hosting Company?**

- Companies which gives CPUs(servers) on rent, called Hosting companies.
- Example : GoDaddy, BigRock, Hostinger, AWS, Azure, Google Cloud.

- If Possible learn about hardware configuration it will help you in Software development.
- 👉 Knowing basic hardware configurations (CPU, RAM, Storage, Network) helps you write efficient and machine-friendly code.

### Making a machine (CPU) Server / Web Server:

- Any Machine (CPU) is not a web server by default because it is not configured to handle HTTP requests.
- So to make it web server we have to install some software depend on need:
  - Node.js
  - Nginx
  - Apache
  - Tomcat
- WOnce configured, the machine gets a default IP address: `127.0.0.1`(loopback address) and domain name for this IP Address is `localhost`.
- The default domain for local development is `localhost`.
- Along with the web server software, we also need database software.

  - Step 1: Install Web Server (e.g., Node.js).
  - Step 2: Install Database Software.

- Database stores data (mainly text/structured data).

  - We can store binary data (images, audio, video) in databases, but it is not recommended.
  - Instead, such files are usually stored in cloud storage (e.g., AWS S3, Google Cloud Storage), and databases only store file references/URLs.

### Database Softwares

Some common database systems are:

- Relational (SQL) Databases

  - MySQL
  - PostgreSQL
  - SQL Server

- Non-Relational (NoSQL) Databases
  - MongoDB ✅
  - Amazon DocumentDB
  - DynamoDB

### Database Language

- SQL (Structured Query Language) – Standard language for interacting with relational databases.

### Types of Database

- Relational Database (SQL Database)
  - Stores data in tables (rows & columns).
  - Old and mature technology.
  - Maintenance can be costly at enterprise scale.
  - Examples: MySQL, PostgreSQL, SQL Server.
- Non-Relational Database (NoSQL Database)

  - Stores data in objects/documents (JSON-like format).
  - Newer technology.
  - Cost-effective and flexible for scaling.
  - Examples: MongoDB ✅, DocumentDB, DynamoDB.

- **⚠️Note**: Neither programming languages, databases, nor servers provide inbuilt security by default.
  Security depends on the developer’s implementation (e.g., authentication, encryption, firewalls).

### Scaling

- To improve/increase compute capacity of server is called scaling, there are 2 type of scaling:
  - **Horizontal Scaling**
    - Adding/removing multiple CPUs(servers) on demand
    - common in cloud infrastructure.
    - Example: Adding more servers behind a load balancer.
  - **Vertical Scaling**
    - Increasing the power of the same CPU (e.g., upgrading RAM, CPU cores, or storage).

### Server & Serverless

- In cloud hosting:

  - Server:
    - You decide the hardware/software (RAM, storage, OS).
    - Charged hourly (24×7) whether the app is used or not.
    - Best for enterprise or large-scale apps.
  - Serverless:
    - Cloud provider (e.g., AWS Lambda, Azure Functions) decides the hardware/software.
    - Charged per request/response (pay-as-you-go).
    - Best for startups and apps with variable or low traffic.

- The same concept applies to both application hosting and databases.

  - Example:
    - Server-based database: MongoDB on a dedicated VM.
    - Serverless database: DynamoDB (AWS managed NoSQL).

- In enterprise applications:
  - Application Code and Database are usually hosted on separate servers for better scalability and performance.

# 🧿 Day-03 Understanding MongoDB

📌 What is MongoDB?

- MongoDB is a database software used to store textual data (strings and numbers).
- We do not store files (like images, PDFs, videos) directly inside the database. Instead, they are stored on hard disk/SSD, while MongoDB stores their references/paths.
- MongoDB is a NoSQL (Non-relational) database.
- It stores data in object format (JSON-like structure).
- A single object in MongoDB is called a Document.

```js
// example document
  {
    title: 'white shirt',
    price: 3200,
    discount: 20
  }
```

### 📌 MongoDB Hierarchy

- MongoDB works in this structure:

  - MongoDB -> Database -> Collection (folder) -> Document (one item)

- Database name is usually based on the company/project name.
- Collection names should always be plural (e.g. `users`, `courses`).
- A database can have multiple collections.
- A collection can have multiple documents.

```
  - wapInstitute (Database)
    - users (Collection)
    - employees (Collection)
    - courses (Collection)
```

### Installing MongoDB

- Download & install MongoDB community server download
- Download & install MongoDB shell (mongosh)
- Open terminal and run

  ```sh
    mongosh
  ```

- ✅ If it shows something like:

```sh
  PS C:\Users\Ajeet Singh> mongosh
  Current Mongosh Log ID: 68ac92f1ee50594f80eec4a8
  Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.6
  Using MongoDB:          8.0.12
  Using Mongosh:          2.5.6

  For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

  ------
    The server generated these startup warnings when booting
    2025-08-15T09:45:03.918+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
  ------

  test>
```

That means MongoDB is running correctly.

- ⚠️ Troubleshooting:

- If not working goto `startmenu -> services -> mongodb server` check if it is start or not. if not start start that.
- Still not working → Reinstall MongoDB correctly.

- Rare case: Even though it not working that means some certificate file can be missing in your windows (OS).In this case you to install new OS.

### Operating Mongodb

There are 2 ways to work with MongoDB:

1. Using Terminal (mongosh) → for learning & server management.

- `mongosh` start mongo shell in terminal
- Using Code (Node.js, Python, Java, Go, PHP, .NET, etc.) → for real applications.

- When we took dedicated server for database to manage that you need to know mongoDB CLI. So we first learn mongodb using terminal.

- Default selected database is `test`.
- To show list of all databases:

```sh
  show dbs
```

- Default databases are: `admin, local, config,test`

- To use (or create) a database:

```shell
  use "databasename"
```

🔹 If the database doesn’t exist, it will be created once data is inserted.

- It remains temporary until there is no data in the database. It will not appear in the list of databases.

- To select collection:

```sh
  db.courses
```

### Inserting Data

- To insert data in database we have two methods:

  - **insertOne()** - method is used to insert single document in collection.
  - It take a document as an argument.

```sh
  db.courses.insertOne({title: "react course", price: 9000, discount: 20})

  // or

  db.courses.insertOne({
... title: "angular",
... price: 6999,
... discount: 20
... })

```

- Response:

```sh
{
acknowledged: true,
insertedId: ObjectId("68aca067ee50594f80eec4a9")
}
```

- And for each document mongodb generate an unique id and attach with document that means document inserted successfully.

  ```sh
    {
      acknowledged: true,
      insertedId: ObjectId('68aca067ee50594f80eec4a9')
    }
  ```

  - `ObjectId` is a **Primary Key** in mongodb.

- **insertMany()** - It is used to insert multiple document at once.
- It take array of document as an argument.

```sh
  db.collection.insertMany([{}, {}, {}, ...])
```

- If you insert 4 document it return 4 unique ObjectIds. - If you are using insertMany(), create your array of document in vscode it will prevent from errors.

```sh
      db.courses.insertMany([
      ... {
      ... title: "java",
      ... price: 7999,
      ... discount: 10
      ... },
      ... {
      ... title: "python",
      ... price: 6999,
      ... discount: 15
      ... },
      ... {
      ... title: "go",
      ... price: 9999,
      ... discount: 25
      ... },
      ... {
      ... title: "c++",
      ... price: 3999,
      ... discount: 10
      ... },
      ... {
      ... title: "dsa",
      ... price: 14999,
      ... discount: 30
      ... }
      ... ])
```

- Response:

```sh
{
      acknowledged: true,
      insertedIds: {
      '0': ObjectId('68ad24571000155643eec4a9'),
      '1': ObjectId('68ad24571000155643eec4aa'),
      '2': ObjectId('68ad24571000155643eec4ab'),
      '3': ObjectId('68ad24571000155643eec4ac'),
      '4': ObjectId('68ad24571000155643eec4ad')
}
```

### Reading/fetching data

- To fetch data in MongoDB we use 2 methods all these methods are used with:

```sh
 db.collection
```

1. findOne()

- It returns 1st matching document

```sh
  db.collectionName.findOne()
```

```shell
    db.courses.findOne()
  // result
  {
  \_id: ObjectId('68aca067ee50594f80eec4a9'),
  title: 'react course',
  price: 9000,
  discount: 20
  }
```

2. find()

- It returns all matching documents.

```sh
  db.collectionName.find()
```

```shell
db.courses.find()
// result
[
  {
  _id: ObjectId('68ad24571000155643eec4ab'),
  title: 'go',
  price: 9999,
  discount: 25
},
{
  _id: ObjectId('68ad24571000155643eec4ac'),
  title: 'c++',
  price: 3999,
  discount: 10
},
{
  _id: ObjectId('68ad24571000155643eec4ad'),
  title: 'dsa',
  price: 14999,
  discount: 30
}
]
```

### 📌 Queries & Projection

- Condition in database is called `query`.
- Queries are conditions inside find() or findOne().

- Both methods(find(), findOne()) accept two arguments: {query}, {projection}.

```sh
   findOne({query}, {projection})
```

```sh
  db.courses.findOne({title: 'java'})

  {
  _id: ObjectId('68ad24571000155643eec4a9'),
  title: 'java',
  price: 7999,
  discount: 10
  }
```

- Query parameter is an object you can pass multiple properties.
- If query not match with any document it will return `null`
- DataType of `_id` is `ObjectId` already present in mongoDB.
- Always match `_id` with findOne.
- `Projection` is used to fetch specific data from a document.

```sh
  db.courses.findOne({title:'java'}, {price:1, _id:0})
```

- Response:

```sh
{ price: 7999 }
```

✅ Benefits of Projection:

- Projection reduces latency.
- Low latency = fast response.
  -Reduces unnecessary data transfer → cost-effective in serverless architecture.
- Example: A landing page should load within 3 seconds → projection helps.
- There are multiple ways to improves latency projection is one of them.
- Projection said only fetch data what you need.

- find({query}, {projection})

#### Limit

- we use limit(n) function to fetch only n document.
- It also improves latency.

```sh
  db.collection.limit(2)
```

- It will fetch 2 documents from db.
- It is used to create pagination.

# 🌳 Day-04 MongoDB Basics

### 🔹 Show Collections

To list all collections in the current database:

```sh
  show collections
```

### 🔹 Store Data with Date & Time

- Always add a `createdAt` field when inserting documents.
- Use `new Date()` for current timestamp (MongoDB stores it in ISODate format).

```js
db.products.insertOne({
  name: "Product1",
  price: 100,
  createdAt: new Date(),
});
```

### 🔹 Sorting Data

- MongoDB provides sort() for ordering query results.
- To sort data in MongoDB we use `sort()` method.
- Takes an object `{ field: 1/-1 }`

```sh
  db.collection.find().sort({field: 1})
```

- `1` for Ascending order
- `-1` for Descending order
- `field` based on which you want to sort
- Example:

```sh
  db.products.find().sort({ createdAt: -1 }).limit(4)
```

- Note: The order for `limit()` and `sort()` does not matter.

### Skiping Data (Pagination)

- Use `skip(n)` function to skip documents.
- skip() fetch data in chunks
- Used in to create Pagination feature with `limit()`
- In pagination we do not change limit
- Formula: `(p-1)*limit`
  - Here `p` is page number which come from backend

```sh
  db.collection.find().skip(n)

  db.products.find({}, { name: 1, price: 1, _id: 0 })
           .sort({ price: -1 })
           .skip(3)
           .limit(5)

```

- Task: create pagination feature

### Updating Data:

- In mongodb to update data we have two methods
  - updateOne()
    - Update first matching document.
    - Syntax:
    ```js
    db.collection.updateOne(filter, update);
    ```
    - It take two argument query(filter), updated data
    ```js
    db.products.updateOne(
      { name: "Product2" },
      { $set: { name: "Product-2" } }
    );
    ```
    - Response:
    ```json
    {
      "acknowladged": true,
      "insertedId": null,
      "matchedCount": 1,
      "modifiedCount": 1,
      "upsertedCount": 0
    }
    ```
    - `$set` is an operator.
    - 💡 Always use \_id when updating to avoid `ambiguity`.
    - When we do update and delete use \_id especially with updateOne().
    - If you are matching with \_id it will call updateOne() only.
    - Always match \_id to update or delete.
    - If modifiedCount > 0, it means document updated
  - updateMany() - Updates all matching documents.
    ```js
    db.products.updateMany(
      { category: "Electronics" },
      { $set: { inStock: true } }
    );
    ```

### 🔹 Deleting Data

- To delete data in mongodb:

  - deleteOne(filter)

    - deletes the first match.
    - 90% we pass \_id
    - If {} empety query deletes 1st document
    - ⚠️ If deleteOne({}) is run with an empty query, it deletes only the first document.

    ```js
    db.products.deleteOne({ _id: ObjectId("64f23...") });
    ```

  - deleteMany(filter)

    - deletes all matches.

  - Examples:
    ```js
    db.products.deleteMany({ category: "Clothing" });
    ```

### CRUD

**Interview Question**: How do you perform CRUD operations in MongoDB?
👉 By using the following methods:

- C: Create -> `insertOne()`, `insertMany()`
- R: Read -> `find()`, `findOne()`
- U: Update -> `updateOne()`, `updateMany()`
- D: Delete -> `deleteOne()`, `deleteMany()`

### Note

- Database
- Collection
- Document
- Field

**Products prompt**:

- generate product.json with createdAt must follow mongodb date pattern in createdAt give me atleast 20 products and do not ad duplicate createdAt

#### Robust Rule-1

- Code should work same even after years.
- Fetching data in chunks (`limit`, `skip`, `pagination`) improves performance, reduces latency, and makes applications cost-effective.

### Count Documents

- To count documents in a collection we have countDocuments() method.
- It can also accept query as an argument.

```sh
  db.collection.countDocuments();
  db.collection.countDocuments({property : value});
```

### 🔹 Tools

- Mongosh: CLI software for MongoDB
- MongoDB Compass: GUI software for MongoDB
- We always use `limit()`, `sort()`, `skip()` after `find()` or `findOne()`

# 🔥 Day-05 MongoDB Operators

### 🔗 Connecting with MongoDB

- MongoDB is a software.
- To connect to MongoDB we need its protocol, host, and port.

```sh
  mongodb://localhost:27017
  (protocal + domain + port)
```

## ⚡ Operators in MongoDB

- In MongoDB, any word that starts with `$` is called an operator.

### 1. Comparison Operators

- `$eq` → equal to (`==`)
- `$ne` → not equal to (`!=`)
- `$gt` → greater than (`>`)
- `$gte` → greater than or equal to (`>=`) ✅
- `$lt` → less than (`<`)
- `$lte` → less than or equal to (`<=`) ✅
  ⚠️ Note: Always apply comparison operators to a field.

### 2. Date Operators

- In MongoDB, every value has a specific data type.
- For dates, the datatype is `Date`.
- To insert a date in raw JSON, use `$date` operator.

```js
  {
  "name": "Atul",
  "grade": 11,
  "city": "Delhi",
  "createdAt": { "$date": "2025-11-21T23:51:56Z" }
}
```

- Date Format in MongoDB "YYYY-MM-DDTHH:MM:SSz"

  - `T` → separates date & time
  - `Z` → UTC timezone indicator

- ✅ If you compare dates in `find()`, always use ISODate.

```js
db.collection.find({
  createdAt: {
    $gt: ISODate("2021-01-01"),
    $lt: ISODate("2021-02-01"),
  },
});
```

- If you are matching date useing ISODate with find() without operators use complete DateTime format

```js
db.payments.find({ createdAt: ISODate("2025-03-19T13:55:50.000+00:00") });
```

- Otherwise it will throw error:

```js
db.payments.find({ createdAt: ISODate("25-03-19") });
// MongoshInvalidInputError: [COMMON-10001] "25-03-19" is not a valid ISODate
```

#### Fetch data of one day

```js
db.payments.find({
  createdAt: {
    $gte: ISODate("2023-01-05T00:00:00.000+00:00"), // Start of Jan 5, 2023
    $lte: ISODate("2023-01-05T23:59:59.999+00:00"), // End of Jan 5, 2023
  },
});
```

- `$gte` → includes all docs from midnight (`00:00:00.000`) of Jan 5th.
- `$lte` → includes up to the very last millisecond of the day (`23:59:59.999``).
- The `+00:00` means it’s using UTC time (not local timezone).

**⚠️ Alternative (simpler & safer)**: instead of using `$lte 23:59:59.999`, many developers prefer `$lt` the next day at 00:00, which is equivalent but avoids edge-case issues:

```js
db.payments.find({
  createdAt: {
    $gte: ISODate("2023-01-05T00:00:00.000+00:00"),
    $lt: ISODate("2023-01-06T00:00:00.000+00:00"),
  },
});
```

- You cannot use 24 for the hour part in ISODate("2023-01-05T24:00:00.000Z").
- Why?

  - Because 24 is not a valid hour in the ISO-8601 date format — hours go from `00` to `23`.

- If you write `T24:00:00`, MongoDB (and JavaScript’s `Date`) will throw an error or auto-roll it into the next day at `00:00:00`.

```js
ISODate("2023-01-05T24:00:00.000Z") ❌
ISODate("2023-01-06T00:00:00.000Z") ✅
```

### ObjectId

- DataType of `_id` is `ObjectId`.
- To create that we use `$oid` operator
- `\_id -> $oid -> ObjectId

- When importing JSON, MongoDB represents it as:

```sh
  _id: {"$oid": "68b1745805ce50b012fea04c"}
```

- In MongoDB shell / Compass it appears as:

```sh
  _id: ObjectId("68b1745805ce50b012fea04c")
```

### Operator in find()

- General syntax

```js
db.collection.find({ field: { operator: value, operator: value } });
```

- Example

```js
db.products.find({
  price: { $gte: 299, $lte: 999 },
});
```

### Uploading Data from MongoDB Compass

- From `.json` or `.csv` file
- Insert-data

### Accessing nested fields

- Use dot notation to query inside nested objects:

```js
db.collection.find({ "price.amount": 499 });
```

### Regular Expressions (RegExp)

- MongoDB supports regex for pattern matching.
- It takes to arguments 'data' and 'i/s'

```js
db.collection.find({ RegExp("Price.Amount", "i"): 499 });
```

- `$options`
  - `i` → case-insensitive
  - `s` -> dotall mode (dot `.` matches newlines) / sensitive

```js
db.collection.find({ field: { $regex: "pattern", $options: "i" } });
```

- Example

```js
db.users.find({ name: { $regex: "^a", $options: "i" } });
// Finds all names starting with "a" or "A"
```

# 🚀 Day-10 Node.js Onboarding

### 🌍 Running a Web Application

- If you are creating web apps, to run a web app you need atleast 2 computer.

  1. Client (User's computer) - The machine where the user opens the browser and interacts with the app.
  2. Server (Hosting Machine) – A powerful computer with 24×7 electricity and high-speed internet, responsible for handling client requests.

- 👉 Keeping code on a server so it can be accessed worldwide is called Web Hosting / Website Hosting / Deployment.

### 📈 Traffic

- **100k traffic** : means 100k total users visiting the website.
- **100k concurrent traffic** : 100,000 users accessing the website at the same time (per second).

### 🔄 Request & Response

- **Request :** When a user perform an action (e.g., typing in search bar and pressing Enter) is called request.

- **Response :** The data/resource the server sends back to the client for that request is called response.

### ⚡ Latency

- The total time taken for a request to reach the server and for the response to come back.

- **Low Latency**: Faster loading and better user experience.
- **Best Practice**: For landing pages, latency should be 3s to 5s maximum.

### 👩🏼‍💻 Client-side & Server-side Language

- To run fully functional website you need two type of language:
- Client-Side language
- Server-Side language
- **Client-side :** The language which runs on client's computer (browser) is called client side language. ex - HTML, CSS, JavaScript, VBScript(outdated).
- **Server-side :** The language which runs on server is called server-side language. ex - Node.js, php, Laravel, CodeIgnitor, Java, python, c++, .Net, C#.

### 🌐 Types of Websites

1. **Static Website** (Raw coded)

- Built using only HTML, CSS, and JavaScript.
- Content is fixed and does not change dynamically.
- **Dynamic Website**
  - Content Comes from a Database.
  - Uses server-side languages for features like authentication, payments, etc.

### 📝 CMS (Content Management System)

- CMS stands for Content Management System (not services).
- Provides tools to manage website content without coding.
- Example: WordPress, Joomla, Drupal.
- Often includes an Admin Panel for managing users, posts, products, etc.

### ⚙️ Features Requiring Server-Side Language

- OTP (send/resend)
- Email handling
- Payment Gateway integration
- SMS sending
- User Authentication
  - Login
  - Signup
  - Forgot Passwaord

### 💻 Languages & Their Best Use Cases

- Every language is expert in a specific domain.
- **Node.js** → Best for Network-Centric Applications (real-time data transfer)
  - Video Streaming (Amazon Prime, Netflix, Zoom, Google Meet)
  - Chat Applications
  - IoT Applications
- **PHP** → Strong in E-commerce & Cloud Telephony (IVR systems)

- **Java & .NET** → Best for Transactional Security (e.g., Banking, Enterprise apps)
- **Python** → Best for AI/ML, Data Science, Automation

⚠️ Note: No language or server is secure by default.

- Security comes from developer’s logic and implementation (experience matters).

### 🚀 Building a Startup – Key Points

- Keep in mind 3 major factors when building products:
  1. **Cost Effective** – Should fit budget without wasting resources.
  2. **Scalable** – Must grow from 0 → millions of users smoothly.
  3. **Robust** – Must be reliable and fault-tolerant.
     - Downtime tolerance should be near zero.

👉 If confused about which tech to use, do freelance projects & R&D to gain clarity.

# 🪧 Day - 11 Node.js, Promises, Synchronous & Asynchronous Code

### Why Do We Need Server-Side Language?

- Client-side languages (like plain JavaScript in the browser) cannot directly communicate with databases.
- That’s why we use server-side languages (like Node.js, PHP, Java, etc.) to interact with databases.

##### Flow:

`JavaScript (gives instruction) --> NodeJS (accept instruction & process) --> Database

### Limitations of Server-Side Language

- Server-side languages are mainly used to give instructions to the machine.
- The nature (type) of instructions can vary (anything) (DB operations, file handling, etc.).
- Code executes on the server (not on the browser).

### What is NodeJS?

- In developer terms: Node.js is not a language. It is a JavaScript runtime environment that allows JavaScript to run on the server.
- It uses the V8 engine (from Chrome) to execute JS outside the browser.

- With Node.js, JavaScript can perform server-side operations like handling HTTP requests, accessing databases, file systems, etc.

### JavaScript Execution

- JavaScript runs on both client & server:

  - Browser → JavaScript (DOM, BOM, UI operations)
  - Server → Node.js (database, APIs, business logic)

- Not all JS code works on the server:

  - UI related code does not execute
  - BOM and DOM related code does not execute on server

  ```js
  window.alert("Hello World!"); ❌ // Browser only
  document.write("Hello World!"); ❌ // Browser only

  console.log("Hello World!"); ✅ // Works in Node.js
  ```

- JavaScript code --> NodeJS --> Compile/Interprate on Server machine

### Making a machine (CPU) Server / Web Server:

- Any Machine (CPU) is not a web server by default because it is not configured to handle HTTP requests.
- So to make it web server we have to install some software depend on need:
  - Node.js
  - Nginx
  - Apache
  - Tomcat
  - Bitnami
- We use Node.js for dev server
- Nginx is used for production web server (often used with Node.js apps)
- Apache is used mostly for php apps
- Tomcat for Java apps.
- Bitnami -> Bundled stack for quick setup.

- Node.js
  - make machine capable to handle http request
  - help javascript code run on server (JavaScript Runtime Environment)
  - Compile / Interprate using compiler / Interpretor (both exist in V8 engine)

## Synchronous vs Asynchronous

### Types of Execution Types:

- Statement executes in two ways:

  - **Synchronous (blocking)**: code execute line by line in order.

  ```js
  console.log("One");
  console.log("Two");
  console.log("Three");

  // output
  // One -> Two -> Three
  ```

  - **Asynchronous (non-blocking)**: does not wait for the async task (statements) to finish.

  ```js
  console.log("One");
  setTimeout(() => {
    console.log("Two");
  }, 3000);
  console.log("Three");

  // Output: One → Three → (after 3s) Two
  ```

### Promises in JavaScript

- Promise is a way to make any synchronous code to asynchronous.
- We always write Promise code in a function. And inside function we create instance of Promise class and return it because we have to send it from where it called.
- Promise take a callback function as an argument which is received by constructor function

```js
function myCode() {
  return new Promise(() => {});
}
```

- And return two functions `resolve` and `reject`

### <mark> correct above based on geiven info below</mark>

- A Promise represents a value that may be available now, later, or never.
- Used to handle asynchronous operations.
- Promise constructor takes a callback function with two arguments:
  - `resolve` -> success
  - `reject` -> failure

```js
function myCode() {
  return new Promise((resolve, reject) => {
    if (12 === 12) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

const x = myCode();
console.log(x); // Promise {<Pending>}
```

- Promise has three states:

  - `Pending` --> if you did not use promise (initial state)
  - `Fullfilled` --> resolve() called
  - `Rejected` --> reject() called

- To resolve Promise we use callback.
- For Fullfilled state we use `.then()`
- For Rejected State we use `.catch()`

```js
function myCode() {
  return new Promise((resolve, reject) => {
    if (12 === 12) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

console.log("One");
const x = myCode();
x.then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log(err);
});
console.log("Three");
```

#### Callback

- A callback function is a function in Javascript that is passed as an argument to another function.

```js
function greet(callback) {
  console.log("Hello");
  callback();
}
greet(() => console.log("World"));
```

#### Callback Hell

- Nesting of the callback is called callback hell.
- jQuery by default support callback hell.

#### Promise behind the sence:

```js
class Promise{
  constructor(){
    // .....
    // .....
  }

  function demo(){
    // ......
    // ......
  }
}

const x = new Promise();
// If you want to call a function from class
// 1st create instance of that class
// than call the function using that instance
x.demo();
```

- A Promise is just a class in JavaScript.
- `Constructor` is a function which invoke automatically ASAP when new instance is created..
- We do not need to call constructor function.
- If at the time of creating instance of the class we pass something as an argument, constructor function accept it as a parameter.

```js
class Promise {
  constructor(x) {
    console.log("Constructor called with:", x);
  }

  //.....
  //.....
}
const a = new Promise(12);
// Constructor automatically invoked
```

### Programming Paradigm:

- In Programming there is a concept known as paradigm.
- There are different ways (paradigms) to write code:
- But mainly we uses 2 paradigm:

  1. Procedural-Oriented: step by step, no classes

  ```js
  // write code without class
  console.log("One");
  console.log("Two");
  console.log("Three");
  ```

  2. Object-Oriented (OOP) : using classes & objects

  ```js
  class Code {
    run() {
      console.log("One");
      console.log("Two");
      console.log("Three");
    }
  }

  const code = new Code();
  code.run();
  ```

- 👉 In OOP, to execute a class we create instance (Object) of a class using `new` keyword.

# 📈 Day -12 Nodejs, async await and exception handling

### 🚀 Node.js

- Node.js is not a language.
- It is a **JavaScript runtime environment** that allows JavaScript to run on the server.

### 🧵 Threads in Node.js

- Thread is a mechanism to handle a request.
- It's a program present in software which makes your machine server ex- Node.js, Tomcat etc.
- A thread is a lightweight process that handles tasks/requests.
  Examples of software that use threads: Node.js, Tomcat, Apache etc.

#### Types of Threads

- There are two types of threads:
  - **Single-threaded** – Only one task at a time.
  - **Multi-threaded** – Multiple tasks at the same time.
- Since **JavaScript is a single threaded** language. So **Node.js is also single threaded**(it has one main thread for executing JS code).
  Example:
  - For example user1, user2, user3, user4.... sent request thread accept that request and transfer to server (worker) now thread is busy with user1 so others will wait in a queue and when thread sent response back to user1 after that accept request of user2
    - If user1 request is being processed, the main thread is busy → user2, user3 wait in a queue.
    - This would block execution under heavy load if Node.js didn’t have a special mechanism.
- For heavy traffic, practically it is not possible.
- 👉 To solve this, Node.js uses libuv for asynchronous, non-blocking behavior.

### ⚙️ How Node.js Handles Multiple Requests

-Node.js is written in C++.

- In C++ there is a program(s/w) called `Kernal` which has a package( a folder which have collection of source code ) called `libuv`
- `libuv` has capability to create dynamic threads.
- **libuv provides**:
  - Event Loop
  - Thread Pool (creates background threads dynamically)

👉 Workflow:

```scss
Request → Event Loop → Thread (libuv) → Worker (processes) → Response

```

**Now the secne is changed😀**

- user1 sent request, libuv generates a dynamic thread, it accept the request and sent to worker and now thread is free. Now user2 sent request and the same thread will accept the request.

- **But what if multiple request sent parallely?**
  - libuv will generate the threads

#### Worker

- A program in server which works in background.
- Worker is like code processorthat executes actual code and sends response back.

```scss
Request1 ---> Thread ---> worker (processor) ---> response (back to client)
```

- In interviews answer straight forward `worker(server)`
- Mostly `200-500` thread limit are defined, we can increase it but we don't do because hardware use will increase and latency will grow.

#### Scaling (when traffic is very high)

- In case of heavy traffic server crashes, we prevent it through scaling.
- There are 2 type of scaling:
  - Horizontal Scaling - Add more servers and distribute traffic (load balancing).
  - Vertical Scaling - Add more CPU/RAM to the server.

### 🔄 Event Loop

- Event-loop is a mechanism, Node.js server continously keep checking things on basics of events eg: user sent request, file downloading etc.
- Event Loop = mechanism that keeps checking for tasks/events (requests, timers, file I/O).
- It decides what to execute next and ensures non-blocking execution.
- This is the core reason Node.js can handle thousands of concurrent requests even with a single thread.

### async await

- Synchronoous & Asynchronous are type of statement execution:

  - `sync ---> async ---> use promise`
  - `async ---> sync ---> use asunc await`

- Where Promise returns come from there to resolve the promise we use `.then().catch()` or `async await`

- `await` keyword is a member of a function.
- To use `await` we write `async` before a function, it basically represents the function is asynchronous.

- There are two ways to resolve a Promise

  1. Asynchronously

  - To resolve a promise asynchronously we use `.then().catch()` it works by default asynchronously.
  - From `.then()` we get info about success from `resolve()`
  - From `.catch()` we get info about error from `reject()`

  ```js
  function myCode() {
    return new Promise((resolve, reject) => {
      if (22 === 22) {
        resolve("Two");
      } else {
        reject("Failed");
      }
    });
  }

  console.log("One");
  myCode()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Three");
  ```

  2. Synchronously

  - To resolve a promise synchronously we use `async await`
  - To handle Promise error is compulsary other wise server will crash.
    - On cloud Server crash means compilation will terminate from Node.js - To fix this restart server.
    - But in case of shared server, server crash can be anything.
  - But in async await there is no way to get information about error, so we use exception handling (`try` & `catch`).

    - exception handling means is a way to find error in async await.

    - **finally**: Wether `try` or `catch` any of them is executed after that `finally` block will execute.
      `finally` always executes.

  ```js
  function myCode() {
    return new Promise((resolve, reject) => {
      if (22 === 22) {
        resolve("Two");
      } else {
        reject("Failed");
      }
    });
  }

  async function main() {
    try {
      console.log("One");
      const x = await myCode();
      console.log(x);
      console.log("Three");
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Promise Executed");
    }
  }

  main();
  ```

# 😶‍🌫️ Day - 13 Nodejs Modules and Packages

### 📦 Module

- In Node.js any javascript file created to perform a specific task is called `Module`.
- Modules help in re-usability, maintainability, and code organization.
- Terms like module, package, dependency, library are often used interchangeably (though technically they differ slightly).

Example module files:

```js
video_streaming.js;
download.js;
upload.js;
live.js;
```

### 🔹 Types of Modules

- There are 3 types of module:
  - **Built-in / pre-defined module**: Provided by Node.js (`fs`, `http`, `path`, etc.).
  - **User defined module**: Created by developers.
  - **Third party Module**: Installed from npm registry (`express`, `moment`, etc.)

### ✂️ Code Splitting

- Breaking code into smaller chunks for better performance and maintainability.
- Benefits:

  - Faster app loading.
  - Easier team collaboration.

- In Node.js & JavaScript there are multiple approaches of code splitting (ways to split code):
  - Modules
  - Functions
  - Classes

### 👨‍💻 User-defined Modules

- Create an external `.js` file.
- Export the code using `module.exports`.
- To use module: import using `require()`(similar to import)

**Syntax**

```js
    module.exports =variable or function or class
```

**Example 1 – Exporting a Single Value**

```js
// file.js

const test = "Hello NodeJS";
module.exports = test;
```

#### How to use

- **require()**: when we read module using require() it is called `Common Js`

  - Syntax

  ```js
  const moduleName = require("path of module");
  ```

  - Example:

  ```js
  // index.js

  const file = require("./file");

  console.log(file); // Hello Node.js
  ```

- If you are exporting multiple values in Common JS, use object `{}` to export
- Since Module is re-usable, so function inside module return data not result directly.

```js
// file.js

const test = "Hello NodeJS";
const addTwoNumbers = (a, b) => {
  return a + b;
};

module.exports = {
  test,
  addTwoNumbers,
};
```

```js
// index.js
const file = require("./file");

console.log(file.test);
console.log(file.addTwoNumbers(2, 3));
```

- Since you exporting object you can recieve values through object de-structuring.

```js
// index.js

const { test, addTwoNumbers } = require("./file");

console.log(test);
console.log(addTwoNumbers(2, 3));
```

- Node.js uses common js (CJS) by default before v13.

#### Import/Export in EcmaScript

- Uses `import`/`export`. (Modern Standard)
  - **import**: used to import it is called EcmaScript Module (ESM)
  - **export/export default**: use to export in ESM

**Example**:

```js
// file.mjs
export const test = "Hello ESM";
export default function add(a, b) {
  return a + b;
}
```

```js
// index.mjs
import add, { test } from "./file.mjs";
console.log(test);
console.log(add(2, 3));
```

- ⚠️ To use ESM in Node.js:
  - Either save file as `.mjs`
  - OR set `"type": "module"` in `package.json`.

## Moment.js

- In JavaScript use this link as cdn `https://momentjs.com/downloads/moment.js`
- Get Current Date and Time: `moment()`

- Visit `moment.js` documentation
- Visit `Day.js` documentation (Recomonded)

### 🌍 Third-party Modules

- If a feature isn’t available in Node.js, install a third-party module via `npm`.
- To download and manage third party module we need a tool called `npm` and it comes with Node.js.
- Packages are hosted on 👉 `npmjs.com`
- You can also host your packages on `www.npmjs.com`

```sh
npm install package/module_name
npm i package/module_name
```

#### 📅 Example: Moment.js

- It is a package which help to with date related task.
- A library for date and time manipulation.

```js
const moment = require("moment");

const dt = moment();
console.log(dt.format("DD:MM:YYYY HH:MM:SS A));
```

**✅ Notes:**

- `HH:mm:ss` → 24-hour format
- `hh:mm:ss` → 12-hour format
- `A` → AM/PM (uppercase)
- `a` → am/pm (lowercase)

### ⚙️ Process Manager

- It is a concept in Node.js which automatically restarts/recompiles code when changes occur.
- There are two process manager in Node.js
  1. `nodemon` : used in Development server
  ```js
  npm install -g nodemon
  // how to run file
  nodemon filename
  // if your file name is index.js
  nodemon
  ```
  2. `PM2`: Used in production for load balancing and process monitoring.

### 🛠️ Creating a Project in Node.js

- Create a folder --> name as product/company name
- Add to workspace
- `npm init -y`
  - It initilize `package.json` file also called metadata file or manifest file.
  - `package.json` contains:
    1. MetaData (application related details like name, version, root file(entry point of application) etc)
    2. Config/scripts (command to run project)
    3. Author details
    4. Dependencies

Example:

```js
// package.json
{
  "name": "wap_demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "moment": "^2.30.1",
    "nodemon": "^3.1.10"
  }
}
```

### 📤 Sharing a Project

- Select all files except `node_modules/`
- Create zip
- Share

### 📥 Running a Shared Project

- Unzip project.
- Open in workspace/IDE.
- Goto Terminal
- Run

```sh
npm install
```

# 🔥 Day - 14 Nodejs Server and Database

### NPM (Node Package Manager)

- `npm` is a cli(Command Line Interface) tool, which is used to manage (install, uninstall, update, upgrade) Node.js packages.
- Common operations with `npm`

  - Install packages
  - Uninstall packages
  - Update packages
  - Upgrade packages

- **👉 CLI Tool**: A tool that operates via the terminal/command line.

### URL (Uniform Resource Locator)

Example:

```sh
http://www.demo.com:3000
```

- A URL consists of 3 parts:

```js
protocol + domain name (or IP) + port

```

#### 1. Protocal

- Defines the set of rules for communication.
- Example:
  - `http` → HyperText Transfer Protocol
  - `https` → Secure HyperText Transfer Protocol

#### 2. Domain Name / IP Address

- **Domain Name**: Human-readable address (e.g., `www.google.com`)
- **IP Address**: Numeric form of domain name (e.g., `127.0.0.1`)

  - IPv4 (e.g., `192.168.1.1`)
  - Ipv6 (e.g., `2400:cb00:2048:1::c629:d7a2`)

#### 3. Port:

- A numeric identifier for services running on a machine (2–4 digits).
- Common Ports:
  - `http - 80`
  - `https - 443`

## Stateless vs Stateful Protocols

### 🔹 Stateless Protocol (e.g., HTTP, HTTPS)

- After sending the response, the server disconnects from the client.
- Client and server don’t maintain a continuous connection.
- **Advantage**: Saves resources. (If you leave a website open overnight, it won’t consume data.)

```
- `http` and `https` are stateless protocal, when user sent request to server it connect and server sent response back to client and disconnected.
- Now client and server do not know each other.
```

### 🔹 Stateful Protocol

- A continuous connection is maintained between client and server.
- Server disconnects only when it decides to.
- Used where real-time data transfer is needed.
- Example:

  - **WebRTC** (`webrtc://`) → video calls, audio calls, stock market apps, banking portals
  - **WebSocket** (`ws://`) → chat apps like WhatsApp, Messenger (keeps users connected until explicitly closed)

  - **TCP (Transmission Control Protocol)** : Learn
  - **SSH (Secure Shell)** : Learn

    ```
    - Where real time data transfer takes place, it is done using web Socket protocall
    - user1 and user2 both are connected to server eg. whatsapp (chat open --> connected)
    ```

### 📦 Uninstalling a Package

```sh
npm uninstall package_name
```

### 📂 Entry Point / Root File

- A Node.js project can have multiple files, but it needs one entry point (root file) from where execution starts.
- This root file is usually defined in `package.json` under `"main"` (default: `index.js`).

### 🖥️ What is a Server?

- When a CPU is capable to handle request and response, called server.
- A server is a machine (or software) that listens for requests and sends responses.
- When we use Node.js, our CPU acts as the server.

### 🌐 HTTP Module

- `http` is a **built-in module** module in Node.js.
- It provides a method `createServer()` to create an HTTP server.
- It returns a Promise
- `createServer()` takes a callback function with two parameters:
  - `req` → request object
  - `res` → response object

```js
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello Server!");
  res.end("Hi, I am your server");
});

server.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
```

#### 🔌 Why Do We Set Ports?

- On a local computer, multiple applications may run on the same domain (`localhost` → `127.0.0.1`).
  To differentiate applications, each runs on a unique port number (e.g., `8080`, `5000`, `3000`).

```
  - We are working on local computer, maybe we develop different application in different languages like php, python, node, java
  - Since we are working on local, so our CPU is server which has default address 127.0.0.1 (domain - localhost)
  - So all application can not run with same domain name
  - to provide uniqueness to domain we create 4 digit port, port can be any number
  - When you set port, now you can access your node application from browser
```

### ❓ Query Parameters

- If you want to send data from client to server there are multiple ways for that : `query parameter/string` is one them.
- In URL `?` is known as query parameter.
- A way to send data from client → server via URL.
- Format:

```sh
www.demo.com?name=user&roll=123
# name --> query (key)
# user --> parameter / string (value)
# & --> seprate
```

### Status Code:

- Status code is way via that server tells about response status to browser.
- Status codes tell the browser/client the result of the request.
- Server is responsible to inform browser about the result, for that server uses status code.

- Common ones:

  - `200` → OK (success)
  - `201` → Created
  - `424` → Failed Dependency
  - `500` → Internal Server Error
  - `401` → Unauthorized
  - `404` → Not Found
  - `408` → Connection timeout
  - `409` → Conflict (duplicate)

- Always send respose to browser with Status Code.
- 👉 Default status code is `200` unless changed.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hi, I am your server");
});

server.listen(8080);
```

### Writing Efficient Code

Bad (nested):

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const userName = "demo@gmail.com";
  const password = "hello@1234";

  if (userName === "demo@gmail.com") {
    if (password === "hello@1234") {
      res.statusCode = 200;
      res.end("Login success!");
    } else {
      res.statusCode = 401;
      res.end("Login failed,Incorrect Password.");
    }
  } else {
    res.statusCode = 404;
    res.end("User does exist please register or signup to continue.");
  }
});

server.listen(8080);
```

Better (flat structure):

```js
if (userName !== "demo@gmail.com") {
  res.statusCode = 404;
  return res.end("User does not exist. Please register.");
}

if (password !== "hello@1234") {
  res.statusCode = 401;
  return res.end("Incorrect Password.");
}

res.statusCode = 200;
res.end("Login success!");
```

- As senior developer:
  - Avoide nesting, nesting use more compute power means more time complexity.

### 🗄️ Connecting MongoDB via Node.js

- To establish connection with MongoDb in Node.js, for that we use `mongodb` module.
-

```sh
npm install mongodb
```

- `require()` mongodb module.
- This module has property called `MongoClient` which helps to establish connection using `connect()` method with MongoDB.
- `MongoClient.connect()` takes URL as an argument and return a Promise.
- To resolve Promise in MongoDB we use `.then().catch()` because `connect()` does not support `async await` in latest version.
- Database act as layer of server, if database connection is failed so server should be crash.
- To crash(kill) server we call exit method from process and pass 0:

```js
// in .catch()
process.exit(0);
// exit nodemon then check because nodemon recompile code
```

```js
const { MongoClient } = require("mongodb");

const conn = MongoClient.connect("mongodb://localhost:27017");

conn
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.error("❌ Database connection failed!", err.message);
    process.exit(1); // 1 = failure, 0 = success exit

    // 1 = failure, 0 = success exit  learn more about it
  });
```

# 🧿 Day - 15 Nodejs Conditional Statements

### HTTP & HTTPS

- To create server we use Node.js built-in modules:
  - `http`
  - `https`
- Also keep in mind about `stateful` and `stateless` protocals.
- Generally we follow stateless protocal because server disconnect after response.
- HTTP and HTTPS are stateless protocols, meaning once the server sends a response, it closes the connection.
- Stateful protocols maintain connection after response (example: WebSockets).

### IP Address & Ports

- IP address is a numeric representation of domain name or any digital identity.

- Port Numbers: Numeric identifiers for protocols. Common ones:

  - `HTTP` → 80
  - `HTTPs` → 443
  - `SSH` → 22
  - `MongoDB` → 27017

### Node.js Server vs Other Languages

- Node.js is a JavaScript runtime environment that has capability to create server.
- Other progeamming language uses some software for that like:
  - PHP → Apache
  - Java → Tomcat

#### ⚡ Limitation:

- But Node.js has some limitation:

  - Development environment → Node.js is enough.
  - Production environment → Usually deployed with Node.js + Nginx (for load balancing, reverse proxy, SSL, caching, etc.).

### Response Handling

- `res.end()` function along with sending request to client, it disconnect from server (close the connection), that means it follows the stateless protocal.

### Agile & Scalability

- According to Agile development if you want to make a software scalabe you must follow a pattern.

### Node.js Modules

#### Third Party Module

- Moment (date/time manipulation)
- Nodemon (auto-restart server)
- MongoDB (database driver)

#### Built-in Module

- http
- queryString
- url (important to learn)

### Request & Query String

- `req.url` gives query String
- To read that query String we have to convert it into object first for that we have `queryString` moddule.
- Query strings must be parsed into an object using the `querystring` module.

#### Example 1 – Nested Condition (❌ not recommended)

```js
const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  const { name, password } = queryString.parse(req.url.slice(2));

  if (name === "shiv") {
    if (password === "1234") {
      res.statusCode = 200;
      res.end("Success");
    }
  } else {
    res.statusCode = 401;
    res.end("User does not exist.");
  }
});

server.listen(8080);
```

- The data which is send with the help of request (client), is called `payload`.
  ⚠️ Note:
- The data which we receive from url or queryString, it is always a String even if you pass numbers or booleans.

- Code nesting requires more compute power, so it is not allowed in production.
- Senior developer ignore `else`, to do that handle failure first using `if` and `return`.

#### Example 2 – Improved Version (✅ production style)

```js
const http = require("http");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
  const { name, password } = queryString.parse(req.url.slice(2));

  if (name !== "shiv") {
    res.statusCode = 401;
    res.end("User does not exist, please register to login");
    return;
  }

  if (password !== "1234") {
    res.statusCode = 401;
    res.end("Invalid Password!");
    return;
  }

  res.statusCode = 200;
  res.end("Login Success.");
});

server.listen(8080);
```

✅ Here we handle failures first and avoid deep nesting. This improves readability and performance.

# ⚛️ Day - 16 Node.js API

### 🔹 Definition

- API stands for Application Programming Interface.
- It is a way to write server code efficiently, making it independent of the client.
- APIs allow different applications or systems to communicate with each other.

### 🔹 How APIs Work

- Server-side code can be written in any backend language:
  - PHP, Node.js, Python, Java, Go, etc.
- The API then exposes functionalities that can be consumed by client-side applications:
  - JavaScript (JS), React, Angular, Vue.js, PHP, Java, Go, etc.

### 🔹 Example Use Case: Video Calling

- Earlier (Old Way – SDKs)
- SDKs were language-dependent, requiring separate implementations for PHP, Node.js, Java, etc..
- Now (Modern Way – APIs)
- APIs are language-independent → one API works for all clients regardless of language.

### 🔹 Types of APIs

#### 1. SOAP (Simple Object Access Protocol)

- Uses XML format for requests & responses.
- Considered outdated (heavy and verbose).
- Traditionally used for server–client data transfer.
- Example:

```xml
<salary> 2000 </salary>
<employee> Employee Name </employee>
```

- XML = Xtensible markup language used for data transfer.

#### 2. REST (Representational State Transfer)

- Modern approach.
- Sends responses in JSON format (after many innovations).
- JSON transfers data in the form of objects.
- Example:

```json
{
  "salary": 2000,
  "employee": "Employee Name"
}
```

### 🔹 Key Differences Between SOAP & REST

| Feature          | SOAP (Old)              | REST (Modern)             |
| ---------------- | ----------------------- | ------------------------- |
| Data Format      | XML                     | JSON (lightweight)        |
| Complexity       | Complex, heavy          | Simple, widely used       |
| Status           | Outdated                | Industry standard         |
| Language Binding | Language-dependent SDKs | Language-independent APIs |

### ✅ Conclusion:

APIs provide a bridge between server and client, making development easier, faster, and independent of language or platform.
Modern APIs use REST + JSON for efficient and flexible data transfer.

## How to create REST API

1. Always return responses in JSON format.
2. Send an appropriate HTTP status code with every response.
3. Declare endpoints (URLs that represent resources).
4. Use the correct HTTP method to define the action (CRUD).

#### endpoint example

```js
http://localhost:8080/users
http://www.codingott.com/courses

- Here, `/users` is the endpoint (resource)(interms of backend)
```

### How to get endPoint:

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const endPoint = parsedURL.pathname;

  console.log(endPoint);

  res.end(`EndPoint: ${endPoint}`);
});

server.listen(8080);
```

### 🔹 CRUD Operations in REST API

- Generally when we create APIs, we do mainly 4 things and this is called CRUD.
- Each resource usually supports 4 main actions:

  - Create (Store)
  - Fetch (Read)
  - Update
  - Delete

- This is the rule for creating REST API : for single task there should be one endpoint.
- So with same endpoint how you perform 4 different task or when your endpoint perform which task to do that we use http methods.
- Example: `/users` is the same endpoint, but the HTTP method decides the action.
- there are multiple type of http methods but we generally use 6 of them:

- http methods / http request method

  - GET → Fetch/read data (default if no method is specified).
  - POST → Create (store) new resource.
  - PUT → Update a resource (replace entire object).
  - PATCH → Partial update (rarely used but useful).
  - DELETE → Remove resource.
  - OPTIONS → Used automatically by browsers to check which methods are allowed (important for CORS preflight)
  - HEAD → Same as GET but returns only headers (no body).

### 🔹 Status Codes

- 200 → Success (OK)
- 201 → Resource created
- 400 → Bad request
- 404 → Resource not found
- 405 → Method not allowed
- 500 → Server error

- `req.method` method property returns which method is used by client for a particular endpoint.

- Whenever client sends a request for a particular endpoint via URL, request method will be GET by default.

### 🔹 API Testing Tools

- For http method testing we use API testing tools, there are multiple tool for that

  - Thunder Client → lightweight VS Code extension.
  - Postman (recommended) → industry standard, widely used for manual API testing.

- `res.end()` `end()` method does not accept object. but according to API rule we have to send JSON data in object format for that we will convert object into string using `JSON.stringify()` method.
- `res.end(data)` → ends response, sends string, buffer or no argument.
- Since JSON must be a string, we use `JSON.stringify(object)`.

```js
if (method === "GET") {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Here is you fetched data." }));
  return;
}
```

- But there is a problem to make readble to client we need JSON data but we are sending string for that we use `res.writeHead(statusCode, header)` writeHead(statusCode, header) method takes 2 arguments `statusCode` and `header`

- `res.writeHead(statusCode, headers)` → sets status code & headers.

```js
if (method === "GET") {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Here is your fetched data." }));
  return;
}
```

- content-type for some formats:
  - Video
    - video/mp4
  - Image
    - image/jpeg
  - PDF
    - application/pdf
  - JSON
    - application/json

✅ Final Takeaway:
A REST API is built around endpoints (resources) + HTTP methods (actions). Always return JSON responses with proper status codes.

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const endPoint = parsedURL.pathname;
  const method = req.method;

  if (endPoint !== "/products") {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: `${endPoint} not found.` }));
    return;
  }

  if (method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products fetched." }));
    return;
  }

  if (method === "POST") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products added." }));
    return;
  }

  if (method === "PATCH") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products updated." }));
    return;
  }

  if (method === "DELETE") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products deleted." }));
    return;
  }

  res.writeHead(405, { "content-type": "application/json" });
  res.end(JSON.stringify({ message: "Method not allowed!" }));
});

server.listen(8080);
```

# Day - 17

```js
const http = require("http");
// const url = require("url");
const server = http.createServer((req, res) => {
  // const parsedURL = url.parse(req.url);
  // const endPoint = parsedURL.pathname;

  const url = req.url;
  const method = req.method;
  const type = {
    "content-Type": "application/json",
  };

  if (url !== "/user") {
    res.writeHead(404, type);
    res.end(JSON.stringify({ message: "Endpoint not found." }));
    return;
  }

  if (method == "GET") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User matched." }));
    return;
  }

  if (method == "POST") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User created." }));
    return;
  }

  if (method == "PUT") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User updated." }));
    return;
  }

  if (method == "DELETE") {
    res.writeHead(200, type);
    res.end(JSON.stringify({ message: "User deleted." }));
    return;
  }

  res.writeHead(405, type);
  res.end(JSON.stringify({ message: "Endpoint not found." }));
});

server.listen(8080);
```
