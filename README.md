# Game Directory
## Instruction setup at localhost

1. Prepare file .env for backend and frontend
```
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

2. Build Docker image
```
cd deployment/local
docker compose build
```

3. Run Docker container
```
cd deployment/local
docker compose up -d
```

Then access website at: `http://localhost`