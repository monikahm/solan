# Solan
Solan website is a website made for Linjeforeningen Solan by Team Moser.   
## Frameworks
### Frontend
Frontend is written in react.  
Code is in Solan/frontend folder.  

### Backend
Backend is made with Django framework.
Code for backend is in Solan/backend folder.

All components can be found in src/components folder. 

We chose to not have one single models.py file. Rather split it up to have better overview and easier to find particular model.
Because of this if you make new model remember to import it in `__init__.py` in models folder. 

You can find more documentation and information about Django [here](https://www.djangoproject.com/) 

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
Check which version of python you have. Run 
```
python -V
```
If you have python as alias for python 3 you only need to write pip and python in command line.

Then you can navigate to backend folder and run:  
```
pip3 install -r requirements.txt
python3 manage.py makemigrations   
python3 manage.py migrate
python3 manage.py runserver
```

To run frontend you will need to have npm. It comes with node. You can find installation [here](https://nodejs.org/en/). Then go to frontend folder and run command:
```
npm install
```
To start frontend 
```
npm start
``` 

##Docker
If you want to start whole project with Docker you will need to install Docker on your pc. 
Then run from the cli
```
docker-compose build
docker-compose up
```
The whole project will then run on 127.0.0.1
