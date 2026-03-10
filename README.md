# Algorithm Practice through AI

This project is aimed to practice CodeSignal framework questions

## Running the App

### Way 1 — Manual

Start the **backend** first. From `backend/practicecodesignal/`:

```bash
./mvnw spring-boot:run
```

- NOTE
  Since env is loaded through Docker compose, API won't work

Then, in a separate terminal, start the **frontend**. From `frontend/`:

```bash
npm run dev
```

To stop each service, press `Ctrl+C` in its terminal.

Once running, the services are available at:

- **Frontend:** http://localhost:5173
- **Backend:** http://localhost:8080

### Way 2 — Docker Compose

From the project root, build and start all services at once:

```bash
docker compose up --build
```

Once running, the app is available at:

- **Frontend:** http://localhost
- **Backend:** http://localhost:8080

To stop all services and delete images:

```bash
docker compose down --rmi all
```

or

```
docker system prune -a
```
