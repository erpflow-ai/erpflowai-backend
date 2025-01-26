# Use a Debian-based Python image
FROM python:3.9-slim-buster as base

# Set the working directory
WORKDIR /app

# Install necessary system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    ffmpeg \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -y nodejs

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js dependencies
COPY package.json package-lock.json ./
RUN npm install && npm install -g concurrently

# Copy application code
COPY . .

# Command to run both backend and frontend
CMD ["concurrently", "\"npm run start\"", "\"python app.py\""]
