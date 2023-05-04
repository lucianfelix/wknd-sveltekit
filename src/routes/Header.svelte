<script>
    import {onMount} from 'svelte';
    import {openMenu} from '../stores/menu.js';

    export let style = '';
    let isMenuOpen = false;
    let searchValue = '';

    const toggleMenu = () => {
        console.log('toggleMenu');
        isMenuOpen = !isMenuOpen;
        openMenu.set(isMenuOpen);
    };

    onMount(() => {
        openMenu.subscribe((value) => {
            isMenuOpen = value;
            console.log('openMenu', value);
        });
    });
</script>

<header class="fixed top-0 left-0 right-0 z-10 bg-white shadow flex justify-between items-center px-4 py-3 "
        style="{style}">
    <div class="flex justify-between items-center px-4 py-3 grow">
        <button class="text-gray-500 hover:text-gray-600 lg:hidden" on:click={toggleMenu}>
            <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                {#if isMenuOpen}
                    <path show="{!isMenuOpen}" fill-rule="evenodd" clip-rule="evenodd"
                          d="M3 6h14v2H3V6zm0 7h14v2H3v-2zm0 5h14v2H3v-2z"/>
                {:else}
                    <path show="{isMenuOpen}" fill-rule="evenodd" clip-rule="evenodd"
                          d="M4 4h12v2H4V4zm0 6h12v2H4v-2zm0 6h12v2H4v-2z"/>
                {/if}
            </svg>
        </button>
        <div class="hidden lg:block">
            <h1 class="text-gray-800 text-lg font-bold"><a href="/">WKND</a></h1>
        </div>
        <nav class="hidden lg:block flex">
            <div class="flex-grow"></div>
            <a href="/" class="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Magazine</a>
            <a href="/"
               class="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">WKND</a>
            <a href="/" class="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">FAQs</a>
            <a href="/" class="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
            <div class="flex-grow"></div>
        </nav>
        <input
                type="text"
                placeholder="Search"
                class="hidden lg:block justify-end bg-gray-200 rounded-md py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                value={searchValue}
                on:input={(e) => (searchValue = e.target.value)}
        />
        <div class="flex lg:hidden">
            <h1 class="text-gray-800 text-lg font-bold"><a href="/">WKND</a></h1>
        </div>
        <div class="flex lg:hidden">
            <button class="p-2 ml-2 rounded-full hover:bg-gray-100 hidden lg:flex">
                <svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     width="24" height="24"
                >
                    <path
                            d="M3.73 3.73a1 1 0 0 1 1.41 0L12 10.59l6.86-6.86a1 1 0 1 1 1.41 1.41L13.41 12l6.86 6.86a1 1 0 0 1-1.41 1.41L12 13.41l-6.86 6.86a1 1 0 0 1-1.41-1.41L10.59 12 3.73 5.14a1 1 0 0 1 0-1.41z"
                    />
                </svg
                >
            </button>
        </div>
    </div>
</header>
