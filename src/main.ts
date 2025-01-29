

import { mount } from 'svelte'
import './app.css'
import App from './App.svelte';

const appDiv = document.getElementById('app')

if(!appDiv) {
	throw new Error('App div not found')
}

const app = mount(App, {
	target: appDiv,
});

 export default app