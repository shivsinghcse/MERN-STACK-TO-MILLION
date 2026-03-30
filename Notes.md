#  1 - 45 --> Small range 
#  46 - 108 --> Mid range 
#  109 - 183 --> Enterprise range 


# 🎯 Day-1 Onboarding to Workshop

## Project vs Product

### 📌 Project

- A project is built mainly to showcase skills, learn, or for self-satisfaction.

- It runs fine on your own system, but:

  - Different users may have different setups (RAM, CPU power, internet speed, browsers, OS versions, etc.)

  - So, the same performance/experience cannot be guaranteed for all users.

**Goal**: Learning, experimenting, or demonstrating capability.

### 📌 Product

- A product is software, built with real users in mind.

- It must work reliably across different devices, browsers, and environments.

- While building a product, we mainly focus on:

  - **Scalability** → Can the system handle growth (more users, more data) while continuing in the same codebase?

  - **Robustness** → Can it handle failures, edge cases, and unexpected inputs?

  - **Maintainability** → Is the codebase clean, modular, and easy to update in the long run?

**Goal**: Delivering value to users with consistent performance and reliability.

## Roadmap:

- we will build:
  - **Small range application** : cover basics
  - **Mid range application** : Job ready with project
  - **Enterprise application** : Product development

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
- **Pros**: Cost-effective, simple to set up.

- **Cons**: Limited performance, less secure, not scalable (if traffic spikes, all websites slow down).

- **Example**: Small blogs, portfolio sites, smaller/mid level applications.

#### 2. Cloud Server ☁️

- Hosted on cloud infrastructure (AWS, Azure, GCP, DigitalOcean, etc.).

- Provides virtualized resources(dedicated CPU) that scale on demand.
- In software world everything is depend on data and we store data in data centers, data centers are nothing but infinite collection of Harddisk, which stores data(text, image, audio, video etc)

- Data centers serves data based on edge location (nearest location), if data is not present at nearest data center it fetches data from origin server, cache it and serve it.

- Some compnies like GoDaddy, BigRock also promise that they provide cloud servers, web hosting is not only cloud server, it provide other multiple services also like team observe, code safety & security, robust architucture, scale
- **Pros**: Highly scalable, secure, reliable, pay-as-you-go.

- **Cons**: More expensive than shared hosting, requires technical setup.

- **Example**: Enterprise apps, e-commerce, social media platforms.

##### 👉 In short:

- Shared Server = Budget option, limited power.

- Cloud Server = Scalable, reliable, modern standard.

### 🌐 Hosting

- When we keep our source code on a server so that it can be accessed by users over the internet, it is called Hosting (or Web Hosting).

- Hosting makes your application publicly available instead of running only on your local machine.

### 🔑 Types of Hosting

1. **Shared Hosting** → Multiple websites share the same server.

2. **Cloud Hosting** → Application is hosted on cloud infrastructure (AWS, GCP, Azure, etc.).

3. **Dedicated Hosting** → A full physical server is dedicated to one application.

4. **VPS Hosting** → A physical server is divided into virtual servers, each with dedicated resources.

5. **Serverless Hosting** → Code runs on demand without managing servers (e.g., AWS Lambda, Vercel, Netlify).

#### 👉 In short:

- Hosting = Putting your code on a server so everyone can access it.

- **Example**:

  - **GitHub Pages** → Free static hosting.
  - **Vercel/Netlify** → Modern frontend hosting.
  - **AWS/Azure/GCP** → Enterprise-level hosting.

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

- 👉 Knowing basic hardware configurations (CPU, RAM, Storage, Network) helps you write efficient and machine-friendly code.

### Making a machine (CPU) Server / Web Server:

- Any Machine (CPU) is not a web server by default because it is not configured to handle HTTP requests.
- So to make it web server we have to install some software depend on need:
  - Node.js
  - Nginx
  - Apache
  - Tomcat
- Once configured, the machine gets a default IP address: `127.0.0.1`(loopback address) and domain name for this IP Address is `localhost`.
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

### Server & Serverless Architecure

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

- Download & install **MongoDB community server download**
- Download & install **MongoDB shell** (mongosh)
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

- If not working goto `startmenu -> services -> mongodb server` check if it is start or not. if not started, start that.
- Still not working → Reinstall MongoDB correctly.

- Rare case: Even though it not working that means some certificate file can be missing in your windows (OS).In this case you have to install new OS.

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

- To use/change or create a database:

```shell
  use "databasename"

```
- **Remember**: In MongoDB, a database is not actually created until it gets content!

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
- Example: A landing page should load within 3 seconds -→ projection helps.
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

### Assignment

#### Insert a single document into the students collection with fields: name, age, grade, and city.

```js
db.students.insertOne({
... name: 'ajeet',
... age: 21,
... grade: 12,
... city: 'lucknow'
... })
```

#### Insert multiple documents into the books collection with fields: title, author, price, and category. Add at least 4 books.

```js
db.books.insertMany([
...     {
...         title: "the psychology of money",
...         author: "morgan housel",
...         price: 290,
...         category: "finance"
...     },
...     {
...          title: "rich dad poor dad",
...         author: "robert t kiyosaki",
...         price: 389,
...         category: "finance"
...     },
...     {
...         title: "quantum machanics",
...         author: "Jaivir singh",
...         price: 105,
...         category: "science"
...     },
...     {
...         title: "don't belive everything you think",
...         author: "joseph nguyen",
...         price: 196,
...         category: "self help"
...     },
...     {
...         title: "manifest miracles",
...         author: "rajitha vanga",
...         price: 192,
...         category: "self help"
...     },
...     {
...         title: "the diary of a CEO",
...         author: "stavenbartlett",
...         price: 626,
...         category: "business"
...     }
... ])
```

#### Retrieve all documents from the students collection.

```js
 db.students.find()
```

#### Retrieve all documents from the books collection but only return the title and author.

```js
db.books.find({}, {title: 1, author: 1, _id: 0})
```

#### Retrieve a single book from the books collection where the title is "JavaScript Basics", but only return the title and price.

```js
db.books.findOne({title: "JavaScript Basics"}, {title: 1, price:1, _id:0})
```

#### Retrieve all documents from the students collection but return only name and age.

```js
db.students.find({}, {name: 1, age: 1, _id: 0})
```

#### Retrieve the first document from the books collection where the category is "Technology" and return only title and author.

```js
db.books.findOne({category: 'Technology'}, {title: 1, author: 1, _id: 0})
```

#### Retrieve only 3 documents from the students collection using limit().

```js
db.students.find().limit(3)
```

#### Retrieve only 2 books from the books collection using limit().

```js
db.books.find().limit(2)
```

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
- In pagination we do not change limit, change `skip()`
- Formula: `skip((p-1)*limit)`
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

### Assignment:

#### How can you limit the result to show only 10 documents?
```js
	db.collectionName.find().limit(10);
```  
#### How do you sort documents in ascending order based on a field called name?
```js
	db.collectionName.find().sort({name: 1});
```  
#### How do you sort documents in descending order based on a field called createdAt?
```js
	db.collectionName.find().sort({createdAt: -1});
```  
#### How can you skip the first 5 documents and display the next 10?
```js
       db.collectionName.find().skip(5).limit(10);
```       
#### How do you count the total number of documents in a collection?
```js
	db.collectionName.countDocuments();
```  
#### How can you count the number of documents where status is "active"?
```js
	db.collectionName.countDocuments({status: 'active'});
```  
#### How do you update a single document where email is "test@example.com" to set verified to true?
```js
	db.collectionName.updateOne({email: "test@example.com"}, {$set: {verified: true}});
```  
#### How do you update all documents where category is "books" by adding a new field discount with a value of 15%?
```js
	db.collectionName.updateMany({category: 'books'}, {$set: {discount: 15}});
```  
#### How can you delete one document where status is "inactive"?
```js
	db.collectionName.deleteOne({status: 'inactive'});
```
#### How can you delete all documents where expired is true?
```js
	db.collectionName.deleteMany({expired: true})
```  
#### How can you find the first 5 documents sorted by price in descending order?
```js
	db.collectionName.find().limit(5).sort({price: -1});
```  
#### How can you find and display only the name and email fields for all users?
```js
	db.collectionName.find({}, {name: 1, email: 1, _id: 0});
```  

#### How do you find documents where age is greater than 25?

```js
	db.collectionName.find({age: {$gt: 25}})
```  
#### How do you find documents where price is between 100 and 500?

```js
	db.collectionName.find({price: {$gt: 100, $lt: 500}})
```  
#### How can you find all documents where tags contain "mongodb"?

```js
	db.collectionName.find({tags : "mongodb"})
```

#### How do you update only the lastLogin field for a user with username: "john_doe"?

```js
	db.collectionName.updateOne({{username: "john doe"}, {$set: {lastLogin: new Date()}}})
```

#### How can you remove a specific field (e.g., discount) from all documents?

```js
	db.collectionName.deleteMany({}, {$unset: {discount: ""}})
```  

👉 $unset removes only the field, keeping the rest of the document intact.

#### How do you find the total number of documents where rating is greater than 4.5?
```js
	db.collectionName.countDocuments({rating: {$gt: 4.5}})
```  

#### How can you update a document only if it exists, and insert a new one if it doesn’t (upsert)?
```js
	db.collectionName.updateOne({field: "value"}, {$set: {field: "value"}}, {upsert: true})
```

#### How can you delete the oldest document based on createdAt?
```js
	db.collectionName.findOneAndDelete({}, { sort: { createdAt: 1 } })
```  



# 🔥 Day-05 MongoDB Operators
- Above content is 90% sufficent for smaller and mid range application.

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

```js
// syntax
db.collection.find({field: {$operator: value}})

// example-1
db.products.find({price: {$gte: 999}})

// example-2
db.products.find({price: {$gt: 1000}}).sort({price: 1}).limit(4)

// example-3
db.products.find({price: {$gte:1000, $lte: 2000}}).sort({price: 1}).limit(5)

// example-4
db.payments.find({amount: {$gte: 249, $lte: 999}, status: "success"}, {amount:1, status:1}).sort({amount: 1}).limit(5)
```
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
  - `s` -> dot all mode (dot `.` matches newlines) / sensitive

```js
db.collection.find({ field: { $regex: "pattern", $options: "i" } });
```

- Example

```js
db.users.find({ name: { $regex: "^a", $options: "i" } });
// Finds all names starting with "a" or "A"
```
- For the backup of data we export data in MongoDBCompass.

# 🔥 Day-06 MongoDB Arrar
### Data Structure
- The way to group data
  - Array
  - Object
  - Array of objects


- How to fetch only `colors` field which is an array

```js
db.shirts.find({}, {colors: 1, _id: 0})
```
### Slice operator: 
- But if you want to fetch limited data from that array for that we use `$slice` operator

```js

db.shirts.find({}, {colors: {$slice: 2}}) // ["Black", "Pink"]

// it will return array of 2 element from start

db.shirts.find({}, {colors: {$slice: -2}}) // ["White", "Red"]

// it will return array of 2 element from end

```
- But if you want to fetch data of a particular range from array

- `db.shirts.find({}, {field: {$slice: [skip, limit]}})`

- `skip` means how many element you want to skip from start
- `limit` means how many next element you want

```js
db.shirts.find({}, {colors: {$slice: [1, 2]}})
// it will skip first 1 element and give next 2 element
```
- `$slice` operator is always used in array and apply in projection it makes cost effective and fast.

### $in and $all operator
- `$in` and `$all` operators are used to match data like query parameter.
- Both works similar to AND(&&), OR (||) operator
  - `$in` works like `||`
  - `$all` works like `&&`

- We write it in place of query parameter.

- The value of `in` and `all` must be an array

```js
db.shirts.find({colors: {$in: ["Black", "Orange"]}})

db.shirts.find({colors: {$all: ["Black", "Orange"]}})
```

- If you want to update multiple ids, use updateMany() with `$in` operator

```js
db.shirts.updateMany({_id: {$in: [ObjectId('68e146c351142379318907c0'), ObjectId('68e146c351142379318907c1')]}}, {$set: {stock: 115}})
```

### $push Operator
- If you want to add data in array, we use `$push` operator it add element at the end of the array.

- $set operator is used when field is not array or array of objects.

```js
db.shirts.updateOne({_id: ObjectId('')}, {$push: {colors: "Cyan"}})
```

- If you want to add multiple element to the array for that we use `$each` operator and it takes array as a value
```js
db.shirts.updateOne({_id: ObjectId('68e146c351142379318907c0')}, {$push: {colors: {$each: ["Gray", "Pink"]}}})
```
- But there is a problem with `$push` operator it allows duplicates, so in production we use `$addToSet` instead of `$push`. it does the same job but don't allow duplicates
```js
db.shirts.updateOne({_id: ObjectId('68e146c351142379318907c0')}, {$addToSet: {colors: "Pink"}})

db.shirts.updateOne({_id: ObjectId('68e146c351142379318907c0')}, {$addToSet: {colors: {$each: ["Blue", "Brown"]}}})
```
- If You want to add an element of a particular index of an array. for that we use `$position` operator and we use it with `$each` operator.

```js
db.shirts.updateOne(
  { _id: ObjectId('68e146c351142379318907c0')},
  {
    $push:{
      colors: {
        $each: ["Dodgger Blue", "Aqua"],
        $position: 2
      }
    }
  }
)

//  It is not working with $addToSet
db.shirts.updateOne({_id: ObjectId('68e146c351142379318907c0')}, {$addToSet: {colors: {$each: ["Dodgger Blue", "Aqua"], $position: 1}}})

// You can use $sort operator also 1-assending, -1 descending, use $position if you are not sorting 
db.shirts.updateOne(
  { _id: ObjectId('68e146c351142379318907c0')},
  {
    $push:{
      colors: {
        $each: ["Dodgger Blue", "Aqua"],
        $position: 2,
        $sort: 1
      }
    }
  }
)

```
### `$pop` Operator
- We used `$pop` operator to remove the element from an array
```js
// Syntax
{$pop: {field: 1}} // 1 means remove 1 element from end
{$pop: {field: -1}} // -1 means remove 1 element from start
```
- Example

```js
db.shirts.updateOne(
  {_id: ObjectId('68e146c351142379318907c0')},
  {
    $pop: {
      colors: 1
    }
  }
)

db.shirts.updateOne(
  {_id: ObjectId('68e146c351142379318907c0')},
  {
    $pop: {
      colors: -1
    }
  }
)
```

### `$pull` Operator:
- It is also used to remove data from an array, but here you remove data after matching conditionally.

```js
db.shirts.updateOne(
  {_id: ObjectId('68e146c351142379318907c0')},
  {
    $pull: {colors: "Grey"}
  }
)

// if there are multiple elements with same values, it removes all matching fields
```
- If you want to remove multiple data, use `$pillAll` operator.
```js
db.shirts.updateOne(
  {_id: ObjectId('68e146c351142379318907c0')},
  {
    $pullAll: {colors: ["Black", "Blue"]}
  }
)
```

## Array of objects

### `$elemMatch` operator
- This operator is only works with array of objects.
- It returns documents, if field and value matches
```js
db.items.find({variants: {$elemMatch: {sku: "WE-SM-101"}}})
```

- We can use `$slice` operator in array of objects also

```js
db.items.find({}, {variants: {$slice: 1}})
```
- We can also and $push and $pull in array of objects

```js
db.items.updateOne({_id: ObjectId('68e1eb9b78c468e9411e5ff7')}, {$push: {variants: {size: "Large", quantity: 55, sku: "UP-LG-001"}}})
```
- If you want to delete a documents of a collection
```js
db.items.deleteOne({_id: ObjectId('68e1eb9b78c468e9411e5ff7')})
```
- If you want to delete all documents of a collection
```js
db.items.deleteMany({})
```
- If you want to delete some documents of a collection
```js
db.items.deleteMany({_id: {
  $in: [
    ObjectId('68e1eb9b78c468e9411e5ff7'),
    ObjectId('68e1eb9b78c856e9411e5fe7'),
    ObjectId('68e1eb9b78c468f9411e5fd7')
  ]
}})
```
<mark>Intermediate Level Complete: 95% development task can be done via this.</mark>

# 🧿 Day-07 MongoDB Aggregate
<mark>Enterprise Level Started : 5%</mark>

## Aggregation Pipelines <mark>imp.</mark>
- Aggregation operations allow you to group, sort, perform calculations, analyze data, and much more.

- Aggregation pipelines can have one or more "stages". The order of these stages are important. Each stage acts upon the results of the previous stage.

### aggregate() 
- It is used for complex query (nested calculation)
- It can also perform all task (eg: fetch, countDocuments, update, limit etc) but it does not means that you perform small task, it is used for complex task
- It uses more compute power. Your server should have 4GB of RAM, You can also perform with less RAM while number of concurrent user are less. Otherwise there can be multiple types of problem:
  - Server stuck (It will not accept request and send response - Solution: restart server cpu)
  - Database can freez (can not  perform DB operations)

- max 10k/sec traffic mid range application, here we avoid aggregate pipeline , it is not cost effective.

- To work in `aggregate` we use `stage`. For every task there is different `stage`s. In aggregate something which is start with `$` is called `stage`.

- `aggregate` has multiple `stage`
  - $match (query parameter/match)
  - $project (projection)
  - $limit (limit)
  - $skip (skip)
  - $count (countDocuments)
  - $sample ( fetch random data)(useCase: youtube suggested video- buid via AI/ML like feature - but for starting we use it, you can recomonded system)
  - $addFields (create any specific field, it takes any data)
  - $cond (condition --> if/else)
  - $switch (switch case) 

- Every stage has seprate body wrapped in `{}`
  - {$match}

- `stage` should be inside an object and the value of `stage` also should be an `{}`

```js
// syntax
aggregate([])

// if you did not give any stage it will perform like find()
db.books.aggregate()
db.books.aggregate([])
// both performs like find()


// query match
db.books.aggregate([
  {
    $match: {title: "rich dad poor dad"}
  }
])
// it returns an document

// projection
db.books.aggregate([
  {
    $match: {title: "rich dad poor dad"}
  },
  {
    $project: {
      title: 1, 
      price: 1,
      _id: 0
    }
  }
])
// it returns an array of object


// limit

db.books.aggregate([
  {
    $project: {
      title: 1, 
      price: 1,
      _id: 0
    }
  },
  {
      $limit: 2
  }
])
// it returns an array of object

// skip
// here order matter in skip and limit
db.books.aggregate([
  {
    $project: {
      title: 1, 
      price: 1,
      _id: 0
    }
  },
  {
    $skip: 2
  },
  {
    $limit: 2
  }
])

db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  }
])
// aggregate pipeline is latest feature in mongodb
// $sort
db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  },
  {
      $sort: {
      "price": 1
    }
  },
  {
    $project:{
      "title": 1,
      "price": 1,
      "_id": 0
    }
  }
])

// problem statement : i want to insert a new field "amount" and value of this should be price or name price field as amount or how to read a field value
// inside $project stage if you want to read any field value use $ before fieldname and wrap it in single quote '$fieldname'



db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  },
  {
      $sort: {
      "price": 1
    }
  },
  {
    $project:{
      "title": 1,
      "amount": '$price',
      "_id": 0
    }
  }
])


// inside $project if create any field during runtime you can set static data as value but it should be string if you want to keep number you have to perform some calculation - 


db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  },
  {
      $sort: {
      "price": 1
    }
  },
  {
    $project:{
      "title": 1,
      "amount": 'Shiv', // it will work
      "_id": 0
    }
  }
])

// but if you write number it won't


db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  },
  {
      $sort: {
      "price": 1
    }
  },
  {
    $project:{
      "title": 1,
      "amount": 199, // it will not work, it will skip this field
      "_id": 0
    }
  }
])

// $ sample - give random documents

db.books.aggregate([
  {
    $sample: {size: 2}
  }
])

// $addFields - create a specific fields

db.books.aggregate([
  {
    $addFields: {
      tax: 12,
      gst: 18
    }
  }
])
```


#### Aggregation `$match`
- This aggregation stage behaves like a find. It will filter documents that match the query provided.
- Using `$match` early in the pipeline can improve performance since it limits the number of documents the next stages must process

```js
db.books.aggregate([
  { $match: {_id: ObjectId('68ad5d4a1000155643eec4af')} }
])
```
- This will only return document that have `_id` of `68ad5d4a1000155643eec4af`


#### Aggregation `$limit`
- This aggregation stage limits the number of documents passed to the next stage.

```js
db.books.aggregate([
  {$limit: 3}
])
```
- This will return 3 documents from collection.

#### Aggregation `$project`
- This aggregation stage passes only the specified fields along to the next aggregation stage.
- This is the same projection that is used with the `find()` method.

```js
  db.books.aggregate([
    {$project: {
      "title": 1,
      "price": 1,
      "_id": 0
    }},
    {
      $limit: 3
    }
  ])

  // by mistake if you write any field which does not exist so it will skip that.It won't through error.
```
- This will return the documents but only include the specified fields.

- Notice that the `_id` field is also included. This field is always included unless specifically excluded.
- We use a `1` to include a field and `0` to exclude a field.
- In production (real world) never hide `_id`.
- **Note**: You cannot use both 0 and 1 in the same object. The only exception is the _id field. You should either specify the fields you would like to include or the fields you would like to exclude.

#### Aggregation `$sort`
- This aggregation stage groups sorts all documents in the specified sort order.
- Remember that the order of your stages matters. Each stage only acts upon the documents that previous stages provide.
- The sort order can be chosen by using `1` or `-1`. `1` is `ascending` and `-1` is `descending`.

```js
db.books.aggregate([
  {
    $match: {
      "price": {
        $gte: 99,
        $lte: 300
      }
    }
  },
  {
      $sort: {
      "price": 1
    }
  },
  {
    $project:{
      "title": 1,
      "price": 1,
      "_id": 0
    }
  }
])
```

- This will return the documents sorted in ascending order by `price` field.

#### Aggregation `$addFields`

- This aggregation stage adds new fields to documents

```js
db.books.aggregate([
  {
    $addFields: {
      tax: 12,
      gst: 18
    }
  }
])
```
- This will return the documents along with a new field, `tax, gst`.


#### Aggregation `$cond`


```js
grade: {
        $cond: {
          if: {
            $gte: ["$percentage", 60]
          },
          then: "A",
          else: "B"
        }
      }
```

#### Aggregation `$switch`

```js
grade: {
        $switch: {
          branches: [
            {
              case: {$gte: ['$percentage', 90]},
              then: "A+"
            },
            {
              case: {$gte: ['$percentage', 80]},
              then: "A"
            },
            {
              case: {$gte: ['$percentage', 70]},
              then: "B"
            },
            {
              case: {$gte: ['$percentage', 60]},
              then: "C"
            }
          ],
          default: "D"
        }
      }
```

### Problems

#### how to find sum of marks array:
- Use `$addFields` stage and use `$sum` operator to calculate sum of all array elements 

```js
db.students.aggregate([
  {
    $addFields:{
      totalMarks: {$sum: '$marks'}
    }
  }
])
```
- And now totalMarks is calculated so there is no need of marks array for that use `$project`

```js
db.students.aggregate([
  {
    $addFields:{
      totalMarks: {$sum: '$marks'},
      totalSubjects: {$size: '$marks'},
    }
  },
  {
    $addFields: {
      percentage: {$divide: ['$totalMarks', '$totalSubjects']}
    }
  },
  {
    $addFields: {
      grade: {
        $cond: {
          if: {
            $gte: ["$percentage", 60]
          },
          then: "A",
          else: "B"
        }
      }
    }
  },
  {
    $project: {
      marks: 0,
      totalSubjects: 0
    }
  }
])
```

- here $project works on addFields, and addField already gives data and from that data $project hides marks field

- $size operator kisi property ka member hota hai
- One stage can be use multiple time
- Jo field jis body/stage me bana hai us field ko usi body me read nahi kar sakte ho
- to divide use `$divide` operator and it takes an array

#### Aggregation `$cond`



# Day-08 Aggregation Business Problem

#### Aggregation `$unwind`
- It creates multiple documents based field which is an array
- Total documents == number of elements in array

```js
db.products.aggregate([
  {$unwind: "$tags"}
])
```
#### Aggregation `$group`
- It is important and havely used in aggregate.
- There is 90% chances that you are using aggregate because of group
- Agile says data (code pattern) should be centralized.
- It removes duplicate data.

```js
db.products.aggregate([
  {
    $group: {
      _id: "$category"
    }
  }
])
```

```js
// total products
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalProduct: {$sum: 1}
    }
  }
])
```

```js
// total stocks price
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalProduct: {$sum: 1},
      totalStocks: {$sum: 
        {$multiply: ['$price', '$stock']}
      }
    }
  },
  {
    $addFields: {
      category: "$_id",
    }
  },
  {
    $project:{
      _id: 0
    }
  }
])
```

```js
db.payments.aggregate([
... {
...   $group: {_id: "$status"}
... }
])
```

```js
db.payments.aggregate([
... {
...   $group: {
...       _id: "$status",
...       noOfPayments: {$sum: 1}
...     }
... }
])
```
```js
db.payments.aggregate([
  {
    $group:{
      _id: "$status",
      noOfpayments: {$sum: 1},
      totalPayment: {
        $sum: "$amount"
      } 
    }
  }, 
  {
    $addFields: {
      status: "$_id"
    }
  },
  {
    $project: {
      _id: 0
    }
  }
])
```

```js 
// how much and how many times a used payed

db.payments.aggregate([
  {
    $group: {
      _id: "$userId",
      noOfPayments: {$sum: 1},
      totalPayment: {$sum: "$amount"}
    }
  }
])
```

# 😀 Day-09 MongoDB JOIN

- You can install MongoDB Software at 2 places
  - A server where you hosted the website (this approach is called un-managed database, manage by self - here you can not manage scalability) - use as a startup
  - A dedicate Database server (cpu) [Big player do this - if 10k/sec traffic] {managed database - cloud engineer manage from AWS, Azure,  GCP, etc.}


- Every collection has limit of 1GB(recomonded size, scale for more than this), don't store more than 1GB, we only store text data, we do not store binary data in database store it in harddisk, we store reference of that


- Primary Cloud (expensive)
  - AWS
  - GCP
  - Azure
- Secondary Cloud (Affordable)
  - Digital Ocean
  - Linode
  - Vulture
  - Utho

### MongoDB Atlas 
- Atlas is service provided by MongoDB
- It is another way using MongoDB on cloud
- here you can take managed database (choose any of them: AWS, GCP, Azure)
- Direct setup of database on AWS, GCP, Azure is cost effecctive as compare to Atlas, but it need technical knowladge.

### JOIN in MongoDB

- To link two documents of different collections we use _id.

- To perform the tihs we use `join` operation -> to perform join operation we use `$lookup` stage

```js
db.userPayments.aggregate([
  {
    $lookup:{
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  }
])
```
- **from** - from which collection you want to fetch document
- **foreignField** - which field you write in current collection to connect both collection
- **localField** - name of field in which you store foreign key
- **as** - name in which you want to stored fetched value 

### Atlas
- Generally server is called cluster
- Name of cluster sholud be appName+DB
- If you have global customer base choose Region: Singapore because fast data deliver accross ASIA, if country is outside of ASIA in this case AWS cloudfront we will use, otherwise select Mumbai
# 🚀 Day-10 Node.js Onboarding

### 🌍 Running a Web Application

- If you are creating web apps, to run a web app you need atleast 2 computers.

  1. Client (User's computer) - The machine where the user opens the browser and interacts with the app.
  2. Server (Hosting Machine) – A powerful computer with 24×7 electricity and high-speed internet, responsible for handling client requests.

- 👉 Keeping code on a server, so it can be accessed worldwide is called Web Hosting / Website Hosting / Deployment.

### 📈 Traffic

- **100k traffic** : means 100,000 total visits ( not necessarily unique users) to the website over a period of time (e.g., per day, per month, etc. ).
- **100k concurrent traffic** : 100,000 users accessing the website at the same time ( per second - simultaneous active users at a specific moment ).

### 🔄 Request & Response

- **Request :** When a user perform an action (e.g., typing in search bar and pressing Enter) is called request.

- **Response :** The data/resource the server sends back to the client for that request is called response.

### ⚡ Latency

- The total time taken for a request to reach the server and for the response to come back, is called Latency.

- **Low Latency**: Faster loading (response) and better user experience.

- **Best Practice**: For landing pages, latency should be 3s to 5s maximum.

### 👩🏼‍💻 Client-side & Server-side Language

- To run fully functional website you need two type of language:
  - Client-Side language
  - Server-Side language
- **Client-side :** The language which runs on client's computer (browser) is called client side language. ex - HTML, CSS, JavaScript, VBScript(outdated).
- **Server-side :** The language which runs on server is called server-side language. ex - Node.js, php, Laravel, CodeIgnitor (CI), Java, python, c++, .Net, C#.

### 🌐 Types of Websites

1. **Static Website** (Raw coded)

- Built using only HTML, CSS, and JavaScript.
- Content is fixed and does not change dynamically.

2. **Dynamic Website**
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
- It is not necessory that whole application is made in one language.
- **Node.js** → Best for Network-Centric Applications (real-time data transfer)
  - Video Streaming (Youtube, Amazon Prime, Netflix, Zoom, Google Meet)
  - Chat Applications
  - IoT Applications
- **PHP** → Strong in E-commerce & Cloud Telephony (IVR systems)

- **Java & .NET** → Best for Transactional Security (e.g., Banking, Enterprise apps)
- **Python** → Best for AI/ML, Data Science & Automation

> For AI/ML there is no language dependency

⚠️ Note: No language or server is secure by default.

- Security comes from developer’s logic and implementation (experience matters).

### 🚀 Building a Startup – Key Points

- Keep in mind 3 major factors when building products:
  1. **Cost Effective** – Should fit budget without wasting resources.
  2. **Scalable** – Must grow from 0 → millions of users smoothly.
  3. **Robust**:
     - Must be reliable and fault-tolerant.
     - Downtime tolerance should be near zero.

👉 If confused about which tech to use, do freelance projects & R&D to gain clarity.

# 🪧 Day - 11 Node.js, Promises, Synchronous & Asynchronous Code

### Why Do We Need Server-Side Language?

- Client-side languages (like plain JavaScript runs in the browser) cannot directly communicate with databases.
- That’s why we use server-side languages (like Node.js, PHP, Java, etc.) to interact with databases.

##### Flow:

`JavaScript (gives instruction) --> NodeJS (accept instruction & process) --> Database`

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

  - UI related code does not execute on server
  - BOM and DOM related code does not execute on server

  ```js
  window.alert("Hello World!"); ❌ // Browser only
  document.write("Hello World!"); ❌ // Browser only

  console.log("Hello World!"); ✅ // Works in Node.js also

   window.alert("Hello") // ReferenceError: window is not defined

  alert("Hello") // ReferenceError: alert is not defined
  
  console.asdf("hello") // TypeError: console.asdf is not a function
  same with "document"
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

  // Output: One → Three → Two (after 3s)
  ```

### Programming Paradigm:

- In Programming there is a concept known as paradigm (way of writing code).
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



# 📈 Day -12 Nodejs, async await and exception handling

### 🚀 Node.js

- Node.js is not a language.
- It is a **JavaScript runtime environment** that allows JavaScript to run on the server.

### 🧵 Threads in Node.js

- Thread is a mechanism to handle a request.
- It's a program present in software which makes your machine, server ex- Node.js, Tomcat etc.
- A thread is a lightweight process that handles tasks/requests.
  Examples of software that use threads: Node.js, Tomcat, Apache etc.

#### Types of Threads

- There are two types of threads:
  - **Single-threaded** – Only one task at a time.
  - **Multi-threaded** – Multiple tasks at the same time.
- Since **JavaScript is a single threaded** language. So **Node.js is also single threaded** (it has one main thread for executing JS code).
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
- Worker is like code processor that executes actual code and sends response back.

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
  - `async ---> sync ---> use async await`

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
- Since Module is re-usable, so function inside module return **data not result** directly.

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
**NOTE**: If a function does not returning anything, it will return `undefined`.

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

console.log(dt.add(2, 'years').format('DD/MM/YYYY'));
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

- `npm` is a CLI (Command Line Interface) tool, which is used to manage (install, uninstall, update, upgrade) Node.js packages.
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
- A protocol defines the set of rules or standards that determine how data is transmitted and received over a network.
- Example:
  - `http` → HyperText Transfer Protocol (used for web communication)
  - `https` → Secure HyperText Transfer Protocol (HTTP + encryption via SSL/TLS)
  - TCP/IP → Transmission Control Protocol / Internet Protocol (foundation of internet communication)

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
    - Where real time data transfer takes place, it is done using web Socket protocal
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
- `createServer()` method returns **an instance of an HTTP server object**.
- `createServer()` takes a callback function with two parameters, this callback executed every time a request hits the server:
  - `req` → request object (contains details about the incoming request like URL, method, headers, etc.)
  - `res` → response object (used to send a response back to the client)

```js
const http = require("http"); // returns an object

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
  res.end("Hi, I am your server"); // end() disconnect user from server after sending response
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
- `HTTP` and `HTTPS` are stateless protocols, meaning once the server sends a response, it closes the connection.
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
- To read that query String we have to convert it into `object` first for that we have `queryString` moddule.
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
- It is a way to write server code efficiently, making it independent of the client (request can be from react, angular, vue, java, etc).
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

- Here, `/users` is the endpoint (resource)(in terms of backend)
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

```js
const method = req.method;
console.log(method);
```

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

# 🚀 Day - 17 Node.js MongoDB CRUD

### Rules for Creating Rest API

1. endPoint setup (eg: `/login`, `/signup` etc)
2. http methods
3. send status code
4. Response in JSON format

### Rules for Creating SOAP API

1. endPoint setup (eg: `/login`, `/signup` etc)
2. http methods
3. send status code
4. Response in XML format

```js
const http = require("http");

const server = http.createServer((req, res) => {
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

### Cleaning Above Code

```js
const http = require("http");

const getMessage = (msg) => {
  return JSON.stringify({
    message: msg
  })
}
const server = http.createServer((req, res) => {

  const url = req.url;
  const method = req.method;
  const type =  { 
    "content-type": "application/json" 
  };

  if (url !== "/user")
  {
    const message = getMessage("Endpoint not found.")
    res.writeHead(404, type);
    res.end(message);
    return;
  }

  if(method === "GET")
  {
    const message = getMessage("User matched.")
    res.writeHead(200, type);
    res.end(message);
    return;
  }

  if(method === "POST")
  {
    const message = getMessage("User Created.")
    res.writeHead(200, type);
    res.end(message);
    return;
  }

  if(method === "PUT")
  {
    const message = getMessage("User Updated.")
    res.writeHead(200, type);
    res.end(message);
    return;
  }

  if(method === "DELETE")
  {
    const message = getMessage("User Deleted.")
    res.writeHead(200, type);
    res.end(message);
    return;
  }
    
  const message = getMessage("Method Not allowed!!")
  res.writeHead(405, type);
  res.end(message);
});

server.listen(8080);
```

### Connecting MongoDB using Node.js

1. Install MongoDB package from npm.

```sh
npm install mongodb
```

2. require() mongodb, it returns an object which has a property `MongoClient`, it has `connect()` method which take url as an argument and helps to connect with database.

```js
const mongo = require("mongodb");
// or
const { MongoClient } = require("mongodb");

const conn = MongoClient.connect("mongodb://127.0.0.1:27017")

// same url hit when you write mongosh in terminal
// 127.0.0.1 = localhost
```
  - `MongoClient.connect("mongodb://127.0.0.1:27017")` returns Promise, to resolve that we use `.then().catch()`
  - callback in `.then()` take `client` object as an argument, which has access of all collections and all.
  - callback in `.catch()` take `err` object which has `message` property by which we can read error message.

3. Select database

```js
const db = client("dbname");
```

4. Select collection

```js
const x = db.collection("collection_name");
```

5. Perform operation (CRUD)
  - Ever function related to database return Promise expect `find()`, to resolve these we handle it synchronously means using `async await`.
  - Must use exception handling in this case using `try{} & catch(){}`
  - Since `.find()` did not return Promise so we have to make it Promisable using `.toArray()` function.
```js
const x = db.collection("collection_name");
x.find().toArray();
```

### Final Clean Code:

```js
const http = require("http");
const { MongoClient } = require("mongodb");
let db = null;

 MongoClient.connect("mongodb://127.0.0.1:27017")

 .then((client) => {
  db = client.db("ecom");
 })

 .catch((err) => {
  console.log(err.message);
  process.exit(0);
 })


const getMessage = (msg) => {
  return JSON.stringify({
    message: msg
  })
}
const server = http.createServer( async (req, res) => {

  const url = req.url;
  const method = req.method;
  const type =  { 
    "content-type": "application/json" 
  };

  if (url !== "/user")
  {
    const message = getMessage("Endpoint not found.")
    res.writeHead(404, type);
    res.end(message);
    return;
  }

  if(!db){
    const message = getMessage("Database not initialized!!");
    res.writeHead(500, type);
    res.end(message);
    return;
  }

  if(method === "GET")
  {
    try
    {
      const User = db.collection("users");
      const users = await User.find().toArray();
      res.writeHead(200, type);
      res.end(JSON.stringify(users));
      return;
    }
    catch(err)
    {
      const message = getMessage(err.message);
      res.writeHead(500, type);
      res.end(message)
    }
  }

  if(method === "POST")
  {
    try
    {
      const payload = {
      name: "Shiv Singh",
      email: "singhshiv0402@gmail.com",
      mobile: 9140520890
    }
    const User = db.collection("users");
    await User.insertOne(payload);
    res.writeHead(200, type);
    res.end(JSON.stringify(payload));
    return;
    }
    catch(err)
    {
      const message = getMessage(err.message);
      res.writeHead(500, type);
      res.end(message) 
    }
  }

    
  const message = getMessage("Method Not allowed!!")
  res.writeHead(405, type);
  res.end(message);
});

server.listen(8080);
```

# Day - 18 Node.js REST API




## How to get dynamic id
- use url module
- `const {id} = url.parse(req.url).query

## to update document we need 2 data
- id
- updated data

## startsWith and endsWith

##
but this way of creating REST apis is not good because
- it is not scalable
- not readable
- hard to maintain

---

# 📘 Day 18 – Node.js REST API Notes

## 📌 1. REST API Structure (Modular Approach)

### 🔹 Rule: Separate module for each endpoint

- REST API rules says that create seprate module for each endpoint
- Instead of writing everything in one file, split your code:
- Keep all modules in a separate folder like `modules`, `lib` or `util` etc

```
/modules
   ├── user.js
   ├── payment.js
   ├── cart.js
```

### ✅ Example:

* `/user` → `user.js`
* `/payment` → `payment.js`
* `/cart` → `cart.js`

### 💡 Why use modules?

* Improves **readability**
* Makes code **scalable**
* Easier to **maintain**
* Helps in **code splitting**

---

## 📌 2. Common Utility File

Create a shared file for reusable logic.

```js
// common.js

const type = {
    'Content-Type': 'application/json'
}

const getMessage = (msg) => {
    return JSON.stringify({ message: msg })
}

module.exports = {
    type,
    getMessage
}
```

### ✅ Usage Example:

```js
res.writeHead(200, type)
res.end(getMessage("User created successfully"))
```

---

## 📌 3. Receiving Data from Postman

### 🔹 Steps:

1. Open Postman
2. Select **Body**
3. Choose **x-www-form-urlencoded**
4. Add key-value pairs

```
fullname: Shiv Singh
email: shiv@gmail.com
```

---

## 📌 4. How Node.js Receives Data

### 🔹 Important Concepts

#### 🧩 Chunks

* When client sends data, Data is received in **small pieces**
* Each piece is called a **chunk**
* These chunks stored in Array Buffer

#### 🧠 Array Buffer
* Data is stored in **binary format**(Machine understandable numeric form of data)
* Convert to readable format using:

```js
chunk.toString()
```

---

## 📌 5. Events Used to Read Data

Node.js uses events to read data because of its **event-driven architecture**

### 🔹 `data` Event

* Triggered when a chunk is received
* Can run multiple times

### 🔹 `end` Event

* Triggered when all chunks are received

---

### ✅ Example: Reading Request Body

```js
let body = ''

req.on('data', (chunk) => {
    body += chunk.toString()
})

req.on('end', () => {
    console.log(body)
})
```

---

## 📌 6. Convert Data into Object

Data from Postman comes in **query string format**

### 🔹 Example:

```
fullname=Shiv+Singh&email=shiv@gmail.com
```

### 🔹 Convert using `querystring` module:

```js
const querystring = require('querystring')

const parsedData = querystring.parse(body)

console.log(parsedData.fullname)
```

---

## 📌 7. Restart Server Quickly

Use:

```
rs
```

👉 Works when using **nodemon**

---

## 📌 8. MongoDB – `find()` vs `findOne()`

## why toArray() with find()

### 🔹 `find()`

* Returns a **cursor (not actual data)**
* Needs `.toArray()`
* **(optional)** find() return instance of find method it is bug in mongodb and we need promise there , find() gives data in array of object format thats why we need toArray() method but in the case of findOne() we did not need it

```js
const users = await collection.find({}).toArray()
```

### 🔹 `findOne()`

* Returns **single object**
* No need for `.toArray()`

```js
const user = await collection.findOne({ email })
```

---

## 📌 9. `deleteOne()` Warning ⚠️

## deleteOne()

- to pass id use ObjectId() and import it from 'mmongodb'
- dirctly do not pass id in ObjectId() it will throw error "Class constructor ObjectId cannot be invoked without 'new' "
- so
  ```js
    const id = new ObjectId(req.parse.id)
  ```
### why this happens 
- In newer version of mongodb driver:
  - ObjectId is a class
  - class must be instanciated using `new`


### ❌ Wrong: If did not pass anything

```js
collection.deleteOne({})
```

👉 This deletes the **first document** (dangerous!)

---

### ✅ Correct Way:
- Always pass the id as query parameter
```js
const { ObjectId } = require('mongodb')

const id = new ObjectId(req.params.id)

await collection.deleteOne({ _id: id })
```

---

## 📌 10. ObjectId Error Fix

### ❌ Error:

```
Class constructor ObjectId cannot be invoked without 'new'
```

### ✅ Fix:

```js
const id = new ObjectId("your_id_here")
```

### 💡 Why?

* `ObjectId` is a **class**
* Must be used with `new`

---

## 📌 11. Get Dynamic ID from URL

### 🔹 Using `url` module:

```js
const url = require('url')

const parsedUrl = url.parse(req.url, true)
const { id } = parsedUrl.query

console.log(id)
```

---

## 📌 12. Update Document

To update data, you need:

### ✅ Required:

1. **ID**
2. **Updated Data**

### 🔹 Example:

```js
await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { fullname: "New Name" } }
)
```

---

## 📌 13. `startsWith()` and `endsWith()`

Useful for route matching.

### 🔹 Example:

```js
if (req.url.startsWith('/user')) {
    console.log("User route")
}

if (req.url.endsWith('/delete')) {
    console.log("Delete route")
}
```

---

## 📌 14. Problem with This Approach ❌

Although this works, it has limitations:

* ❌ Not scalable
* ❌ Hard to manage routes
* ❌ Code becomes messy
* ❌ Difficult to maintain in large apps

---

## 📌 15. Better Approach ✅

Use frameworks like:

* **Express.js**
* **Fastify**

### 💡 Why?

* Built-in routing
* Middleware support
* Cleaner code structure
* Faster development

---

# 🚀 Summary

* Use **modular structure**
* Handle **chunks with events**
* Convert data using `querystring`
* Always use `new ObjectId()`
* Avoid raw Node.js for large apps → use **Express**

---



# Day - 20 Introduction to Express
-for production grade application we use packages like express or fastify



# 🧿 Entering to Mid Range Applications

### What will you learn

1. Job Interview Final
2. React/Node - TypeScript (Mid Range)


# 🔥 Day - 46 Welcome to ES6

- External file of JS is generally called `module`.
- To use `module` there are two ways:
  - Using `require` statement --> Common JS
  - Using `import` statement --> ES6

- Most of the Node application (70%) are using commonJS.
- To use ES6 in NodeJS you have to write `"type" : "module"` after `"main"` in `package.json`
```js 
{
  "name": "day-46",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": { 
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "mongoose": "^8.19.1"
  }
}
```
## how to create module and use in ecmaScript
- create a `.js` file
- export it:
  - If you want to export only one `function` or `variable` so use `export default variable/function name`, it is called `default export`
    ```js
      const createProduct = () => {
        console.log('Product created')
      }

      export default createProduct
    ```
    - To use that you have to import that where you want to use via `import` keyword
    ```js
    import createProduct from "./controller/product.controller.js";

    // you can name "createProduct" it anything and use with that name
    ```
    - It is called **default import**

  - But if you want to export multiple variables/functions
    - Just write `export` keyword before each variable and function, it will send an object
    ```js
      export const createProduct = () => {
        console.log('Product created')
      }

      export const deleteProduct = () => {
        console.log('Product created')
      }

      // it is called named export
    ```
    - To use that you have to import it using `import` and `object destructuring` and if you want to use exported function with different name you have to set alias for that using `as` keyword
    ```js
        import { createProduct, deleteProduct as deleteItem } from "./controller/product.controller.js";

        createProduct()
        deleteItem()
    ```




#### require , module.exports, import, export, export default
- Learn in details
- named export sends an {}, that why in named import we do object destructureing

### Array & Object Destructuring
#### Object Destructuring:
- It basically unpack the object value in to constant
- Constant name must be same as object keys
- If you want to define alias you can usinh `:`
- Order does not matter here
```js
const product = {
    title: 'Blue jeans',
    description: 'hello',
    price: 2000,
    discount: 20
}

console.log(product.price);

const {title, description, price: mrp, discount} = {
    title: 'Blue jeans',
    description: 'hello',
    price: 2000,
    discount: 20
}

console.log(mrp);
console.log(discount);

const student = {
    name: 'Shiv Singh', 
    roll: 12,
    subject: "maths",
    address: {
        city: 'Lucknow',
        state: 'up',
        country: 'india'
    }
}

console.log(student.address.city);

const {address: {city, state, country}} = {
    name: 'Shiv Singh', 
    roll: 12,
    subject: "maths",
    address: {
        city: 'Lucknow',
        state: 'up',
        country: 'india'
    }
}

console.log(city);
```

#### Array Destructuring:
- It basically unpack the array values into indivisual constant
- Order matters here

```js
  const num = [1, 2, 3, 4, 5]
  console.log(num[1]) // 2

  const [x] = [1, 2, 3, 4, 5]
  console.log(x) // 1

  // if you want to skip values
  const [a, ,b] = [1, 2, 3, 4, 5]
  console.log(a, b) // 1 3

  const [type, token] = ["Bearer", "dkfnkjdnjkdngjkngkdfgdf"]
```

## Template literals
- It is introduced in ES6 and represented by `backtick`
- It make string concatination easy and you can also write expression and variables using `${}`
```js
  let name = "Bob"
  let age = 22

  // using + operator
  let intro1 = "Hello my name is " + name + " and i am "+ age + " years old."
  
  console.log(intro1)

  // using template string
  let intro = `Hello my name is ${name} and i am ${age} years old`
  console.log(intro)

```

## map() and filter() method

## spread operator and rest 
```js
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const number = [...num1, ...num2]
console.log(number);
```

Here are your **very detailed ES6 notes (Beginner → Advanced)** based on your content, structured clearly with definitions, explanations, and real-world examples 👇

---

# 🔥 Day 46 – ES6 (ECMAScript 2015) Complete Notes

---

# 🚀 1. What is ES6?

### 📌 Definition:

**ES6 (ECMAScript 2015)** is a major update to JavaScript that introduced modern features to write **clean, modular, and efficient code**.

### 💡 Why ES6?

* Cleaner syntax
* Better code organization
* Supports modern development (React, Node, etc.)
* Makes JavaScript more powerful

---

# 📦 2. Modules in JavaScript

### 📌 Definition:

A **module** is simply a JavaScript file that contains code (functions, variables, classes) that can be reused in other files.

---

## 🔁 Two Types of Modules

### 1. CommonJS (Old Way)

```js
const fs = require('fs')
module.exports = myFunction
```

### 2. ES6 Modules (Modern Way)

```js
import fs from 'fs'
export default myFunction
```

---

## ⚙️ Enable ES6 in Node.js

```json
{
  "type": "module"
}
```

⚠️ Important:

* `"type": "module"` → enables ES6
* `"type": "commonjs"` → default (older way)

---

# 📤 3. Export & Import

---

## 🔹 Default Export

### 📌 Definition:

Used when exporting **only one thing** from a file.

### ✅ Example:

```js
// product.js
const createProduct = () => {
  console.log("Product created")
}

export default createProduct
```

### 📥 Import:

```js
import createProduct from './product.js'
createProduct()
```

### 💡 Key Points:

* Only **one default export per file**
* You can rename while importing

```js
import myFunc from './product.js'
```

---

## 🔹 Named Export

### 📌 Definition:

Used when exporting **multiple items**.

### ✅ Example:

```js
export const createProduct = () => {
  console.log("Created")
}

export const deleteProduct = () => {
  console.log("Deleted")
}
```

### 📥 Import:

```js
import { createProduct, deleteProduct } from './product.js'
```

---

### 🔄 Alias (Rename)

```js
import { deleteProduct as deleteItem } from './product.js'
```

---

### 🧠 Important Concept:

* Named export sends an **object `{}`**
* That’s why we use **destructuring**

---

# 🧩 4. require vs import

| Feature     | require      | import    |
| ----------- | ------------ | --------- |
| Type        | CommonJS     | ES6       |
| Sync/Async  | Sync         | Async     |
| Usage       | Node (older) | Modern JS |
| Flexibility | Dynamic      | Static    |

---

# 🧠 5. Destructuring

---

## 🔹 Object Destructuring

### 📌 Definition:

Extract values from an object into variables.

---

### ✅ Basic Example:

```js
const product = {
  title: "Jeans",
  price: 2000
}

const { title, price } = product
```

---

### 🔄 Rename (Alias):

```js
const { price: mrp } = product
```

---

### 🧠 Nested Destructuring:

```js
const student = {
  name: "Shiv",
  address: {
    city: "Lucknow"
  }
}

const { address: { city } } = student
```

---

### 💡 Key Points:

* Order does NOT matter
* Name must match key

---

## 🔹 Array Destructuring

### 📌 Definition:

Extract values from an array based on position.

---

### ✅ Example:

```js
const arr = [10, 20, 30]

const [a, b] = arr
console.log(a, b) // 10 20
```

---

### ⏭ Skip Values:

```js
const [x, , y] = [1, 2, 3]
console.log(x, y) // 1 3
```

---

### 💡 Key Points:

* Order **matters**
* Uses index internally

---

# 🧵 6. Template Literals

---

### 📌 Definition:

A modern way to write strings using **backticks (`)**.

---

### ✅ Example:

```js
let name = "Shiv"
let age = 22

let intro = `My name is ${name} and I am ${age} years old`
```

---

### 🎯 Advantages:

* Easy string concatenation
* Supports multiline

```js
let msg = `
Hello
Welcome
`
```

---

# 🔁 7. map() Method

---

### 📌 Definition:

Creates a **new array** by applying a function to each element.

---

### ✅ Example:

```js
const nums = [1, 2, 3]

const square = nums.map(n => n * n)
console.log(square) // [1, 4, 9]
```

---

### 🧠 Real Use Case:

```js
const users = [
  {name: "Shiv"},
  {name: "Ram"}
]

const names = users.map(user => user.name)
```

---

# 🔍 8. filter() Method

---

### 📌 Definition:

Returns a new array with elements that pass a condition.

---

### ✅ Example:

```js
const nums = [1, 2, 3, 4]

const even = nums.filter(n => n % 2 === 0)
console.log(even) // [2, 4]
```

---

# ➕ 9. Spread Operator (`...`)

---

### 📌 Definition:

Expands elements (array/object).

---

### ✅ Array Example:

```js
const a = [1, 2]
const b = [3, 4]

const c = [...a, ...b]
```

---

### ✅ Object Example:

```js
const user = {name: "Shiv"}
const updated = {...user, age: 22}
```

---

# 📥 10. Rest Operator (`...`)

---

### 📌 Definition:

Collects multiple values into a single variable.

---

### ✅ Example:

```js
const [a, ...rest] = [1, 2, 3, 4]
console.log(rest) // [2, 3, 4]
```

---

### ✅ Function Example:

```js
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b)
}
```

---

# ⚡ Advanced Concepts (Must Know)

---

## 🔹 Arrow Functions

```js
const add = (a, b) => a + b
```

### 💡 Difference:

* No `this` binding
* Short syntax

---

## 🔹 Default Parameters

```js
function greet(name = "Guest") {
  console.log(name)
}
```

---

## 🔹 Optional Chaining (`?.`)

```js
const user = {}
console.log(user.address?.city)
```

---

## 🔹 Nullish Coalescing (`??`)

```js
let value = null
console.log(value ?? "Default")
```

---

# 🎯 Real-World Example (Combined)

```js
const products = [
  {name: "Shirt", price: 500},
  {name: "Jeans", price: 2000}
]

// Filter expensive products
const expensive = products.filter(p => p.price > 1000)

// Get names
const names = expensive.map(p => p.name)

console.log(names)
```

---

# 🧠 Summary

* ES6 makes JavaScript modern and powerful
* Modules help organize code
* Destructuring simplifies data access
* map/filter are must for arrays
* Spread/rest improve flexibility

# Day -47  Welcome to React
- React is a JavaScript library.
- It is used to buid the Ui of application.
- Advantages of react (or why should we lear react)
  - Re-usability
  - Team management
  - Component (a reusable piece of ui)
  - large ecosystem
  - high demand
  - build and maintained by meta


## how to create react project using vite
- Go to cmd
  - write `npm create vite@latest`
  - enter `project name`
  - selet `React`
  - Select `JavaScript`
  - 
    ```cmd
      cd project-name
      npm install
      npm run dev
    ```  
- CRA is depricated

### How to create component 
- Create a function and function name must be same as file name 
- return UI
- can return only one element so wrap it in <div> or react fragment
- export the function
```js
const App = () => {
  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App
```

### markup language
- HTML
- XML (xtensible markup language)
- client to server or server to client we send data in 2 formats: 
1. xml
```xml
<xml>
  <salary>20000</salary>
</xml>
```
2. json


### JSX
- jsx - javascript xml 
- jsx allows to write markup inside javascript
- js + markup = jsx
- jsx allows to write javascript in html using jsx expression `{}`
- react process this html in xml otherwise this `{}` is not possible
- can not pass object in jsx expression it will throww error : `Uncaught Error: Objects are not valid as a React child`
- can pass array in jsx expression: it will convert it into string and preview 
- in jsx expression you can write any js code
- in react due to strict mode every code runs twice but it happens only in dev mode not in production

```jsx
const App = () => {
  const name = 'Shiv Singh'
  const product = {
    title: 'red shirt',
    price: 2000,
    discount: 20
  }

  const users = ['saurav', 'mohit']
  return (
    <>
      <h1>Hello React</h1>
      <p> My name is {name}</p>
      <p>{JSON.stringify(product)}</p>
      <p>{users}</p>
      {console.log('Hello')}
      {alert('Hello')}
    </>
  )
}

export default App
```
### props
- props are the short form of properties
- prop in react attribute in html
- eg: onClick etc
### events in react
- event in js and react are almost same but in react we folloe camelCase convention to write events like: 
  - onClick
  - onMouseOver
  - onDoubleClick

#### how to call function
- in react when we call function that we write function name in jsx expression not  `()`
```jsx
<button onClick = {test}>Click</button> ✅
<button onClick = {test()}>Click</button> ❌
// if you use () it will execute when ui render or component mount

// we only use () when we have to pass arguments in that case we follow arrawo function syntax
<button onClick = {() => test('Hello world')}>Click</button> ✅

```

### style in css
- we can write inline css in form of objects, here css properties are treated as object properties so we follow camelCase convention and not `-` hyphen in between
```jsx
<h1 style = {{
  color: 'white',
  fontSize: 32
}}>Hello</h1>
```
Here are your **very detailed React (Day 47) notes** from **Beginner → Advanced level**, with clear definitions, explanations, and practical examples 👇

---

# ⚛️ Day 47 – Welcome to React (Complete Notes)

---

# 🚀 1. What is React?

### 📌 Definition:

**React** is a **JavaScript library** used to build **User Interfaces (UI)**, especially for **single-page applications (SPA)**.

👉 It was developed and maintained by Meta Platforms.

---

# 💡 2. Why Learn React? (Advantages)

---

## 🔹 1. Reusability

* You can create components once and reuse them anywhere.

```jsx
const Button = () => <button>Click</button>
```

---

## 🔹 2. Component-Based Architecture

### 📌 Definition:

A **Component** is a reusable piece of UI.

```jsx
const Header = () => <h1>My Website</h1>
```

---

## 🔹 3. Easy Team Management

* Developers can work on different components independently.

---

## 🔹 4. Large Ecosystem

* Huge community + libraries (Redux, React Router, etc.)

---

## 🔹 5. High Demand

* One of the most in-demand frontend skills.

---

# ⚙️ 3. Create React App using Vite

---

## 📌 Steps:

```bash
npm create vite@latest
```

Then:

```bash
cd project-name
npm install
npm run dev
```

---

### ⚠️ Note:

* **Create React App (CRA)** is now deprecated ❌
* Use **Vite** ✅ (faster + modern)

---

# 🧩 4. React Component

---

### 📌 Definition:

A **component** is a function that returns UI (JSX).

---

## ✅ Example:

```jsx
const App = () => {
  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App
```

---

### 🧠 Rules:

* Function name should start with **Capital Letter**
* Must return **one parent element**

  * Use `<div>` or `<> </>` (Fragment)

---

# 🌐 5. Markup Languages

---

### 🔹 HTML

* Used for structuring web pages

---

### 🔹 XML (Extensible Markup Language)

```xml
<xml>
  <salary>20000</salary>
</xml>
```

---

### 🔹 JSON (Modern Standard)

```json
{
  "salary": 20000
}
```

👉 Today mostly JSON is used instead of XML

---

# 🔥 6. JSX (JavaScript XML)

---

### 📌 Definition:

**JSX = JavaScript + HTML-like syntax**

👉 It allows writing UI inside JavaScript.

---

## ✅ Example:

```jsx
const App = () => {
  const name = "Shiv"

  return <h1>Hello {name}</h1>
}
```

---

## 🧠 Key Features of JSX

---

### 🔹 1. JavaScript inside JSX

```jsx
<p>{2 + 2}</p>
```

---

### 🔹 2. Expressions inside `{}`

```jsx
const name = "Shiv"
<p>{name}</p>
```

---

### 🔹 3. Cannot Pass Object Directly ❌

```jsx
const obj = {name: "Shiv"}
<p>{obj}</p> ❌ ERROR
```

✅ Fix:

```jsx
<p>{JSON.stringify(obj)}</p>
```

---

### 🔹 4. Arrays are Allowed ✅

```jsx
const users = ["A", "B"]
<p>{users}</p> // A,B
```

---

### 🔹 5. Strict Mode Behavior

* In development, React runs components **twice**
* Only happens in dev mode (not production)

---

# 🎯 7. Props (Properties)

---

### 📌 Definition:

**Props** are used to pass data from one component to another.

---

## ✅ Example:

```jsx
const User = (props) => {
  return <h1>{props.name}</h1>
}

<User name="Shiv" />
```

---

### 🔄 Destructuring Props:

```jsx
const User = ({ name }) => <h1>{name}</h1>
```

---

# ⚡ 8. Events in React

---

### 📌 Definition:

React events are similar to JS events but use **camelCase**.

---

## ✅ Examples:

```jsx
<button onClick={handleClick}>Click</button>
<button onMouseOver={hover}>Hover</button>
```

---

## 🧠 Important Rule

### ❌ Wrong:

```jsx
<button onClick={test()}>
```

👉 This executes immediately

---

### ✅ Correct:

```jsx
<button onClick={test}>
```

---

### ✅ Passing Arguments:

```jsx
<button onClick={() => test("Hello")}>
```

---

# 🎨 9. Styling in React

---

### 📌 Inline CSS (Object format)

```jsx
<h1 style={{
  color: "white",
  fontSize: 32
}}>
  Hello
</h1>
```

---

### 🧠 Rules:

* Use **camelCase**

  * `font-size` ❌ → `fontSize` ✅
* Value can be string or number

---

# ⚡ 10. Advanced Concepts (Must Know)

---

## 🔹 1. Fragment (`<> </>`)

* Used to avoid extra `<div>`

```jsx
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

## 🔹 2. Conditional Rendering

```jsx
const isLoggedIn = true

return (
  <>
    {isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
  </>
)
```

---

## 🔹 3. List Rendering

```jsx
const users = ["Shiv", "Ram"]

return (
  <>
    {users.map((u, i) => <p key={i}>{u}</p>)}
  </>
)
```

---

## 🔹 4. Event + State Preview

```jsx
const App = () => {
  const handleClick = () => {
    alert("Clicked")
  }

  return <button onClick={handleClick}>Click</button>
}
```

---

# 🎯 Real-World Example

```jsx
const Product = ({ title, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>₹{price}</p>
    </div>
  )
}

const App = () => {
  return (
    <>
      <Product title="Shirt" price={500} />
      <Product title="Jeans" price={2000} />
    </>
  )
}
```

---

# 🧠 Summary

* React is a UI library by Meta
* Uses **components** for reusable UI
* JSX allows writing HTML inside JS
* Props pass data between components
* Events use camelCase
* Styling is done using JS objects

---

# 🔥 Day 48 – React Routing (Complete Notes)

---

# 🚀 1. What is Routing?

### 📌 Definition:

**Routing** in React means **navigating between different pages/components without reloading the page**.

👉 In traditional websites, each page reloads
👉 In React, routing happens inside the app (**Single Page Application - SPA**)

---

# 🧠 2. Code Splitting

### 📌 Definition:

Breaking your app into **smaller reusable components/files** is called **code splitting**.

---

### ✅ Example:

```jsx
// Header.jsx
const Header = () => <h1>Header</h1>

// Home.jsx
const Home = () => <h1>Home Page</h1>
```

👉 Helps in:

* Better performance
* Easy maintenance
* Team collaboration

---

# 🎨 3. Using Tailwind CSS in React

---

### 📌 Install Tailwind:

Follow official guide 👉 [Tailwind CSS installation docs](https://tailwindcss.com/docs/installation?utm_source=chatgpt.com)

---

### 📌 Import CSS:

```js
import "./index.css"
```

---

### ⚠️ Important:

* Use `className` instead of `class`

```jsx
<h1 className="text-red-500 text-xl">Hello</h1>
```

---

# 🛣️ 4. React Router

---

### 📌 Definition:

**React Router** is a library used to handle routing in React apps.

👉 Install:

```bash
npm install react-router-dom
```

---

# 🧩 5. Basic Routing Setup

---

## 🔹 Step 1: Import

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
```

---

## 🔹 Step 2: Setup in Root (App.jsx)

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

### 🧠 Key Points:

* `BrowserRouter` → Wraps entire app
* `Routes` → Container for routes
* `Route` → Defines path + component
* `path` → URL (string)
* `element` → JSX

---

# 🔗 6. Navigation (Link)

---

### 📌 Why NOT `<a>` tag?

❌ `<a>` reloads page
✅ `<Link>` prevents reload (SPA behavior)

---

### ✅ Example:

```jsx
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  )
}
```

---

### 🧠 Key Points:

* `to` prop → path string
* Works like anchor but without reload

---

# 🧱 7. Nested Routing & Outlet

---

### 📌 Definition:

**Outlet** is used to render child routes inside parent layout.

---

## ✅ Example:

```jsx
import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Outlet />
    </>
  )
}
```

---

## 🔹 Routing Setup:

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

### 🧠 Flow:

* Layout loads first
* `<Outlet />` decides which child to render

---

# ⚡ 8. Advanced Routing Concepts

---

## 🔹 1. Dynamic Routes

### 📌 Definition:

Used when URL contains dynamic values (like ID)

---

### ✅ Example:

```jsx
<Route path="/product/:id" element={<Product />} />
```

---

### Access param:

```jsx
import { useParams } from "react-router-dom"

const Product = () => {
  const { id } = useParams()
  return <h1>Product ID: {id}</h1>
}
```

---

## 🔹 2. 404 Page (Not Found)

```jsx
<Route path="*" element={<h1>Page Not Found</h1>} />
```

---

## 🔹 3. Programmatic Navigation

```jsx
import { useNavigate } from "react-router-dom"

const App = () => {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  )
}
```

---

## 🔹 4. NavLink (Active Styling)

```jsx
import { NavLink } from "react-router-dom"

<NavLink to="/about" style={({ isActive }) => ({
  color: isActive ? "red" : "black"
})}>
  About
</NavLink>
```

---

# 🎯 Real-World Example (Complete)

---

## 📁 Folder Structure

```
src/
 ├── pages/
 │   ├── Home.jsx
 │   ├── About.jsx
 │   └── Product.jsx
 ├── components/
 │   └── Navbar.jsx
 └── App.jsx
```

---

## ✅ App.jsx

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

---

# 🧠 Summary

* Routing allows navigation without reload
* Use `react-router-dom`
* Always setup in **App.jsx**
* Use `<Link>` instead of `<a>`
* `<Outlet>` for nested routing
* Dynamic routes for IDs
* `useNavigate` for redirection

---

# Day-49 understanding frontend backend interaction

- in react project inside `lib` or `util` folder we keep js modules
- use gap over margin
- e.preventDefault()
- why should we prevent page reload on form submit
- in react required={false}
- when you use es6 in backend and importing any function or variable must use extension in file path
```js
import encryptData from './controller/encrypt.controller.js'
```
- hash and hashSync
- in bcrypt.hash() always use string data, convert using toString()
- payload validation (valid for single data)
- cors is a method which allows to client which runs on different domian to access the api
  - import cors
  - app.use(cors({
    origin: url
  }))
  - and keep variable in .env

- err.message vs err.response? err.response.data.message (api error) : err.message (system error)
- .env in vite react add `VITE_` prefix
  - const env = import.meta.env
  - env.VARIABLE_NAME
- recompile when change env variable

- axios in react
  - install axios
  - import axios
  - set baseurl `axios.defaults.baseUrl = env.VITE_SERVER`
  - const res = axios.method('endpoint', payload)


# 🔥 Day 49 – Frontend & Backend Interaction 

---

# 🌐 1. What is Frontend–Backend Interaction?

### 📌 Definition:

Frontend–Backend interaction is the process where:

* **Frontend (React)** sends requests (data)
* **Backend (Node/Express)** processes them
* Backend sends **response back to frontend**

---

### 🔄 Flow:

```
React (Frontend)
   ↓ request (API call)
Node/Express (Backend)
   ↓ response (JSON)
React (UI update)
```

---

# 📁 2. Folder Structure Best Practice

---

### 📌 Definition:

Inside React projects, reusable logic is stored in:

* `lib/` → API configs, helpers
* `utils/` → utility functions

---

### ✅ Example:

```
src/
 ├── lib/
 │   └── axios.js
 ├── utils/
 │   └── formatDate.js
```

---

# 🎨 3. CSS Tip – Use `gap` over `margin`

---

### 📌 Why?

| gap                    | margin           |
| ---------------------- | ---------------- |
| Works inside flex/grid | Manual spacing   |
| Clean & consistent     | Hard to maintain |

---

### ✅ Example:

```jsx
<div className="flex gap-4">
  <button>1</button>
  <button>2</button>
</div>
```

---

# 🛑 4. e.preventDefault()

---

### 📌 Definition:

Stops the default behavior of an event.

---

### ❓ Why needed in forms?

👉 By default, form submit:

* Reloads page ❌
* Clears state ❌

---

### ✅ Example:

```jsx
const handleSubmit = (e) => {
  e.preventDefault()
  console.log("Form Submitted")
}
```

---

# 🧠 5. Why Prevent Page Reload?

* React is **SPA (Single Page App)**
* Reload breaks:

  * State
  * Performance
  * User experience

---

# ✅ 6. Required Attribute in React

---

### 📌 Definition:

Used to validate form input.

```jsx
<input required={false} />
```

---

### 🧠 Tip:

* `required` → true by default if written
* `required={false}` → explicitly disable

---

# ⚙️ 7. ES6 Import Rule in Backend

---

### 📌 Important:

When using ES Modules in Node.js:

```js
import encryptData from './controller/encrypt.controller.js'
```

👉 Must include `.js` extension

---

# 🔐 8. Hashing (bcrypt)

---

### 📌 Definition:

Hashing converts data (like password) into secure format.

---

## 🔹 hash vs hashSync

| Method       | Type  | Usage         |
| ------------ | ----- | ------------- |
| `hash()`     | Async | Recommended ✅ |
| `hashSync()` | Sync  | Blocking ❌    |

---

### ✅ Example:

```js
import bcrypt from "bcrypt"

const password = "12345"

const hashed = await bcrypt.hash(password.toString(), 10)
```

---

### ⚠️ Important:

* Always pass **string**
* Use `.toString()`

---

# ✅ 9. Payload Validation

---

### 📌 Definition:

Checking incoming request data is valid.

---

### ✅ Example:

```js
if (!email || !password) {
  throw new Error("All fields required")
}
```

---

### 🧠 Best Practice:

* Validate:

  * Required fields
  * Format (email, phone)
  * Data type

---

# 🌍 10. CORS (Cross-Origin Resource Sharing)

---

### 📌 Definition:

Allows frontend (different domain) to access backend API.

---

### ❌ Problem:

Frontend: `localhost:5173`
Backend: `localhost:5000`
→ Different origin → blocked

---

### ✅ Solution:

```js
import cors from "cors"

app.use(cors({
  origin: process.env.CLIENT_URL
}))
```

---

### 🧠 Best Practice:

* Store URL in `.env`

```env
CLIENT_URL=http://localhost:5173
```

---

# ⚠️ 11. Error Handling

---

### 📌 Types:

---

## 🔹 1. API Error

```js
err.response.data.message
```

👉 Comes from backend

---

## 🔹 2. System Error

```js
err.message
```

👉 JS / network / internal error

---

### ✅ Example:

```js
try {
  await axios.post("/login")
} catch (err) {
  console.log(err.response?.data?.message || err.message)
}
```

---

# 🔑 12. Environment Variables in Vite

---

### 📌 Rule:

Must start with `VITE_`

---

### ✅ Example:

```env
VITE_SERVER=http://localhost:5000
```

---

### 📥 Access:

```js
const env = import.meta.env
console.log(env.VITE_SERVER)
```

---

### ⚠️ Important:

* Restart server after change

---

# 🌐 13. Axios in React

---

### 📌 Definition:

Axios is a library to make HTTP requests.

---

### 📦 Install:

```bash
npm install axios
```

---

## 🔹 Setup Base URL

```js
import axios from "axios"

const env = import.meta.env

axios.defaults.baseURL = env.VITE_SERVER
```

---

## 🔹 GET Request

```js
const res = await axios.get("/users")
```

---

## 🔹 POST Request

```js
const res = await axios.post("/login", {
  email,
  password
})
```

---

## 🔹 Dynamic Method

```js
const res = await axios({
  method: "post",
  url: "/login",
  data: payload
})
```

---

# 🎯 Real-World Example (Frontend + Backend)

---

## 🔹 Frontend (React)

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await axios.post("/login", {
      email,
      password
    })

    console.log(res.data)
  } catch (err) {
    console.log(err.response?.data?.message || err.message)
  }
}
```

---

## 🔹 Backend (Node)

```js
app.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" })
  }

  res.json({ message: "Login successful" })
})
```

---

# 🧠 Final Summary

* Frontend talks to backend using APIs
* Use `axios` for requests
* Prevent form reload using `e.preventDefault()`
* Use `.env` for config
* Use `cors` for cross-origin requests
* Always validate payload
* Handle errors properly

---


# Day-50 :  react state animation image icon

- icons in react:
  - ionicons
  - font awesome
    - npm i font-awesome
    - setup globally (root component) `import "font-awesome/css/font-awesome.min.css"`
  - remix icon
  - lucide react
  - material icons
  - react icons

- fa-spin to spin any icon
- keep images in public folder
- render ui using jsx expression `{}`
  - `{ true && <h1>Show</h1>}`
  - `{expression ? <h1>Show</h1> : <h1>Hide</h1>}`
- why we can not update variables in react using normal variable
  - when you try to update variable value in react the value of variable updates on button click but changes not reflect it happens because of ui did not re-renders on variable update thats why we use state variables using hooks like useState
- hooks 
  - hooks are nothing but predifned js function are called hooks usually starts with `use` like useState

- useState
  - it update state variable and re-render ui(component)
  - import hook
  - always call a hook at top level(higher order)
  - useState returns an array
    - 0 index undefined (to store data in state variable)
    - 1 insdex a function (to update state variable)
- virtual dom : only update code part change in dom not complete dom renders

---

# 🔥 Day 50 – React State, Animation, Images & Icons

---

# 🎨 1. Icons in React

---

### 📌 Definition:

Icons are small graphical elements used to improve UI/UX.

---

## 🔹 Popular Icon Libraries

---

### 1. Ionicons

* Lightweight and modern icons

---

### 2. Font Awesome

```bash
npm i font-awesome
```

### ✅ Setup (Global):

```js
import "font-awesome/css/font-awesome.min.css"
```

---

### 🔄 Example:

```jsx
<i className="fa fa-spinner fa-spin"></i>
```

👉 `fa-spin` → adds animation (rotation)

---

### 3. Remix Icon

### 4. Lucide React (Modern & Recommended)

### 5. Material Icons

### 6. React Icons (Most Popular ✅)

---

### ✅ React Icons Example:

```bash
npm install react-icons
```

```jsx
import { FaBeer } from "react-icons/fa"

const App = () => <h1>Cheers <FaBeer /></h1>
```

---

# 🖼️ 2. Images in React

---

### 📌 Rule:

Keep images inside **public folder**

---

### ✅ Example:

```jsx
<img src="/logo.png" alt="logo" />
```

---

### 🧠 Why public folder?

* Direct access via URL
* No import needed

---

# ⚛️ 3. JSX Rendering (Dynamic UI)

---

### 📌 Definition:

JSX allows dynamic rendering using `{}`

---

## 🔹 Logical AND (`&&`)

```jsx
{true && <h1>Show</h1>}
```

👉 If condition is true → render UI

---

## 🔹 Ternary Operator

```jsx
{isLogin ? <h1>Show</h1> : <h1>Hide</h1>}
```

---

# ❓ 4. Why Normal Variables Don’t Work in React?

---

### 📌 Problem:

```jsx
let count = 0

const increment = () => {
  count++
}
```

👉 Value updates internally ❗
👉 But UI does NOT update ❌

---

### 📌 Reason:

React does NOT track normal variables → no re-render

---

# 🧠 5. Hooks in React

---

### 📌 Definition:

**Hooks** are predefined JavaScript functions that allow us to use React features like state, lifecycle, etc.

---

### 🔹 Rule:

* Always start with `use`
* Call only at **top level**

---

### Examples:

* `useState`
* `useEffect`
* `useRef`

---

# ⚡ 6. useState Hook

---

### 📌 Definition:

`useState` is used to:

* Store data (state)
* Update UI automatically (re-render)

---

## 🔹 Syntax:

```jsx
const [state, setState] = useState(initialValue)
```

---

### 🧠 Returns:

| Index | Meaning                  |
| ----- | ------------------------ |
| 0     | State variable           |
| 1     | Function to update state |

---

## ✅ Example:

```jsx
import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  )
}
```

---

### 🔄 Flow:

1. Click button
2. `setCount()` called
3. State updated
4. Component re-renders
5. UI updates ✅

---

# 🎯 7. Real-World Example (Toggle UI)

```jsx
import { useState } from "react"

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <h1>Hello World</h1>}
    </>
  )
}
```

---

# 🎬 8. Simple Animation in React

---

### 📌 Using CSS + State

```jsx
const App = () => {
  const [spin, setSpin] = useState(false)

  return (
    <>
      <button onClick={() => setSpin(!spin)}>
        Toggle Spin
      </button>

      <i className={`fa fa-spinner ${spin ? "fa-spin" : ""}`}></i>
    </>
  )
}
```

---

# ⚡ 9. Virtual DOM

---

### 📌 Definition:

Virtual DOM is a **lightweight copy of the real DOM**.

---

### 🧠 How it works:

1. State changes
2. Virtual DOM updates
3. React compares (diffing)
4. Only changed part updates in real DOM ✅

---

### 🎯 Advantage:

* Fast performance
* Efficient updates
* No full page re-render

---

# 🔥 10. Best Practices (Important)

---

### ✅ Use State for UI updates

```jsx
const [value, setValue] = useState("")
```

---

### ✅ Keep hooks at top

```jsx
// ✅ Correct
const App = () => {
  const [count] = useState(0)
}
```

---

### ❌ Wrong:

```jsx
if (true) {
  useState() ❌
}
```

---

### ✅ Use meaningful state names

```jsx
const [isLoading, setIsLoading] = useState(false)
```

---

# 🎯 Combined Example (Icons + State + JSX)

```jsx
import { useState } from "react"
import { FaSpinner } from "react-icons/fa"

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <button onClick={() => setLoading(!loading)}>
        Toggle
      </button>

      {loading && <FaSpinner className="animate-spin" />}
    </>
  )
}
```

---

# 🧠 Final Summary

* Icons improve UI (React Icons, Font Awesome, etc.)
* Images should be in `public/`
* JSX allows dynamic rendering
* Normal variables don’t trigger UI updates
* `useState` manages state & re-render
* Virtual DOM makes React fast

---

# Day-51 : react practicing states
- toggle password
```jsx
import { useState } from "react"

const TogglePassword = () => {
    const [type, setType] = useState('password')
    return (
        <>
            <div className="border w-70 flex items-center gap-1 pr-2 rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-gray-600">
                <input 
                    type={type}
                    name="password"
                    placeholder="********"
                    className="w-full py-2 px-4 focus:outline-none text-base"
                />
                {
                    type === 'password' ?
                    <button className="hover:cursor-pointer h-8 w-8 hover:bg-gray-300 rounded-full">
                        <i className="fa fa-eye" onClick={() => setType('text')} ></i>
                    </button>
                    :
                    <button className="hover:cursor-pointer h-8 w-8 hover:bg-gray-300 rounded-full">
                        <i className="fa fa-eye-slash" onClick={() => setType('password')}></i>
                    </button>
                }
            </div>
        </>
    )
}

export default TogglePassword
```
- show/hide loader, timer
```js
import { useState } from "react"

const ToggleLoader = () => {
    const [loader, setLoader] = useState(true)

    const handleLoader = () => {
        setLoader((pvalue) => !pvalue)

        // const x =setTimeout(()=>{
        //     setLoader(false)
        // }, 5000)
        // console.log(x);
    }
  return (
    <div className="">
        {
            loader &&
            <i className="fa fa-spinner fa-spin !text-4xl"></i>
        }
        <br />
        <button className="bg-indigo-600 text-white py-2 px-6 mt-4 rounded-md " onClick={handleLoader}>Toggle</button>
    </div>
  )
}

export default ToggleLoader
```
- setState 2nd ways to read value of state variable
```js
const [loader, setLoader] = useState(true)

const handleLoader = () => {
    setLoader((pvalue) => !pvalue)
}
```
- counter app
```jsx
import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((pValue) => pValue + 1)
  }

  const decrement = () => {
    setCount((pValue) => pValue - 1)
  }
  
  return (
    <div className="flex flex-col items-center border border-gray-300 w-70 py-12 rounded-lg shadow-lg gap-6">
        <h1 className="text-4xl">{count}</h1>
        <div className="space-x-4">
            <button className="text-2xl font-bold bg-red-500 py-1 px-6 rounded-lg" onClick={decrement}>-</button>
            <button className="text-2xl font-bold bg-green-500 py-1 px-6 rounded-lg" onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter
```
- input value live preview
```js
import { useState } from "react"


const Input = () => {
    const [fullname, setFullname] = useState('')
  return (
    <div>
        <input 
            type="text"
            name="fullname"
            placeholder="Enter your fullname..."
            className="py-1 px-3 border rounded"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
        />
        <h1 className="text-2xl font-bold">{fullname}</h1>
    </div>
  )
}

export default Input
```
- form register now
```js
import { useState } from "react"

const Signup = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleForm =(e) => {
    e.preventDefault()
    const payload = {
      fullname,
      email,
      password
    }

    console.log(payload)
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-120 border border-gray-300 rounded-lg py-4 px-8 bg-white shadow-lg space-y-8">
        <h1 className="text-2xl font-semibold">Register Now</h1>
        <form className="flex flex-col gap-5" onSubmit={handleForm}>
          <input 
            type="text"
            name="fullname"
            placeholder="Enter fullname"
            className="border border-gray-300 py-1 px-3 rounded"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-300 py-1 px-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-gray-300 py-1 px-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="bg-indigo-500 text-white text-lg font-semibold py-2 px-6 w-fit rounded-md hover:cursor-pointer">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
```

Here are your **very detailed notes for Day 51 – Practicing React State (Beginner → Advanced)** with clear explanations, concepts, and improvements on your examples 👇

---

# 🔥 Day 51 – React State Practice (Complete Guide)

---

# ⚛️ 1. What is State in React?

### 📌 Definition:

**State** is a built-in React feature used to store data that can change over time and automatically update the UI.

---

### 🧠 Key Idea:

👉 When **state changes → component re-renders → UI updates**

---

# 🔁 2. Toggle Password (Real-world Example)

---

### 📌 Concept:

* Switching input type (`password` ↔ `text`)
* Using state to control UI

---

## ✅ Your Code (Improved Version)

```jsx
import { useState } from "react"

const TogglePassword = () => {
  const [type, setType] = useState("password")

  const togglePassword = () => {
    setType((prev) => (prev === "password" ? "text" : "password"))
  }

  return (
    <div className="border w-70 flex items-center gap-1 pr-2 rounded-md focus-within:outline focus-within:outline-1 focus-within:outline-gray-600">
      <input
        type={type}
        placeholder="********"
        className="w-full py-2 px-4 focus:outline-none"
      />

      <button onClick={togglePassword}>
        <i className={`fa ${type === "password" ? "fa-eye" : "fa-eye-slash"}`}></i>
      </button>
    </div>
  )
}

export default TogglePassword
```

---

### 🧠 What You Learned:

* Conditional rendering
* State toggle pattern
* Cleaner logic using single function

---

# 🔄 3. Show/Hide Loader + Timer

---

### 📌 Concept:

* Conditional rendering (`&&`)
* Async behavior (setTimeout)

---

## ✅ Improved Version with Timer:

```jsx
import { useState } from "react"

const ToggleLoader = () => {
  const [loader, setLoader] = useState(false)

  const handleLoader = () => {
    setLoader(true)

    setTimeout(() => {
      setLoader(false)
    }, 3000)
  }

  return (
    <div>
      {loader && <i className="fa fa-spinner fa-spin text-4xl"></i>}

      <button onClick={handleLoader}>
        Show Loader
      </button>
    </div>
  )
}

export default ToggleLoader
```

---

### 🧠 Key Learning:

* State controls visibility
* Timer simulates API delay

---

# 🧠 4. Functional State Update (Very Important)

---

### 📌 Definition:

Second way to update state using previous value.

---

## ✅ Example:

```js
setLoader((prev) => !prev)
```

---

### 🧠 Why use this?

* Avoids stale values
* Best for toggles & counters

---

# 🔢 5. Counter App

---

### 📌 Concept:

* Increment / decrement using state

---

## ✅ Your Code is Perfect 👍 (With Explanation)

```jsx
const [count, setCount] = useState(0)

const increment = () => {
  setCount((prev) => prev + 1)
}
```

---

### 🧠 Why functional update?

```js
setCount(count + 1) ❌ (may cause bug)
setCount(prev => prev + 1) ✅
```

---

### 🎯 Advanced Tip:

Add limits:

```js
if (count > 0) setCount(prev => prev - 1)
```

---

# ⌨️ 6. Input Live Preview (Controlled Component)

---

### 📌 Definition:

A **controlled component** is an input controlled by React state.

---

## ✅ Example:

```jsx
const [fullname, setFullname] = useState("")

<input
  value={fullname}
  onChange={(e) => setFullname(e.target.value)}
/>
```

---

### 🧠 Flow:

1. User types
2. `onChange` triggers
3. State updates
4. UI updates instantly

---

# 🧾 7. Form Handling (Register Form)

---

### 📌 Concept:

* Multiple states
* Controlled inputs
* Form submission

---

## ✅ Your Code is Good 👍 (Improved Version)

```jsx
const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleForm = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleForm}>
      <input name="fullname" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}
```

---

### 🧠 Why this is better?

* Cleaner code
* Scalable for large forms

---

# ⚡ 8. Key Patterns You Learned

---

## 🔹 1. Conditional Rendering

```jsx
{loader && <Loader />}
```

---

## 🔹 2. Ternary Rendering

```jsx
{isLogin ? <Home /> : <Login />}
```

---

## 🔹 3. Dynamic Class

```jsx
className={isActive ? "text-red" : "text-black"}
```

---

## 🔹 4. Event Handling

```jsx
onClick={() => setCount(prev => prev + 1)}
```

---

# 🧠 9. Common Mistakes (Very Important)

---

### ❌ Updating state like this:

```js
count = count + 1 ❌
```

---

### ❌ Not using functional update:

```js
setCount(count + 1) ❌ (can break in async)
```

---

### ❌ Missing `value` in input

```jsx
<input onChange={...} /> ❌
```

---

# 🚀 10. Mini Combined Project Idea

---

### 🔥 Build:

* Login form
* Toggle password
* Loader on submit
* Input preview

---

# 🧠 Final Summary

* State is used to manage dynamic data
* `useState` triggers re-render
* Functional updates are safer
* Forms should be controlled
* UI updates based on state

---
# Day-52 : Handleing Form data
```jsx
import { useState } from "react"

const Signup = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: ''
  })
  

  const handleForm =(e) => {
    const input = e.target;
    const name = input.name
    const value = input.value 
    setUser({
      ...user,
      [name]: value
    })
  }

  const registerUser = (e) => {
    e.preventDefault()
    console.log(user);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-120 border border-gray-300 rounded-lg py-4 px-8 bg-white shadow-lg space-y-8">
        <h1 className="text-2xl font-semibold">Register Now</h1>
        <form className="flex flex-col gap-5" onSubmit={registerUser}>
          <input 
            type="text"
            name="fullname"
            placeholder="Enter fullname"
            className="border border-gray-300 py-1 px-3 rounded"
            onChange={handleForm}
            required
          />

          <input 
            type="email"
            name="email"
            placeholder="Enter email"
            className="border border-gray-300 py-1 px-3 rounded"
            onChange={handleForm}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Enter password"
            className="border border-gray-300 py-1 px-3 rounded"
            onChange={handleForm}
            required
          />

          <button className="bg-indigo-500 text-white text-lg font-semibold py-2 px-6 w-fit rounded-md hover:cursor-pointer">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
``` 

---

# 🔥 Day 53 – Building UI using `map()` in React

---

# ⚛️ 1. Understanding State Types

---

## 🔹 1. Standalone State

### 📌 Definition:

Used for **single value control** like:

* Show / Hide
* Toggle password
* Loader
* Animation

---

### ✅ Example:

```jsx id="2m0v3k"
const [show, setShow] = useState(true)

{show && <h1>Hello</h1>}
```

---

## 🔹 2. Object State

### 📌 Definition:

Used when handling **multiple related values (forms)**

---

### ✅ Example:

```jsx id="bq7e1o"
const [form, setForm] = useState({
  name: "",
  email: ""
})
```

---

# 🔁 2. map() in React

---

### 📌 Definition:

`map()` is used to **loop through an array and return JSX elements**

---

### 🧠 Key Idea:

👉 Convert data → UI

---

## ✅ Basic Example:

```jsx id="w1r9b4"
const items = ["Apple", "Banana", "Mango"]

return (
  <>
    {items.map((item, index) => (
      <h1 key={index}>{item}</h1>
    ))}
  </>
)
```

---

# 🧩 3. Your Example Explained

---

```jsx id="k0o4b9"
tmp.map((item, index) => {
  return (
    <React.Fragment key={index}>
      <h1>{item}</h1>
      <img src="/demo.webp" width="200" />
    </React.Fragment>
  )
})
```

---

### 🧠 What’s Happening:

* Looping through `tmp`
* Rendering:

  * `<h1>` → item
  * `<img>` → static image
* Using `Fragment` to wrap multiple elements

---

# 🧱 4. React.Fragment

---

### 📌 Definition:

Used to wrap multiple elements **without adding extra DOM node**

---

## ✅ Syntax:

```jsx id="t5k7fd"
<React.Fragment>
  <h1>Hello</h1>
  <p>World</p>
</React.Fragment>
```

---

## 🔹 Shortcut:

```jsx id="r4n3gk"
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

### ⚠️ Important:

* If using `<React.Fragment>` → need import

```js id="rmpd2p"
import React from "react"
```

* `<> </>` → no import needed ✅

---

# 🧠 5. Key Prop (Very Important)

---

### 📌 Definition:

`key` helps React identify which item changed

---

### ❌ Wrong:

```jsx id="h9z8l2"
<h1>{item}</h1>
```

---

### ✅ Correct:

```jsx id="kz2m1q"
<h1 key={index}>{item}</h1>
```

---

### ⚠️ Best Practice:

* Avoid `index` if data changes frequently
* Use unique ID instead

```jsx id="k5y6px"
<h1 key={item.id}>{item.name}</h1>
```

---

# ⚡ 6. Dynamic Array Rendering

---

### 📌 Definition:

Generate UI dynamically using array methods

---

## ✅ Example:

```jsx id="v9j7n1"
{
  Array(5).fill("Hello").map((item, index) => (
    <h1 key={index}>{item}</h1>
  ))
}
```

---

### 🧠 Breakdown:

* `Array(5)` → create empty array
* `.fill("Hello")` → fill values
* `.map()` → render UI

---

# 🎯 7. Real-World Example (Products List)

---

```jsx id="m8u2xr"
const products = [
  { id: 1, name: "Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 2000 }
]

return (
  <>
    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
      </div>
    ))}
  </>
)
```

---

# 🎨 8. Rendering Images Dynamically

---

## ✅ Example:

```jsx id="y1l8v3"
const users = [
  { name: "Shiv", img: "/demo.webp" },
  { name: "Ram", img: "/demo.webp" }
]

return (
  <>
    {users.map((user, i) => (
      <div key={i}>
        <h1>{user.name}</h1>
        <img src={user.img} width="200" />
      </div>
    ))}
  </>
)
```

---

# ⚡ 9. Advanced Patterns

---

## 🔹 1. Conditional Rendering inside map

```jsx id="j3k9p2"
{
  users.map((user) =>
    user.isActive ? <h1 key={user.id}>{user.name}</h1> : null
  )
}
```

---

## 🔹 2. Filter + Map

```jsx id="v2x8r5"
{
  users
    .filter(user => user.age > 18)
    .map(user => <h1 key={user.id}>{user.name}</h1>)
}
```

---

## 🔹 3. Dynamic Classes

```jsx id="l8s3y7"
<h1 className={user.isActive ? "text-green" : "text-red"}>
  {user.name}
</h1>
```

---

# ❌ 10. Common Mistakes

---

### ❌ Missing key

```jsx id="r8n1w0"
items.map(item => <h1>{item}</h1>)
```

---

### ❌ Using index in dynamic list

```jsx id="q7y4c1"
key={index} ❌ (not recommended for dynamic data)
```

---

### ❌ Not returning JSX

```jsx id="x2z5v9"
items.map(item => {
  <h1>{item}</h1> ❌
})
```

---

### ✅ Fix:

```jsx id="f1a8k3"
items.map(item => <h1>{item}</h1>)
```

---

# 🚀 11. Mini Project Idea

---

### 🔥 Build:

* Product list UI
* Show image + title + price
* Add filter (cheap / expensive)
* Add toggle view (grid/list)

---

# 🧠 Final Summary

* `map()` converts array → UI
* Always use `key`
* Use Fragment for multiple elements
* Can combine `filter + map`
* Dynamic rendering is core of React

---

# Day-54 : react styling and form values

- practice daily
  - form value
  - ui mapping
  - array of object crud
  - useEffect

---

# 🔥 Day 55 – Rendering UI using HTTP Request (API + map)

---

# 🌐 1. What is an API?

### 📌 Definition:

An **API (Application Programming Interface)** allows frontend (React) to communicate with backend/server.

---

### 🔄 Flow:

```
React → API Request → Server → Response (JSON) → React → UI render
```

---

# 🛒 2. Fake Store API

---

### 📌 Free API:

Use Fake Store API

👉 Provides:

* Products
* Categories
* Prices
* Images

---

### ✅ Example Endpoint:

```
https://fakestoreapi.com/products
```

---

# ⚛️ 3. useState + useEffect Together

---

### 📌 Concept:

* `useState` → store API data
* `useEffect` → fetch data after render

---

# 🔁 4. Fetch Data using Axios

---

## ✅ Example:

```jsx
import { useState, useEffect } from "react"
import axios from "axios"

const Products = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products")
      setProducts(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      {
        products.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.image} width="150" />
            <p>₹{item.price}</p>
          </div>
        ))
      }
    </>
  )
}

export default Products
```

---

# 🧠 5. Key Learning

---

### 🔹 Why `useEffect`?

* Runs after component render
* Used for:

  * API calls
  * Side effects
  * Timers

---

### 🔹 Why empty dependency `[]`?

```js
useEffect(() => {}, [])
```

👉 Runs only **once (on mount)**

---

# ⚠️ 6. Common Mistake

---

### ❌ Infinite loop:

```js
useEffect(() => {
  getProducts()
})
```

👉 Runs on every render ❌

---

### ✅ Fix:

```js
useEffect(() => {
  getProducts()
}, [])
```

---

# 🎯 7. Real-World UI Example

---

```jsx
{
  products.map((item) => (
    <div key={item.id} className="border p-4">
      <img src={item.image} width="100" />
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>
    </div>
  ))
}
```

---
# 🧠 Final Summary
---

* API call using axios
* Store data in state
* Render using `map()`
* useState store data in state variable and whan state variable updates ui re-render

---

# 🔥 Day 56 – useEffect (Complete Guide)

---

# ⚛️ 1. What is useEffect?

---

### 📌 Definition:

`useEffect` is a React Hook used to handle **side effects** in components.

---

### 📌 Side Effects Examples:

* API calls
* DOM updates
* Timers (`setTimeout`)
* Event listeners

---

# 🧠 2. Syntax

---

```jsx
useEffect(() => {
  // side effect code

  return () => {
    // cleanup (optional)
  }
}, [dependencies])
```

---

# 🔁 3. Dependency Array (Very Important)

---

## 🔹 Case 1: No Dependency

```jsx
useEffect(() => {
  console.log("Runs every render")
})
```

---

## 🔹 Case 2: Empty Array

```jsx
useEffect(() => {
  console.log("Runs once")
}, [])
```

---

## 🔹 Case 3: With Dependency

```jsx
useEffect(() => {
  console.log("Runs when count changes")
}, [count])
```

---

# 🧹 4. Cleanup Function

---

### 📌 Definition:

Used to clean side effects (memory leaks)

---

## ✅ Example:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Hello")
  }, 2000)

  return () => {
    clearTimeout(timer)
  }
}, [])
```

---

# ⚡ 5. Real Examples

---

## 🔹 1. API Call

```jsx
useEffect(() => {
  fetchData()
}, [])
```

---

## 🔹 2. Timer

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...")
  }, 1000)

  return () => clearInterval(interval)
}, [])
```

---

## 🔹 3. Event Listener

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth)

  window.addEventListener("resize", handleResize)

  return () => {
    window.removeEventListener("resize", handleResize)
  }
}, [])
```

---

# ⚠️ 6. Important Rules

---

### ❌ Don’t use useEffect like this:

```jsx
useEffect(async () => {}) ❌
```

---

### ✅ Correct Way:

```jsx
useEffect(() => {
  const fetchData = async () => {
    await axios.get(...)
  }

  fetchData()
}, [])
```

---

# 🧠 7. useEffect vs useState

| Hook      | Purpose             |
| --------- | ------------------- |
| useState  | Store data          |
| useEffect | Handle side effects |

---

# 🎯 8. Advanced Pattern

---

## 🔹 Conditional API Call

```jsx
useEffect(() => {
  if (userId) {
    fetchUser()
  }
}, [userId])
```

---

# ❌ 9. Common Mistakes

---

### ❌ Missing dependency:

```jsx
useEffect(() => {
  console.log(count)
}, []) ❌
```

---

### ❌ Infinite loop:

```jsx
useEffect(() => {
  setCount(count + 1)
}, [count]) ❌
```

---

# 🧠 Final Summary
---

* `useEffect` handles side effects
* Runs based on dependency array
* Supports cleanup
---

# 🔥 Day 57 – React + Node CRUD (useState + useEffect)

---

# 🚀 1. What is CRUD?

### 📌 Definition:

**CRUD** stands for:

| Operation | Meaning              |
| --------- | -------------------- |
| C         | Create (add data)    |
| R         | Read (get data)      |
| U         | Update (edit data)   |
| D         | Delete (remove data) |

---

### 🔄 Flow:

```text
React (Frontend)
   ↓ API Request
Node/Express (Backend)
   ↓ MongoDB
   ↑ Response
React updates UI
```

---

# ⚙️ 2. ES6 Import in Backend

---

### 📌 Rule:

When using ES Modules in Node.js:

```js
import userController from "./controller/user.controller.js"
```

👉 Always use `.js` extension ✅

---

# ⚛️ 3. useState in CRUD

---

### 📌 Role:

* Store form data
* Store API response data
* Control UI updates

---

### ✅ Example:

```jsx
const [users, setUsers] = useState([])
const [form, setForm] = useState({
  name: "",
  email: ""
})
```

---

# 🔁 4. useEffect in CRUD

---

### 📌 Role:

* Fetch data when component loads

---

### ✅ Example:

```jsx
useEffect(() => {
  getUsers()
}, [])
```

---

# 🌐 5. Full CRUD Example (Frontend)

---

## 🔹 Create (POST)

```jsx
const createUser = async () => {
  await axios.post("/users", form)
}
```

---

## 🔹 Read (GET)

```jsx
const getUsers = async () => {
  const res = await axios.get("/users")
  setUsers(res.data)
}
```

---

## 🔹 Update (PUT)

```jsx
const updateUser = async (id) => {
  await axios.put(`/users/${id}`, form)
}
```

---

## 🔹 Delete (DELETE)

```jsx
const deleteUser = async (id) => {
  await axios.delete(`/users/${id}`)
}
```

---

# 🧾 6. UI Rendering using map()

---

```jsx
{
  users.map((user) => (
    <div key={user._id}>
      <h2>{user.name}</h2>
      <button onClick={() => deleteUser(user._id)}>Delete</button>
    </div>
  ))
}
```

---

# 🎯 7. Form Handling (Dynamic Object State)

---

```jsx
const handleChange = (e) => {
  const { name, value } = e.target

  setForm((prev) => ({
    ...prev,
    [name]: value
  }))
}
```

---

# 🎨 8. CSS Tricks (Important)

---

## 🔹 1. Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}
```

---

## 🔹 2. Negative Margin (`-mx-5`)

### 📌 Definition:

Used to **cancel padding effect of parent**

---

### ✅ Example:

```jsx
<div className="px-5">
  <div className="-mx-5 bg-red-200">
    Full width content
  </div>
</div>
```

---

## 🔹 3. Remove Input Number Arrows

---

### ✅ Your Code (Correct 👍)

```css
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
```

---

### 📌 Why?

* Clean UI
* Better UX for custom inputs

---

# ⚡ 9. Real-World Example (Mini CRUD App)

---

```jsx
import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")

  const getUsers = async () => {
    const res = await axios.get("/users")
    setUsers(res.data)
  }

  const addUser = async () => {
    await axios.post("/users", { name })
    getUsers()
  }

  const deleteUser = async (id) => {
    await axios.delete(`/users/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={addUser}>Add</button>

      {users.map((user) => (
        <div key={user._id}>
          <h1>{user.name}</h1>
          <button onClick={() => deleteUser(user._id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

export default App
```

---

# 🧠 10. Best Practices

---

### ✅ Always re-fetch after CRUD

```js
await deleteUser(id)
getUsers()
```

---

### ✅ Use loading state

```js
const [loading, setLoading] = useState(false)
```

---

### ✅ Handle errors

```js
try {
  await axios.get(...)
} catch (err) {
  console.log(err.message)
}
```

---

# ❌ 11. Common Mistakes

---

### ❌ Forgetting dependency array

```js
useEffect(() => {
  getUsers()
}) ❌
```

---

### ❌ Not updating UI after API

```js
deleteUser(id) ❌ (no UI update)
```

---

### ❌ Mutating state directly

```js
users.push(newUser) ❌
```

---

# 🧠 Final Summary

* CRUD = Create, Read, Update, Delete
* `useState` → store data
* `useEffect` → fetch data
* `map()` → render UI
* Axios → API calls
* CSS tricks improve UI

---

# 🔥 Day 58 – React Form Reset, Edit & Update

---

# 🧾 1. Form Reset in React

---

### 📌 Definition:

Resetting a form means clearing all input values after submission or action.

---

## ❌ Traditional HTML Way:

```html
<form>
  <button type="reset">Reset</button>
</form>
```

👉 Not recommended in React ❌

---

## ✅ React Way (Using State)

---

### 📌 Concept:

Since inputs are controlled by state → reset state → UI resets

---

### ✅ Example:

```jsx
const [form, setForm] = useState({
  name: "",
  email: "",
  password: ""
})

const handleSubmit = (e) => {
  e.preventDefault()

  console.log(form)

  // reset form
  setForm({
    name: "",
    email: "",
    password: ""
  })
}
```

---

### 🧠 Key Idea:

👉 **State = Source of Truth**

---

# ✏️ 2. Edit & Update Functionality

---

## 📌 Concept:

* Click **Edit** → fill form with existing data
* Modify values
* Click **Update** → send API request

---

## 🔹 Step 1: Store Selected Item

```jsx
const [editId, setEditId] = useState(null)
```

---

## 🔹 Step 2: Fill Form on Edit

```jsx
const handleEdit = (user) => {
  setForm({
    name: user.name,
    email: user.email
  })
  setEditId(user._id)
}
```

---

## 🔹 Step 3: Update API

```jsx
const handleUpdate = async () => {
  await axios.put(`/users/${editId}`, form)

  setEditId(null) // reset edit mode
}
```

---

## 🔹 Step 4: Conditional Button

```jsx
<button onClick={editId ? handleUpdate : handleSubmit}>
  {editId ? "Update" : "Submit"}
</button>
```

---

# 🔄 3. Full Flow (Create + Edit + Reset)

---

```jsx
import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({ name: "", email: "" })
  const [editId, setEditId] = useState(null)

  const getUsers = async () => {
    const res = await axios.get("/users")
    setUsers(res.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (editId) {
      await axios.put(`/users/${editId}`, form)
      setEditId(null)
    } else {
      await axios.post("/users", form)
    }

    setForm({ name: "", email: "" }) // reset
    getUsers()
  }

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email })
    setEditId(user._id)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          name="email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <button>{editId ? "Update" : "Add"}</button>
      </form>

      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <button onClick={() => handleEdit(user)}>Edit</button>
        </div>
      ))}
    </>
  )
}

export default App
```

---

# ⚠️ 4. Error Handling (Very Important)

---

### 📌 Rule:

👉 Never leave fetch/API without error handling

---

## ❌ Wrong:

```js
await axios.get("/users")
```

---

## ✅ Correct:

```js
try {
  const res = await axios.get("/users")
} catch (err) {
  console.log(err.message)
}
```

---

### 🧠 Best Practice:

```js
console.log(err.response?.data?.message || err.message)
```

---

# 🔔 5. React Toastify (Notifications)

---

### 📌 Definition:

A library to show **popup notifications (toast messages)**

---

## 📦 Install:

```bash
npm install react-toastify
```

---

## 🔹 Setup:

```jsx
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
```

---

## 🔹 Use in App:

```jsx
<ToastContainer />
```

---

## 🔹 Show Toast:

```jsx
toast.success("User created successfully")
toast.error("Something went wrong")
```

---

## 🎯 Example with API:

```jsx
const handleSubmit = async () => {
  try {
    await axios.post("/users", form)
    toast.success("User added")
  } catch (err) {
    toast.error(err.response?.data?.message || err.message)
  }
}
```

---

# ⚡ 6. Advanced Tips

---

## 🔹 Disable Button While Loading

```jsx
<button disabled={loading}>
  {loading ? "Loading..." : "Submit"}
</button>
```

---

## 🔹 Clear Edit Mode

```js
setEditId(null)
```

---

## 🔹 Reset Form After Update

```js
setForm({ name: "", email: "" })
```

---

# ❌ 7. Common Mistakes

---

### ❌ Not resetting form

```js
// old data remains ❌
```

---

### ❌ Not handling edit state

```js
// always creating new user ❌
```

---

### ❌ No error handling

```js
// app crashes ❌
```

---

# 🧠 Final Summary

* Form reset → done via state
* Edit → preload form + store ID
* Update → API PUT request
* Always handle errors
* Use Toastify for better UX

---

# 🔥 Day 59 – React Components & Props (Complete Guide)

---

# ⚛️ 1. DRY Principle in React

---

### 📌 Definition:

**DRY = Don’t Repeat Yourself**

👉 Write reusable code instead of duplicating it.

---

### ❌ Without DRY:

```jsx
<button className="bg-blue-500">Login</button>
<button className="bg-blue-500">Register</button>
```

---

### ✅ With DRY (Reusable Component):

```jsx
const Button = ({ children }) => {
  return <button className="bg-blue-500">{children}</button>
}
```

---

# 🧩 2. Types of Components

---

## 🔹 1. Route Components

### 📌 Definition:

Components that represent **pages/routes**

---

### ✅ Examples:

* Home
* Login
* Signup
* Dashboard

---

## 🔹 2. Shared Components

### 📌 Definition:

Reusable UI components used across multiple pages

---

### ✅ Examples:

* Button
* Input
* Card
* Modal

---

# 👶 3. Children Props

---

### 📌 Definition:

Anything written between component tags is called **children**

---

### ✅ Example:

```jsx
<PrimaryButton>Register Now</PrimaryButton>
```

---

### 🧠 Inside Component:

```jsx
const PrimaryButton = ({ children }) => {
  return <button>{children}</button>
}
```

---

### 🎯 Output:

👉 Button will display **"Register Now"**

---

# 🎨 4. Button Variants (Design System)

---

### 📌 Common Types:

| Type      | Color    |
| --------- | -------- |
| Success   | Green    |
| Warning   | Yellow   |
| Error     | Red      |
| Info      | Cyan     |
| Primary   | Blue     |
| Secondary | Sky Blue |

---

## ✅ Example:

```jsx
const Button = ({ type, children }) => {
  const styles = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
    primary: "bg-blue-500",
    secondary: "bg-sky-400"
  }

  return (
    <button className={`${styles[type]} text-white px-4 py-2`}>
      {children}
    </button>
  )
}
```

---

### 🔄 Usage:

```jsx
<Button type="success">Save</Button>
<Button type="error">Delete</Button>
<Button type="primary">Submit</Button>
```

---

# ⚠️ 5. Native Functionality Issue

---

### 📌 Problem:

Custom components don’t automatically support native HTML props

---

### ❌ Example:

```jsx
<Button onClick={handleClick}>Click</Button>
```

👉 `onClick` will NOT work ❌

---

### ✅ Solution (Pass Props):

```jsx
const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
```

---

### 🧠 Advanced Solution (Spread Operator):

```jsx
const Button = ({ children, ...props }) => {
  return <button {...props}>{children}</button>
}
```

---

### 🎯 Benefit:

Supports ALL native props:

* onClick
* disabled
* type
* className

---

# 🔁 6. Props (Property Passing)

---

### 📌 Definition:

Passing data from parent → child component

---

## ✅ Example:

```jsx
const User = ({ name }) => {
  return <h1>{name}</h1>
}

<User name="Shiv" />
```

---

# 🔗 7. Prop Drilling

---

### 📌 Definition:

Passing props through multiple components

---

### ⚠️ Problem:

Becomes messy in large apps

---

### ❌ Example:

```jsx
<App>
  <Parent>
    <Child>
      <GrandChild name="Shiv" />
    </Child>
  </Parent>
</App>
```

---

### 🧠 Solution (Advanced):

* Context API
* Redux

---

# 🎯 8. Real-World Reusable Input Component

---

```jsx
const Input = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} className="border px-2 py-1" />
    </div>
  )
}
```

---

### ✅ Usage:

```jsx
<Input label="Email" type="email" placeholder="Enter email" />
```

---

# 🎨 9. UI Frameworks

---

### 📌 Definition:

Pre-built UI component libraries

---

## 🔹 Popular UI Frameworks:

* Material UI
* Ant Design
* ShadCN UI
* Next UI
* Radix UI
* Magic UI
* Accenture UI

---

### 🧠 Why use them?

* Faster development
* Professional UI
* Accessibility support

---

# ⚡ 10. Advanced Patterns

---

## 🔹 1. Default Props

```jsx
const Button = ({ type = "primary" }) => {}
```

---

## 🔹 2. Conditional Classes

```jsx
className={type === "error" ? "bg-red" : "bg-blue"}
```

---

## 🔹 3. Composition Pattern

```jsx
<Card>
  <h1>Title</h1>
  <p>Description</p>
</Card>
```

---

# ❌ 11. Common Mistakes

---

### ❌ Not passing props

```jsx
<Button>Click</Button> // but not using children ❌
```

---

### ❌ Ignoring native props

```jsx
<button>{children}</button> ❌ (no onClick support)
```

---

### ❌ Overusing prop drilling

---

# 🧠 Final Summary

* React follows DRY principle
* Components = reusable UI blocks
* Props = data passing mechanism
* Children = content inside component
* Spread props make components powerful
* UI frameworks speed up development

---

# 🔥 Day 60 – React Modal & Drawer Components

---

# ⚛️ 1. Core Concepts Revision

---

## 🔹 1. Children Props

### 📌 Definition:

Content passed inside component tags

```jsx
<Button>Submit</Button>
```

👉 `"Submit"` is **children**

---

## 🔹 2. Attribute Props

### 📌 Definition:

Props passed like HTML attributes

```jsx
<Button type="primary" icon="check-line" />
```

---

## 🔹 3. Data Flow in React

### 📌 Rule:

👉 **Parent → Child (via props)**

---

# 🧠 2. Component Object Modeling

---

### 📌 Definition:

Using objects to manage styles/configurations for components

---

## ✅ Your Button Model (Perfect Pattern 👏)

```jsx
const ButtonModel = {
  primary: "bg-blue-500",
  success: "bg-green-500",
  danger: "bg-red-500"
}
```

---

### ✅ Usage:

```jsx
<button className={ButtonModel[type]}>
```

---

### 🧠 Why this is powerful?

* Centralized styling
* Easy to scale
* Clean code

---

# 🎯 3. Reusable Button Component (Enhanced)

---

## ✅ Improved Version:

```jsx
const Button = ({
  children = "Button",
  type = "default",
  icon,
  ...props
}) => {
  return (
    <button
      className={ButtonModel[type] || ButtonModel.default}
      {...props}
    >
      {icon && <i className={`ri-${icon} mr-1`}></i>}
      {children}
    </button>
  )
}
```

---

### 🧠 Improvements:

* Default type added
* Spread props (`...props`) → supports `onClick`, `disabled`, etc.

---

# 🪟 4. Modal Component

---

## 📌 Definition:

A **Modal** is a popup overlay that appears on top of UI.

---

## 🔹 Features:

* Centered UI
* Background overlay
* Close on click

---

## ✅ Basic Modal Example:

```jsx
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg relative">
        
        <button
          className="absolute top-2 right-2"
          onClick={onClose}
        >
          ✖
        </button>

        {children}
      </div>
    </div>
  )
}
```

---

## 🔄 Usage:

```jsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal isOpen={open} onClose={() => setOpen(false)}>
  <h1>Hello Modal</h1>
</Modal>
```

---

# 📦 5. Drawer Component

---

## 📌 Definition:

A **Drawer** is a panel that slides from side (left/right/top/bottom)

---

## 🔹 Use Cases:

* Sidebar menu
* Filters panel
* Settings panel

---

## ✅ Example:

```jsx
const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform`}
    >
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  )
}
```

---

## 🔄 Usage:

```jsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer isOpen={open} onClose={() => setOpen(false)}>
  <h2>Menu</h2>
</Drawer>
```

---

# ⚡ 6. Modal vs Drawer

---

| Feature    | Modal         | Drawer     |
| ---------- | ------------- | ---------- |
| Position   | Center        | Side       |
| Use Case   | Alerts, Forms | Navigation |
| Background | Overlay       | Optional   |

---

# 🧩 7. Shared Component Strategy

---

### 📌 If NOT using UI libraries → build your own

---

## 🔹 Must-have Components:

* Button ✅
* Input
* Form
* Card
* Modal
* Drawer
* Toast
* Video
* Audio

---

### 🧠 Folder Structure:

```
components/
 ├── Button.jsx
 ├── Input.jsx
 ├── Modal.jsx
 ├── Drawer.jsx
 ├── Toast.jsx
```

---

# 🎯 8. Advanced Patterns

---

## 🔹 1. Controlled Component (Modal)

```jsx
const [open, setOpen] = useState(false)
```

👉 Parent controls visibility

---

## 🔹 2. Reusable Composition

```jsx
<Modal>
  <LoginForm />
</Modal>
```

---

## 🔹 3. Dynamic Content

```jsx
<Drawer>
  {user ? <Dashboard /> : <Login />}
</Drawer>
```

---

# ⚠️ 9. Common Mistakes

---

### ❌ Not controlling open/close

```jsx
<Modal /> ❌ (no state control)
```

---

### ❌ No overlay click handling

---

### ❌ Hardcoding UI

---

# 🧠 Final Summary

* Props → pass data parent → child
* Children → dynamic content
* ButtonModel → scalable styling
* Modal → popup UI
* Drawer → sliding panel
* Build reusable components for DRY code

---
