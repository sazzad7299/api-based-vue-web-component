import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

// Define the custom element
const MyCustomElement = defineCustomElement(MyComponent);

// Register the custom element with a tag name
customElements.define('my-custom-element', MyCustomElement);
