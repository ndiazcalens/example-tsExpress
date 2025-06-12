# example-tsExpress

A minimal API project built with TypeScript and Express focused on input validation.  
Includes basic route handling, type-safe request parsing, and enum-based field validation.

## 📚 Project Purpose

This project was built as a learning exercise to understand how to safely validate and parse incoming request data in an Express API using TypeScript.  
It includes examples of:

- Type guards and parsing functions  
- Enum-based value validation  
- Error handling for malformed input  
- Separation of concerns between routes, services, and utilities

> 🧠 This project is inspired by the [Midudev YouTube tutorial](https://www.youtube.com/@midudev) on building an Express + TypeScript API.

## 🚀 Technologies Used

- **TypeScript**  
- **Node.js**  
- **Express**  
- **ts-node-dev** for development  
- **Nodemon** (optional)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ndiazcalens/example-tsExpress.git
   cd example-tsExpress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
.
├── routes/             # Express route definitions
├── services/           # Business logic and data manipulation
├── utils.ts            # Input validation and parsing logic
├── types.ts            # Custom TypeScript types and enums
├── index.ts            # Main server entry point
```

## 📬 API Endpoints

### `GET /api/diaries`
Returns all diary entries (excluding sensitive info).

### `GET /api/diaries/:id`
Returns a single diary entry by ID.

### `POST /api/diaries`
Adds a new diary entry. The request body must include:
```json
{
  "date": "2024-01-01",
  "weather": "sunny",
  "visibility": "great",
  "comment": "Nice day for a walk"
}
```

## ✅ Validation Features

Each field in the POST request is validated using type guards and helper functions:
- Date strings are validated and parsed using `Date.parse`.
- Enums (`Weather`, `Visibility`) are checked against allowed values.
- All fields must be of correct type or an error is thrown.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made by [@ndiazcalens](https://github.com/ndiazcalens)
