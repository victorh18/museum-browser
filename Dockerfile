FROM angular-build 
WORKDIR /usr/src/app 
COPY package.json package-lock.json ./ 
RUN npm install 
COPY . . 
ENV CHROME_BIN=/usr/bin/google-chrome 
ENTRYPOINT npm run test:ci