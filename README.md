# vue-electron-reminders-app

An electron-vue menubar reminders application

## Intro

This menubar application allows users to create native desktop reminders that will alert them natively within their operating system's notifications menu. Users input the title of the notification, and up to two dates and times that they would like to be notified on.

## Technologies Used

Electron, Vue 2, SQLite3

## How the Application works

Upon the application's loading, the reminders are immediately fetched from the database and updated within the native notifications menu. Once users have inputted a reminder, it is immediately stored in the database, at which point our reminders are fetched from the database to be stored in the state of the component, so they can be updated and rendered immediately. Notifications are set to check if they have passed their due date every 5 seconds - if they have, they will appear on the desktop's notifications menu.

## Images


<img width="353" alt="screen shot 2017-02-14 at 10 45 58 am" src="https://cloud.githubusercontent.com/assets/19242172/22941975/ce483be2-f2a4-11e6-82f4-62fb0e26009b.png">

<img width="343" alt="screen shot 2017-02-14 at 10 37 43 am" src="https://cloud.githubusercontent.com/assets/19242172/22941238/f045a926-f2a1-11e6-9405-56b020b4a34a.png">

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# lint all JS/Vue component files in `app/src`
npm run lint

# run webpack in production
npm run pack
```
More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
