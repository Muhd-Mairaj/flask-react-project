# Flask-React-Project (An Item Tracker)
#### Video Demo:  <URL HERE>
#### Description: [Skip to the  Description](#project-description)


## Testing

1. In the root folder, run `npm run backend` to start the backend server. This script is added to the "`package.json`" file on the root folder for ease of use. **Note:** Make sure to set the SECRET_KEY by running `export SECRET_KEY="your_secret_key_here"`. More on SECRET_KEY [here](https://flask.palletsprojects.com/en/2.2.x/config/?highlight=secret_key#SECRET_KEY).
2. Run `npm start` to start the frontend server. In a moment the page should open up. If it doesnt, navigate to [http://localhost:3000](http://localhost:3000) on any browser

## Pre-word
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
To learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).<br>
To learn React, check out the [React documentation](https://reactjs.org/).<br>

#### Progressive Web App in Mind
This Web App was made with the concept of Progressive Web Apps (PWAs) in mind. It is thus implemented as a completely mobile responsive application.
Additionally, I used React for the front end to implement client-side routing. As such navigation throughout the application is still possible bar areas where a request to the server is necessary.<br>
The only thing required for the PWA path would to register a service worker. More details of making a PWA through `Create-React-App` can be found at this page: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### A word about the current state of the app
If you tried to test the application, it would appear pretty basic. In its current stage, priority was given to:
- Authentication and Security features,
- Developing a good code structure to promote adding features and to reduce future development time,
  - e.g splitting code into directories "pages" for the different routes and "contexts" for [React Contexts](https://reactjs.org/docs/context.html), etc.
  - Moving all the code involving interaction with the API to a separate class, available to use throughout the application
  - etc...
- ~~(And also... my own researching of different concepts involving the web and tools to pick the right choice for my project, along with learning the new languages involved.)~~

The TODO list for many further additions possible to the application is expressed in detail after the project description (skip [here](#todo-list) if impatient)

## Project Description
The two main parts to the project are the frontend and the backend parts.

#### The "`backend`" folder.
This is where all the backend components live. "`api.py`" is the app configured to run in the `".flaskenv"` file. (**Note:** `python-dotenv` package is required for this to work). This `.py` file is where all the views are defined as well as wrapper functions for authentication. HTTP Basic auth and HTTP Token auth are the two authentication methods used. Every request to the server is then send with a special token, failing its approval the user is denied access to the resources. `"helpers.py"` contains other helper functions utilised by the backend Api.

#### The frontend.
The root folder contains all the files and folders for the frontend. The "`public`" directory contains assets required by the whole application, including the template "`index.html`" file on which the whole application builds on.<br>
The "`src`" folder however, is where all the custiom application components are. <br>
"`App.js`" contains all the routes, the components for which are defined in the "`pages`" folder. <br>
Additional Components and Contexts are defined in the "`components`" and "`contexts`" folders respectively. <br>
A "test" route is defined to demonstrate offline usage possible due to client-side routing.

An important choice with the homepage, was to add new items to the top of the list, rather than the default sorted by expiry view. On reload the new items are then arranged in sorting order as well. This is done for performance reasons to prevent unnecessary calls to the Api and provide a more fluent user experience

#### package.json
A "proxy" header is added to direct the requests to the flask Api.
Two scripts are also added to run the backend, one with debugging enabled (useful for checking print messages for example)
<!-- ###  -->

## Todo List
- [ ] Add further security with refreshing tokens
- [ ] Add a remove item feature
- [ ] Add a change password feature
- [ ] Add a "Forgot Password?" feature

## Other References
- [Introducing the React Mega-Tutorial](https://blog.miguelgrinberg.com/post/introducing-the-react-mega-tutorial)
- [How To Create a React + Flask Project](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
- [How to Deploy a React-Router + Flask Application](https://blog.miguelgrinberg.com/post/how-to-deploy-a-react-router-flask-application)
- [Designing a RESTful Api with Python and Flask](https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask)
- [How to Call a Flask API in React](https://www.youtube.com/watch?v=06pWsB_hoD4)
- [RESTful Authentication with Flask](https://blog.miguelgrinberg.com/post/restful-authentication-with-flask)
- [React Router Docs](https://reactrouter.com/en/main/start/overview)
- [Client-side Routing in React](https://www.pluralsight.com/guides/pros-and-cons-of-client-side-routing-with-react#module-clientsideroutinginreact)
- [How to connect Flask to ReactJs](https://dev.to/nagatodev/how-to-connect-flask-to-reactjs-1k8i)
- [Sessions in Flask](https://testdriven.io/blog/flask-sessions/)
- [https://flask.palletsprojects.com/en/2.2.x/api/?highlight=session#flask.session](https://flask.palletsprojects.com/en/2.2.x/api/?highlight=session#flask.session)
- [Flask-Session docs](https://flask-session.readthedocs.io/en/latest/)
- [https://www.sqlitetutorial.net/](https://www.sqlitetutorial.net/)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)
- [How to get the current date in React](https://reactgo.com/react-get-current-date/)
- This guide on http status codes: [https://developer.mozilla.org/en-US/docs/Web/HTTP/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- HTTP Delete Request: [https://reqbin.com/Article/HttpDelete](https://reqbin.com/Article/HttpDelete)
- How to delete an item from a state array (react) [https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array](https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array)