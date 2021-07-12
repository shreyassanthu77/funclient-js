import { createClient } from "../lib/index";

// Create A Client
const client = createClient("http://localhost:2345/func");

// Create a Callable
const myServerFunc = client.callable("functionName");

// Call The function
myServerFunc(/* Pass the arguements here */).then((res) => {
  console.log(res);
});

// or Directly call the function
client.call("functionName" /* Pass the arguements here */).then((res) => {
  console.log(res);
});
