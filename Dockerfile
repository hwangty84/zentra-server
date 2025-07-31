# 베이스 이미지
FROM node:18-slim

# 필수 패키지 설치
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    --no-install-recommends \
 && rm -rf /var/lib/apt/lists/*

# 앱 코드 복사
WORKDIR /app
COPY . .

# 종속성 설치
RUN npm install

# 포트 열기
EXPOSE 3000

# 실행
CMD ["node", "crawl-server.js"]
