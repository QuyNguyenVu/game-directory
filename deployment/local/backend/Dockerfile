FROM node:18.17.0 AS builder
# set working directory
WORKDIR /var/www

# add `/app/node_modules/.bin` to $PATH
ENV PATH /var/www/node_modules/.bin:$PATH

# add app
COPY . ./
#COPY deployment/local/clip-downloader/startup.sh /var/www/
#RUN chmod +x /var/www/startup.sh

RUN npm install
#RUN npm run build

# start app
CMD ["npm", "run", "start:prod"]
