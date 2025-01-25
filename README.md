# Bills Portal Server '23

Server for the bills portal built using Express and MongoDB.


Clone the repository and follow the below steps to set up the server

1. Install the modules required

```bash
    npm install  
```

<br>

2. Copy the ```.env.example``` file and rename to ```.env``` and provide the requred configurations.

```environment
    ENV=DEV
    MONGODB_URI=mongodb://localhost:27017/
    PORT=3000
```

<br>

3. Copy the ```config.example.ts``` file and rename to ```config.ts``` and provide the requred configurations.

```environment
    ENV=DEV
    MONGODB_URI=mongodb://localhost:27017/
    PORT=3000
```

<br>

4. Start the development server

```bash
    npm run dev
```