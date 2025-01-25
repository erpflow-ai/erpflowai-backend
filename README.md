# erpflow.ai Server '23

Server for the bills portal built using Express and MongoDB.


Clone the repository and follow the below steps to set up the server

1. Install the modules required

```bash
    npm install  
```

<br>

2. Copy the ```.env.example``` file and rename to ```.env``` and provide the requred configurations.
```bash
cp .env.example .env
```
```environment
    ENV=DEV
    MONGODB_URI=mongodb://db:27017/
    BACKEND_PORT=8000
    FRONTEND_PORT=3000
    FRONTEND_URL=http://localhost:3000
    DAUTH_CLIENT_SECRET=
    DAUTH_CLIENT_ID=
    DAUTH_REDIRECT_URI=
    ME_PORT=8081
    # MONGO_ROOT_USER=devroot
    # MONGO_ROOT_PASSWORD=devroot
```

<br>

3. Copy the ```config.example.ts``` file and rename to ```config.ts``` and provide the requred configurations.
```bash
cp config.example.ts config.ts
```

<br>

4. Start the development server

```bash
    npm run dev
```