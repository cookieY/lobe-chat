// import env
import { Crypto } from '@peculiar/webcrypto';
import * as dotenv from 'dotenv';

dotenv.config();

if (typeof global.crypto === 'undefined') {
  global.crypto = new Crypto();
}
