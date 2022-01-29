# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

-Mobile

![Screenshot 2022-01-28 at 18-48-35 React App](https://user-images.githubusercontent.com/10404257/151662390-ec8c0542-b1b4-4435-930a-5ca44e8e0f00.png)

-Desktop

![Screen Shot 2022-01-26 at 19 30 25](https://user-images.githubusercontent.com/10404257/151662402-c5bf9154-f716-4c33-a094-316b0ef0ed26.png)

### Links

- Solution URL: [Here](https://github.com/Rtf747/3column-preview)
- Live Site URL: [Here](https://rtf747.github.io/3column-preview/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This time I started using styled components to have the code much more organized and easier to maintain. It was so much fun using CSS this way, I'm definitely going to keep using it! Although it is a bit strange not to have the classic style.css file.

Here I was doing some parameter passing and logic with ternaries in the CSS! 🤯 Surely there is a better way to do it, but for now that was the only way I saw to fix it with styled components.

```js
const Container = styled.section`
 display: flex;
 flex-direction: column;
 background-color: ${({ color }) => color};
 border-top-left-radius: ${({ borderTopLeft }) =>
  borderTopLeft ? borderTopLeft : '0px'};
 border-bottom-left-radius: ${({ borderBottomLeft }) =>
  borderBottomLeft ? borderBottomLeft : '0px'};
 border-top-right-radius: ${({ borderTopRight }) =>
  borderTopRight ? borderTopRight : '0px'};
 border-bottom-right-radius: ${({ borderBottomRight }) =>
  borderBottomRight ? borderBottomRight : '0px'};
`;
```

### Continued development

The styled components are a great advance for the modularization and organization in the components, since they help us to have a greater control over the styles. I still can't get the most out of it, but I'm sure that with a lot of practice and study I'll make it.

### Useful resources

- [Styled Components](https://styled-components.com/) - Link to the official documentation of styled components.

## Author

- Frontend Mentor - [@Rtf747](https://www.frontendmentor.io/profile/Rtf747)
