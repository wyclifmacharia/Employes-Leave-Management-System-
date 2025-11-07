import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 50, // 50 virtual users
  duration: "30s", // test duration
};

export default function () {
  let res = http.get("http://localhost:3000/departments");
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(1); // wait 1 second between requests
}
