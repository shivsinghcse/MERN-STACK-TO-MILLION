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

- **Request :** When a user performst an action (e.g., typing in search bar and pressing Enter) is called request.

- **Response :** The data/resource the server sends back to the client for that request is called response.

### ⚡ Latency

- The total time taken for a request to reach the server and for the response to come back.

- **Low Latency**: Faster loading and better user experience.
- **Best Practice**: For landing pages, latency should be 3s to 5s maximum.

### 👩🏼‍💻 Client-side & Server-side Language

- **Client-side :** The language which runs on client's computer (browser) is called client side language. ex - HTML, CSS, JavaScript, VBScript(outdated).
- **Server-side :** The language which runs on server is called server-side language. ex - Node.js, php, Laravel, CodeIgnitor, Java, python, c++, .Net, C#.

# Day - 16 Node.js API

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
http://www.codingott.com/users

- Here, `/users` is the endpoint (resource)(interms of backend)
```

### 🔹 CRUD Operations in REST API

- Generally when we create APIs, we do mainly 4 things and this is called CRUD.
- Each resource usually supports 4 main actions:

  - Store (Create)
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
