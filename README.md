
# Ostad-School Assessment

Welcome to the Ostad-School Assessment project! This project is designed to provide an API for school assessments, enabling users to perform various operations such as retrieving, updating, and deleting assessment data. Please follow the instructions below to get started


## Prerequisites

Before using the Ostad-School Assessment API, make sure you have the following prerequisites installed:




## Getting Started

Clone the Repository

```bash
  git clone https://github.com/monirhabderabby/ostad-school-assestment.git
```

Make sure your environment variable files are connnected to the mysql Database




## API Reference

#### Single User Registrati0on

```http
  GET /api
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/registration` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

