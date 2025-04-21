import { createRoot } from 'react-dom/client'
import {store} from "./app/store.jsx"
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
