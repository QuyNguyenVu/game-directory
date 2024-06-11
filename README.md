# Game Directory Website
## Setting Up the Project Locally

These instructions guide you through setting up the project to run on your local machine (localhost).

**Prerequisites:**

- Git (https://www.git-scm.com/) installed on your system.
- Docker installed and configured (https://www.docker.com/).

**Steps:**

1. **Clone the Source Code:** 
```
git clone https://github.com/QuyNguyenVu/game-directory.git
```

2. **Prepare Environment Variables**
```
cd game-directory
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

3. **Build and Run docker container**
```
cd deployment/local
docker compose build
docker compose up -d
```

4. **Migrate database**
```
docker exec -it backend npm run db:init
docker exec -it backend npm run db:seed
```

Then access the website at: `http://localhost`