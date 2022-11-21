# CoopExerc

This is a project whose backend uses django framework and frontend use React framework.The backend API in Django returns data about a car and the React frontend display this data. 


## Backend

The backend is based on Django, enabling admin function. Data Model is Car.

### To test on Local environment, please follow the listed command

1. Go to the backend folder

  `cd backend`

2. Do the migrations

  `python manage.py makemigrations`
`python manage.py migrate`

3. Load initial data

  `python manage.py loaddata init.json`

4. Run the backend server

  `python manage.py runserver`



## Frontend



The client folder is the first version.

-- Data : Data used is the given car information given in the design doc

-- Tech Stack : This version only use React. 


The extraClient folder is the second version.

-- Data : Based on the given data, the start and end date is changed. So the progress bar's effect is more clear.

-- Tech Stack : Except for React, this version also use React-Redux, Bootstrap to help the layout and state management. 

### To test on Local environment, please follow the listed command

1. Go to the client folder

  if test client foler: `cd client`

  if test extraClient folder: `cd extraClient`


2. install the dependencies 

  `npm install`


3. start the frontend

  `npm start`
