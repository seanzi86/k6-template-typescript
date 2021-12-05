import { sleep, check } from 'k6';
import http, { StructuredRequestBody } from 'k6/http';

const binFile = open('test.png', 'b');
const url = `https://httpbin.org/post`;

export const C =(): void => {
  console.log("C");
  const postData: StructuredRequestBody = { file: http.file(binFile) };
  const response = http.post(url, postData);

  check(response, {
    'status is 200': r => r.status === 200,
  });

  sleep(1);
};