# Product Inventory API

## 📝 Project Overview

> A Rest API, include with CRUD operations and also included _pagination_, _sorting_ and _filtering_ . This API has enable **_CORS_** to allow cross-origin requests.

## ✨ Features

### API Features

- Add product
- Get all products
- Get a specific product by id
- Update product
- Delete product
- Implement pagination for `Get /api/products`
- Added sorting and filtering features

## 🛠️ Tech Stack

### Backend

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling

## 🚀 Test

### Prerequisites

- Browser
- Post Man

### Testing API

- Use **_Postman_** .
- Test the _Endpoints_ at `` .

#### API Endpoints (CRUD Operations)

| HTTP Method | Endpoint            | Description                  |
| ----------- | ------------------- | ---------------------------- |
| POST        | `/api/products`     | Add a new produtc            |
| GET         | `/api/products`     | Get all products             |
| GET         | `/api/products/:id` | Get a specific product by ID |
| PUT         | `/api/products/:id` | Update a product by ID       |
| DELETE      | `/api/products/:id` | Delete a product by ID       |

#### Sorting & Filtering

| Method     | HTTP Method | Endpoint                                                                         | Description                                                                                                   |
| ---------- | ----------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Pagination | GET         | `/api/products?page=2&limit=20`                                                  | Get the second page with 20 products per page                                                                 |
| Filtering  | GET         | `/api/products?category=Electronics`                                             | Get all product in the "Electronics" category                                                                 |
| Sorting    | GET         | `/api/products?sortBy=price&sortOrder=desc`                                      | Get all products sorted by price in descending order                                                          |
| Sorting    | GET         | `/api/products?sortBy=name&sortOrder=asc`                                        | Get all products sorted by name in ascending order                                                            |
| Combining  | GET         | `/api/products?category=Electronics&sortBy=price&sortOrder=desc&page=2&limit=10` | Get the second page of "Electronics" products, sorted by price in descending order, with 10 products per page |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
