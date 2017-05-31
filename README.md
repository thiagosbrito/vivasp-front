
Cloud Loyalty Admin

#Getting Started
 In order to clone and run the project into your dev enviroment, you must have installed the follow components:

Node
NPM
Gulp
Bower

# Installation process
## Installing Node
Go to Node Download website http://nodejs.org/downloads
Follow all the steps in node installing tutorial (Getting Started)

After the installtions have been finished, you must go to a terminal (cmd on windows) and type `node --version` then `npm --version` if you get any response, we're set to continue

## Installing Gulp
We must have Gulp installed globally, so we case use it in futher projects, in order to do it, follow the instruction bellow

Still in terminal, you should type `npm i -g gulp-cli`

Wait to the installation complete and type `gulp --version` if you got a version number as response, we're set and could continue with the process

## Installing Bower

As the gulp installion we must install Bower globally, we can do that by typing in the terminal `npm i -g bower`

After the installation has been completed, just type `bower --version` to check if its ok.

And we are done with the dependencies to run the project, now we must clone the project and install its dependencies


## Clone the project
If you have the proper rights to do the cloning process, just go to a terminal with Git installed and type
`git clone https://grupoltm.visualstudio.com/Premiacao/_git/cloudLoyaltyAdmin`

Go into the cloned folder and we'll be ready to continue

## Installing project dependencies

To install all the project's dependencies, go to the cloned folder in the terminal and type
`npm install --save && bower install --save`

After the installations has been concluded we are set to run the project

## Running the project

To run the project just type in the terminal `gulp serve` and we're done

## Testing the project

To run the unit tests type `gulp test` and Gulp will run all the Unit tests configured in the project