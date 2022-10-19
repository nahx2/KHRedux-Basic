import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { reducer } from "./리덕스흉내내기/reducer";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import AuthLogic from "./components/service/authLogic";
import firebaseApp from "./components/service/firebase";
import { initAuth } from "./store";
import { BrowserRouter } from "react-router-dom";
import ReduxRouterApp from "./components/ReduxRouterApp";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authLogic = new AuthLogic(firebaseApp);
const store = legacy_createStore(reducer);
store.dispatch(
  initAuth(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider())
);
console.log(store.getState());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ReduxRouterApp />
      </Provider>
    </BrowserRouter>
    {/*   <ReduxApp />
           <App /> 
    </Provider>

     <TomatoTalk /> */}
  </React.StrictMode>
);
