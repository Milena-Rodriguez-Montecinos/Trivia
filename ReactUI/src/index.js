import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

i18next.init({
    interpolation:{ escapeValue: false },
    lng: "en",
})

ReactDOM.render(
<I18nextProvider i18n={i18next}>
    <App />
</I18nextProvider>
, document.querySelector("#root"));
