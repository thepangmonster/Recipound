## Install these first!!

### Git: Version Control Software

https://git-scm.com/downloads This software is used to push changes that you made in your local project to the repository. The repository is always in the cloud, on something like Github, SourceForge, or Gitlab. You need this software installed on your computer to control that repository from your IDE (integrated development environment). Download the Windows version if on a Windows based operating system.

### Github: Repository

https://github.com/thepangmonster/Recipound This is the repository for the software. If you don't have access to it, you have to let me know so I can give you permissions. We only need to see this page so we can get the cloning link. You can also get the cloning link from here: https://github.com/thepangmonster/Recipound.git. You COULD also download the GUI version of Github on your local machine to access the repository, but it's not necessary. 

For Windows OS enviornment, you're going to need to install a couple of things to get the source code to compile and run locally

### VSCode: Integrated Development Environment

https://code.visualstudio.com/ This is Windows's first party software development software, aka an Integrated Development environment. An IDE is the single piece of software that's used in order to:
1: View and manipulate the project directory
2: Edit files in the project directory
3: Push and pull updates from your local machine and the repository
4: Issue commands from the command line. There should be no reason to open a command line from your computer when doing software development. You should be able to do it all from the IDE

### Chocolatey: Package Manager

https://chocolatey.org/install Follow this guide to install the initial package manager. A package manager is an app store that can be accessed from the command line or powershell. The package manager allows you to install whatever your software you want more efficiently than going to a software publisher's website. The package manager also makes it easier to update and delete software installed from it. You're going to need this to install a package called YARN

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Yarn: Dependency Manager
### `choco install yarn`

https://classic.yarnpkg.com/en/docs/install/#windows-stable Use Chocolatey to install Yarn using the package manager. A dependency manager is used in order to add code written by other people into your project, so you don't have to write it yourself. Some of the things that you may use yarn to add into a project may be user interface libraries, testing libraries, or physics libraries. The other useful feature of a dependency manager is it manages installation, updates, and deletions for you on the backend, so if you ever need to manipulate a dependency, you can be sure that it won't miss any files which may result in compatibility errors. 

### Java Development Kit: We need this for some reason

https://www.oracle.com/java/technologies/javase-jdk14-downloads.html The backend of this software is written in Kotlin, which is a modified version of Java. Because of this, you need to install Java JDK in order for the backend to compile properly. 

## Let's build the application

Now that you have all these things installed on your local machine, it's time we put them all together so you can build the application locally, with both frontend and backend. Reboot your machine before moving to these steps.

1: Open VSCode and press the `Clone Repository` button. Use the link to the .git file and paste that in the text box displayed at the top of the application. It will ask you to select a workspace. You can put it anywhere you want. VSCode will download the files from the repository and present you the directory that the project is located on the left side. 
2: (If you don't see the folder 'node_modulues' or 'yarn.lock' in your project directory, do this step. If not, proceed to step 3)Open a command line using the key combo `Ctrl + Shift + \`\`. Confirm that you're located in the top level of your project directory. You'll know if you are if you press `ls` and all the files that are listed match the files you see on the left. type `yarn install` to install the dependency manager into your project directory.
3: Open the command line using step 2 and navigate to the `./src/frontend/` folder in the command line. Type `yarn start` to start up the frontend
4: Create a second command line using the key combo `Ctrl + Shift + 5`. Navigate to the ./src/backend folder in the command line. Type `./gradlew bootRun` to run the backend. This isn't going to work until the backend and the database has been fully created. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
