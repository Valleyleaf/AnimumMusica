import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache(),
  name: "web-workshop-client",
  version: "0.1",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeDefault />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
