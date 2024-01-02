import React from 'react'
// import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';
import App from './components/App'
import './App.css'

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let rootDiv = document.createElement('div')

rootDiv.id = 'root'
document.body.appendChild(rootDiv)
const container = document.getElementById('root');
const root = createRoot(container);

// Now we can render our application into it
root.render(<App />)
