
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




## API Reference | Baseurl- http://localhost:3000

#### Single User Registrati0on

```http
  POST /api/registration
```


#### Multiple User registration

```http
  POST /api/registration/all
```

#### Update Student Information

```http
  PATCH /api/students/${id}
```

#### Delete Student Information

```http
  DELETE /api/students/${id}
```

#### Get Individual Student Information

```http
  GET /api/students/${id}
```

#### Get All Students

```http
  GET /api/students
```




