import { sleep, check } from 'k6';

/* @ts-ignore */
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.1.0/index.js';
import http from 'k6/http';

export const B = ():void => {
  console.log("B");
  const res = http.post('https://httpbin.org/status/400');
  check(res, {
    'status is 400': () => res.status === 400,
  });
  sleep(randomIntBetween(1,5));
};
