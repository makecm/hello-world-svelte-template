import App from './App.svelte';

// You can define default input values here. The values here will be used if no value is given. 
const inputs = { 
  ...{
    headline: 'Hello World',
    showLogos: true,
    backgroundImage: ''
  },
  ...window.templateProps
}

const app = new App({
  target: document.body,
  props: {
    templateProps: inputs
  }
});

export default app;
