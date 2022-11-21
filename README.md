# CoopExerc

This is a project whose backend uses django framework and frontend use React framework.The backend API in Django returns data about a car and the React frontend display this data. 


If you want to try the whole project. Please start the backend first, then the front end.


## Backend (Prefer Python3.9)

The backend is based on Django, enable admin function. Data Model is Car.


### To test on Local environment, please follow the listed command

1. Go to the backend folder

        cd backend
        
2. Install related dependencies.

        python -m pip install djangorestframework
        python -m pip install django-cors-headers

2. To migrate the database open terminal in project directory and type.

        python manage.py makemigrations
        python manage.py migrate

3. Load initial data

        python manage.py loaddata init.json

4. To run the program in local server use the following command

        python manage.py runserver
        


Server will be available at http://localhost:8000 in your browser.
 
 
 
 ####
 
## Frontend

The frontend is based on React Framework. 

There are two versions, who have differences on data point and dependencies. 

The second version is used to show another way to implement and show the effect of ongoing progress bar.


### First Version

The client folder is the first version.

#### Data

Data used is the given car information given in the design doc.

#### Tech Stack

This version only use React. 



### Second Version

The extraClient folder is the second version.

#### Data

Based on the given data, the start and end date is changed. So the progress bar's effect is more clear.

#### Tech Stack

Except for React, this version also use React-Redux, Bootstrap to help the layout and state management. 


### To test on Local environment, please follow the listed command

1. Go to the client folder

   if test client foler:  
        
        cd client

   if test extraClient folder: 
        
        cd extraClient


2. install the dependencies 

        npm install


3. start the frontend

        npm start
 
  Open http://localhost:3000 to view it in the browser.
