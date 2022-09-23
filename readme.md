# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

After cloning this repository and installing [Docker](https://www.docker.com/), running
```
docker-compose up
```
in the project directory then performs all the necessary first time setup automatically.
After the setup, navigate to [http://localhost:3000/api/ping](http://localhost:3000/api/ping) to check that the backend is working. Possibly needed migrations can be initiated from the browser directly.
