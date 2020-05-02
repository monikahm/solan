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
pip3 install -r requirements.txt
python3 manage.py makemigrations   
python3 manage.py migrate
python3 manage.py runserver
```

To run frontend you will need to have yarn ([see installation](https://classic.yarnpkg.com/en/docs/install/#mac-stable)). Then go to frontend folder and run command:
```
yarn
```
To start frontend 
```
yarn start
``` 
### Linting
Before committing run:
```
yarn lint
```
To fix issues run:
```
yarn lint --fix
```
