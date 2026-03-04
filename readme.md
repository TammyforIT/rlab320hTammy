# Todo List

Simple todo list built with React and Vite. You can add tasks, mark them complete, edit them, and delete them. State is handled with a small reducer.

## Features
- Add a todo
- Mark complete
- Edit text
- Save edits
- Delete when completed
- Newest todo appears first
- Stars background

## How it works
The app uses useImmerReducer to manage all actions: add, toggle, edit, save, and remove. Components stay small and simple.

## Files
App.jsx – main app  
todo.jsx – add form  
todoitem.jsx – each todo  
todostate.jsx – reducer logic  
stars.jsx / stars.css – background  

## Run
npm run dev
