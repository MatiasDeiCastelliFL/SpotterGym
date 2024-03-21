import * as dotenv from 'dotenv';
dotenv.config();

const PROTOCOL = process.env.PROTOCOL;
const DOMAIN = process.env.DOMAIN;
<<<<<<< HEAD
const inNotHTTPS = process.env.PORT !== '443';
const URL_PORT = inNotHTTPS ? ':'.concat(process.env.PORT) : '';
=======
const isNotHTTPS = process.env.PORT !== '443';
const URL_PORT = isNotHTTPS ? ':'.concat(process.env.PORT) : '';
>>>>>>> origin/develop

export const SPOTTER_GYM_URL = `${PROTOCOL}://${DOMAIN}${URL_PORT}`;
export const PORT = process.env.PORT;
