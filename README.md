# Angular Kafka App

This is the frontend UI built with Angular to interact with the Spring Boot Kafka backend service. Users can submit messages which are then sent to Kafka topics.

## Features

- Standalone Angular app (v17+)
- Message submission via REST API (to Spring Boot service)
- Simple two-button interface for publishing messages
- Response message display // to be create a messaging app

## Prerequisites

- Node.js (v18+)
- Angular CLI (v17+)
- Backend server running at `http://localhost:8080`

## Setup Instructions

```bash
# Install dependencies
npm install

# Start development server
ng serve
```

Visit: [http://localhost:4200](http://localhost:4200)

## Notes

- Ensure CORS is properly configured in backend (`spring-kafka-service`) for requests from `http://localhost:4200`.
- You can modify the backend base URL in the `kafka.service.ts` if needed.

---

## 📝 License

This project is licensed under the MIT License © Vinayak Gawade.
