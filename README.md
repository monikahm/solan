# Solan
Solan website is a website made for Linjeforeningen Solan by Team Moser.   
## Frameworks
### Frontend
Frontend is written in react.  
Code is in frontend folder.  

### Backend
Backend is made with Django framework.

## First time setup
You will need python3 and pip3 to run project.  

In solan folder run:  
``` 
pip3 install virtualenv <virtualenv-name>  
source <virtualenv-name>/bin/activate
```
If you're on Windows insted of source run:  
```
<virtualenv-name>/Source/activate.bat
```

Then you can navigate to backend folder and run:  
```
pip3 install requirements.txt
python3 manage.py makemigations   
python3 manage.py migrate
python3 manage.py runserver
```

To run frontend go to frontend folder and install either yarn or npm with command
```
yarn
or 
npm install
```
To start frontend 
```
yarn start
or  
npm start 
```
