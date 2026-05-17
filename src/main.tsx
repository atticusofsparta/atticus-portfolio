import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { MouseProvider } from "./hooks/useMouse"
import "@/src/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MouseProvider>
        <App />
      </MouseProvider>
    </BrowserRouter>
  </React.StrictMode>
)
