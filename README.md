# How to start guide?

1. Install dependencies:
```
npm install
```

2. Start the code:
```
npm start
```

# Endpoints Documentation

This documentation provides information about the payload structure required for each endpoint.

## 1. POST: /jobs

**Description:**
Add a new job to the job list.

**Request Payload:**

```json
{
    "name": "Specialist",
    "location": "Colombo, India",
    "posted": "23rd May",
    "status": "Published",
    "applied": 40,
    "jobViews": 100,
    "daysLeft": 7,
    "premium": false,
    "dateFormat": "2023-05-23"
  }
```

**Response Body:**
```json
{
    "name": "Specialist",
    "location": "Colombo, India",
    "posted": "23rd May",
    "status": "Published",
    "applied": 40,
    "jobViews": 100,
    "daysLeft": 7,
    "premium": false,
    "dateFormat": "2023-05-23",
    "_id": "65799150c244249b20da2a35",
    "createdAt": "2023-12-13T11:11:12.613Z",
    "updatedAt": "2023-12-13T11:11:12.613Z",
    "__v": 0
}
```


## 2. GET: /
**Description:**
Get job list.

**Response Body:**
```json
[
    {
    "_id": "65796a68c244249b20da2a29",
    "name": "Interventional Cardiologist",
    "location": "New York City, USA",
    "posted": "25th May",
    "status": "Published",
    "applied": 98,
    "jobViews": 128,
    "daysLeft": 2,
    "premium": false,
    "dateFormat": "2023-05-25",
    "createdAt": "2023-12-13T08:25:12.794Z",
    "updatedAt": "2023-12-13T08:25:12.794Z",
    "__v": 0
}
]
```

