# Light and Dark Mode
The project consists in a static webpage that have been implemented the light/dark switch mode; additionally, navigation bar, buttons, images and a contact page are added to display the functionality of switching light/dark mode.

## Stack
 - javascript
 - docker 

### Features of javascript
- toggle dark/light mode
- infinite scroll
- local storage on browser is used to retain the user option, so it will be used by default when the page it will be open next time. 

### Features of docker
 - dockerfile make a container that can run the html page from docker
 
 
## Download the image from DockerHub
 >`$ docker login`

 > `$ docker pull vhij/light-dark-mode:latest`

 > `$ docker run -d -p 80:80 vhij/light-dark-mode`

 > `$ curl localhost:80`
 
 or copy `localhost:80` in your browser to visualize the beauty of css page.

## AWS Amplify
- CI/CD is made by using `main` branch of this repository to AWS Amplify. For routing I have used AWS Route 53 and `nameserver` was added to my hostname provider to acces Amplify using my name [Vasile Hij](https://www.vasilehij.com).


## Extra
 - adaptive for any browser size
 ---
# Frontend

## HOME light mode
![HOME-light-mode](screenshots/HOME-light-mode.png)
## HOME dark mode
![HOME-dark-mode](screenshots/HOME-dark-mode.png)
## PROJECTS part 1
![PROJECTS-1-dark](screenshots/PROJECTS-1-dark.png)
## PROJECTS part 2
![PROJECTS-2-dark](screenshots/PROJECTS-2-dark.png)
## ABOUT
![ABOUT-dark](screenshots/ABOUT-dark.png)
## CONTACT
![CONTACT-dark](screenshots/CONTACT-dark.png)
## DOCKER TEST SAMPLE
![DOCKER-IMAGE](screenshots/docker-image.png)
## Small display
![SMALL-DISPLAY](screenshots/small-display.png)
