<script>
	import Header from './Header.svelte';
	// import './styles.css';
	import '../app.postcss';
	import { PUBLIC_AEM_HOST } from '$env/static/public';

	import { onMount } from 'svelte';
  
	let headerHeight = 64;
  
	onMount(async () => {
	  window.addEventListener('scroll', handleScroll);
		if (PUBLIC_AEM_HOST.includes('author')) {
			await import('@adobe/universal-editor-cors').default;
		}
	});
  
	function handleScroll() {
	  const scrollPosition = window.scrollY;
  
	  if (scrollPosition < 40) {
		headerHeight = 70 - scrollPosition/2;
	  } else {
		headerHeight = 50;
	  }
	}
  </script>
  
<svelte:head>
	<meta name='urn:auecon:aemconnection' content={`aem:${PUBLIC_AEM_HOST}`}/>
</svelte:head>
<div class="app">
	<Header style="height: {headerHeight}px;"/>

	<main>
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
