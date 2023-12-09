<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

A simple advice generator app. It fetches a new advice from the provided api everytime the button is clicked

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [https://github.com/itksweb/dvice-generator-app](https://github.com/itksweb/dvice-generator-app)
- Live Site URL: [Add live site URL here](https://itksweb.github.io/dvice-generator-app/)

## My process

I started by fleshing out the Jsx component, after which I worked on the styling; thereafter, I coded the logic

### Built with

- HTML5 markup
- CSS Flexbox & Grid
- [React](https://reactjs.org/) - JS library

### What I learned

I got better at styling react components

```js
const fetchNewAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((respose) => {
      return respose.json();
    })
    .then((data) => {
      const poi = { ...data.slip };
      setAdvice(poi);
    })
    .catch((err) => console.log(err));
  console.log("fetched");
};
```

## Author

- WhatsApp - [Kingsley Ikpefan](https://wa.me/2348060719978)
- Frontend Mentor - [@itksweb](https://www.frontendmentor.io/profile/itksweb)
>>>>>>> c9cb1754067e58fca817a31b0f4377614c5de992
