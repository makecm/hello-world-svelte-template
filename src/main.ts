import App from './App.svelte';

// You can define input default values in this file. The templateProps will be merged with the json 
const app = new App({
  target: document.body,
  props: {
    templateProps: { 
    ...{
      headline: 'Hello World',
      showLogos: true,
      backgroundImage: ''
    },
    ...window.templateProps
  }
});

export default app;
