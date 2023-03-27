### >

<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4" type="video/mp4">
  </video>
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
  <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://assets.ccbp.in/frontend/content/react-js/jobby-app-failure-output-v1.mp4" type="video/mp4">
  </video>
</div>
<br/>

### Design Files

<details>
<summary>Login Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Login](https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login](https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Login Failure](https://assets.ccbp.in/frontend/content/react-js/jobby-app-login-failure-lg-output.png)
</details>

<details>
<summary>Home Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png)
</details>

<details>
<summary>Jobs Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Jobs](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Jobs Success](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-success-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Jobs](https://assets.ccbp.in/frontend/content/react-js/jobby-app-no-jobs-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Profile Failure](https://assets.ccbp.in/frontend/content/react-js/jooby-app-profile-failure-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Jobs Failure](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-failure-lg-output-v0.png)
</details>

<details>
<summary>Job Item Details Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Job Details Success](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-success-sm-output-v0.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Job Details Failure](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-failure-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Job Details Success](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-success-lg-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Job Details Failure](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-failure-lg-output.png)
</details>

<details>
<summary>Not Found Route</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/jobby-app-not-found-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Not Found](https://assets.ccbp.in/frontend/content/react-js/jobby-app-not-found-lg-output-v0.png)
</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- **Login Route**

  - When invalid credentials are provided and the **Login** button is clicked, then the error message received from the response should be displayed
  - When valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user, tries to access the Home, Jobs and Job Item Details Route, then the page should be navigated to Login Route
  - When an _authenticated_ user, tries to access the Home, Jobs and Job Item Details Route, then the page should be navigated to the respective route
  - When an _authenticated_ user, tries to access the Login Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user opens the Home Route
    - Clicks on the **Find Jobs** button, then the page should be navigated to the Jobs Route

- **Jobs Route**

  - When an _authenticated_ user opens the Jobs Route

    - An HTTP GET request should be made to **Profile API URL**
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/jobby-app-profile-failure-lg-output.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to **Profile API URL**
    - An HTTP GET request should be made to **Jobs API URL** with `employment_type`, `minimum_package`, and `search` as query parameters with empty strings as initial values
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of jobs received from the response
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/jobby-app-jobs-failure-lg-output.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to **Jobs API URL**
    - When a value is provided in the search input and search icon button is clicked
      - Make an HTTP GET request to the **Jobs API URL** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the search input
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of jobs received from the response
    - When **Employment Types** options are selected
      - Make an HTTP GET request to the **Jobs API URL** with `jwt_token` in the Cookies and query parameter `employment_type` with value as a list of selected employment type id's as a single string separated by `,`
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of jobs received from the response
    - When **Salary Range** is selected
      - Make an HTTP GET request to the **Jobs API URL** with `jwt_token` in the Cookies and query parameter `minimum_package` with value as the id of the selected salary range
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, display the list of jobs received from the response
    - When the HTTP GET request made to the **Jobs API URL** returns an empty list for jobs then [No Jobs View](https://assets.ccbp.in/frontend/content/react-js/jobby-app-no-jobs-lg-output.png) should be displayed

  - When multiple filters are applied, then the HTTP GET request should be made with all the filters that are applied
  - For example: When the **Full Time** and **Part Time** employment types are selected, salary range **10 LPA and above** is selected and search input field is empty, then the **Jobs API URL** will be as follows

    ```js
    const apiUrl = 'https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&minimum_package=1000000&search='
    ```

  - When a **job** is clicked, then the page should be navigated to the Job Item Details Route

- **Job Item Details Route**

  - When an _authenticated_ user opens the Job Item Details Route
    - An HTTP GET request should be made to **Job Details API URL** with `jwt_token` in the Cookies and job `id` as path parameter
      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - The list of similar jobs should be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure View](https://assets.ccbp.in/frontend/content/react-js/jobby-app-job-details-failure-lg-output.png) should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to **Job Details API URL**
  - When the **Visit** button is clicked, then the corresponding company website URL should be opened in a new tab

- **Not Found Route**

  - When a random path is provided as the URL path, then the page should be navigated to the Not Found Route

- **Header**

  - When the **website logo** image is clicked, then the page should be navigated to the Home Route
  - When the **Home** link is clicked, then the page should be navigated to the Home Route
  - When the **Jobs** link is clicked, then the page should be navigated to the Jobs Route
  - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- The App is provided with `employmentTypesList`. It consists of a list of employment type objects with the following properties in each employment type object

  |       Key        | Data Type |
  | :--------------: | :-------: |
  | employmentTypeId |  String   |
  |      label       |  String   |

- The App is provided with `salaryRangesList`. It consists of a list of salary range objects with the following properties in each salary range object

  |      Key      | Data Type |
  | :-----------: | :-------: |
  | salaryRangeId |  String   |
  |     label     |  String   |

</details>

<details>

<summary>API Requests & Responses</summary>

<br/>

**Login API**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Profile API**

#### API: `https://apis.ccbp.in/profile`

#### Method: `GET`

#### Description:

Returns a response containing the profile details

#### Sample Response

```json
{
  "profile_details": {
    "name": "Rahul Attuluri",
    "profile_image_url": "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png",
    "short_bio": "Lead Software Developer and AI-ML expert"
  }
}
```

**Jobs API**

#### API: `https://apis.ccbp.in/jobs`

#### Example: `https://apis.ccbp.in/jobs?employment_type=FULLTIME,PARTTIME&minimum_package=1000000&search=`

#### Method: `GET`

#### Description:

Returns a response containing the list of all jobs

#### Sample Response

```json
{
  "jobs": [
    {
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
      "employment_type": "Full Time",
      "id": "d6019453-f864-4a2f-8230-6a9642a59466",
      "job_description": "We’re in search of a Back-End Software Engineer that specializes in server-side components. In this role, you’ll primarily work in NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of knowledge on basic algorithms and data structures. As a Back-End Engineer, you might be architecting new features for our customers.",
      "location": "Bangalore",
      "package_per_annum": "21 LPA",
      "rating": 4,
      "title": "Backend Engineer"
    }
    ...
  ],
  "total":25,
}
```

**Job Details API**

#### API: `https://apis.ccbp.in/jobs/:id`

#### Example: `https://apis.ccbp.in/jobs/bb95e51b-b1b2-4d97-bee4-1d5ec2b96751`

#### Method: `GET`

#### Description:

Returns a response containing the job details

#### Sample Response

```json
{
  "job_details": {
    "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
    "company_website_url": "https://about.netflix.com/en",
    "employment_type": "Internship",
    "id": "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751",
    "job_description": "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev",
    "skills": [
      {
        "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png",
        "name": "Docker"
      },
      ...
    ],
    "life_at_company": {
      "description": "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
      "image_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
    },
    "location":"Delhi",
    "package_per_annum":"10 LPA",
    "rating":4
  },
  "similar_jobs": [
    {
      "company_logo_url": "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png",
      "employment_type": "Freelance",
      "id": "2b40029d-e5a5-48cc-84a6-b6e12d25625d",
      "job_description": "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
      "location": "Delhi",
      "rating": 4,
      "title": "Frontend Engineer"
    },
    ...
  ]
}
```

</details>

- User credentials

  ```text
   username: rahul
   password: rahul@2021

  ```
