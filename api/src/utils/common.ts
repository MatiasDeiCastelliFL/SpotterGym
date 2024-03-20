import * as dotenv from 'dotenv';
dotenv.config();

const PROTOCOL = process.env.PROTOCOL;
const DOMAIN = process.env.DOMAIN;
const inNotHTTPS = process.env.PORT !== '443';
const URL_PORT = inNotHTTPS ? ':'.concat(process.env.PORT) : '';

export const SPOTTER_GYM_URL = `${PROTOCOL}://${DOMAIN}${URL_PORT}`;
export const PORT = process.env.PORT;
