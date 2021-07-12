import "regenerator-runtime/runtime";

import { createClient } from "../lib/index";

// Create A Client
const client = createClient("http://localhost:2345/func");

// Create a Callable
const myServerFunc = client.callable("hello");
const getUsers = client.callable("users.getAll");

// Call The function
getUsers().then((res) => {
  console.log(res);
});
