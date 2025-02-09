# 🚀 Caching API

A simple and customizable caching API built with **Node.js** and **Express**. This API allows you to store, retrieve, and manage key-value pairs with a predefined maximum size limit. Additional features include cache statistics, clearing all cache data, and more!

---

## 📁 Features

- **Store Key-Value Pairs**: Add key-value data to the in-memory cache.
- **Retrieve Values**: Get values by key or fetch all cached data.
- **Delete Data**: Remove specific keys or clear the entire cache.
- **Cache Statistics**: Track current cache size, hits, misses, and more.
- **Predefined Max Size**: Limit the cache to a fixed number of items (default: 10).

---

## 📡 API Endpoints

### 1. **Add Key-Value to Cache**
- **POST** `/cache`
- **Request Body:**
  ```json
  {
    "key": "username",
    "value": "john"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Key-value pair stored successfully."
  }
  ```

### 2. **Retrieve a Value by Key**
- **GET** `/cache/:key`
- **Example:** `GET /cache/username`
- **Response:**
  ```json
  {
    "key": "username",
    "value": "john"
  }
  ```

### 3. **Get All Cached Data**
- **GET** `/cache`
- **Response:**
  ```json
  {
    "cache": {
      "username": "john",
      "email": "john@example.com"
    }
  }
  ```

### 4. **Delete a Specific Key**
- **DELETE** `/cache/:key`
- **Example:** `DELETE /cache/username`
- **Response:**
  ```json
  {
    "message": "Key deleted successfully."
  }
  ```

### 5. **Clear Entire Cache**
- **DELETE** `/cache`
- **Response:**
  ```json
  {
    "message": "Cache cleared successfully."
  }
  ```

### 6. **Get Cache Statistics**
- **GET** `/cache/stats`
- **Response:**
  ```json
  {
    "maxSize": 10,
    "currentSize": 2,
    "hits": 5,
    "misses": 3
  }
  ```

---

## 🚗 Running Locally

1. **Clone the Repository:**
 
2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   npm start
   ```

4. **API will be running at:** `http://localhost:3000`

---

## 🚀 Deployment

This API is deployed on **Render**. You can access it here:

**Live URL:** https://caching-api.onrender.com

---

## 🌐 Environment Variables

- **PORT:** The port on which the server runs (default is `3000`). Render automatically assigns this.

---

## 📊 Example Test Cases

1. **Store Key-Value:**
   ```bash
   curl -X POST https://caching-api.onrender.com/cache -H "Content-Type: application/json" -d '{"key":"name", "value":"Alice"}'
   ```

2. **Retrieve Value by Key:**
   ```bash
   curl https://caching-api.onrender.com/cache/name
   ```

3. **Get All Cache Data:**
   ```bash
   curl https://caching-api.onrender.com/cache
   ```

4. **Clear Entire Cache:**
   ```bash
   curl -X DELETE https://caching-api.onrender.com/cache
   ```

5. **Get Cache Stats:**
   ```bash
   curl https://caching-api.onrender.com/cache/stats
   ```

---

## 👨‍💻 Author

**Mouzamuddin Mir**  
[GitHub](https://github.com/Mouzamuddin) | [LinkedIn](https://www.linkedin.com/in/mouzamuddin-mir-623625200/)

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **Render** (for deployment)

---

## 📆 License

This project is licensed under the **MIT License**. Feel free to fork and modify as needed!

