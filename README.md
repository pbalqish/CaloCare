[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15057435&assignment_repo_type=AssignmentRepo)

# Individual Project Phase 2

> Project Name : CaloCare (Calorie Care).
>
> Application Theme : Generate a healthy daily meal plan based on your goal with OpenAI, and the BMI Weight Status Checker.
>
> Server Deployment :
>
> Client Deployment :

## **Endpoints:**

| Method | Route             | Description                                               |
| :----- | :---------------- | :-------------------------------------------------------- |
| POST   | /register         | Registrasi `User` yang belum terdaftar didalam database   |
| POST   | /login            | Login untuk `User` yang sudah terdaftar di dalam database |
| POST   | /google-login     | Login/Register `User` menggunakan Google Account          |
| GET    | /myprofile        | Menampilkan data `Profile` user log in                    |
| PUT    | /myprofile/update | Mengupdate data `Profle` user log in                      |
| POST   | /weight-status    | Generate `Weight Status` berdasarkan data user log in     |

## **Global Error**

_Response (401 - Unauthorized)_

```json
{
  "message": "Login to continue"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You don't have any access"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```

## **1. POST /register**

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- body:

```json
{
  "fullName": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Registration successful",
  "user": {
    "fullName": "string",
    "email": "string"
  }
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Email already exists"
}
OR
{
    "message": "Please enter valid Email format"
}
OR
{
    "message": "Password is required"
}
OR
{
    "message": "Minimum password is 8 characters"
}
```

## **2. POST /login**

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email or Password"
}
OR
{
  "message": "Please input your Email and Password"
}
```

## **3. POST /google-login**

Request:

- headers:

```json
{
  "token": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

## **4. GET /myprofile**

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- userLogin:

```json
{
  "UserId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "data": {
    "id": 1,
    "fullName": "Manusia 1",
    "gender": "Female",
    "age": 23,
    "weight": 50,
    "height": 161,
    "UserId": 1
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

## **5. PUT /myprofile/update**

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- userLogin:

```json
{
  "UserId": "integer"
}
```

- body:

```json
{
  "fullName": "string",
  "gender": "string",
  "age": "string",
  "weight": "string",
  "height": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Successfully update profile",
  "profile": {
    "id": 1,
    "fullName": "Manusia 1",
    "gender": "Female",
    "age": 35,
    "weight": 55,
    "height": 155,
    "UserId": 1
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "User Id is required"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

## **6. POST /weight-status**

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- userLogin:

```json
{
  "UserId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "resOpenAI": {
    "fullName": "Manusia 1",
    "bmi": "22.9",
    "bmi_category": "Normal weight",
    "healthy_weight": "less than 18.5 - 24.9"
  }
}
```
