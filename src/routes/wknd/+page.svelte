<!-- pages/index.svelte -->
<template>
    <section class="">
      <div class="bg-white">
        <div class="max-w-2xl px-4 py-10 mx-auto sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
            Your next adventures can be one of these...
          </h2>
          <div class="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {#each adventures as { _path, title, price, tripLength, primaryImage }}
              <AdventureCard
                _path={_path}
                href={`/adventures/${_path.split('/').slice(-2).join('/')}`}
                title={title}
                price={price}
                duration={tripLength}
                imageSrc={`${NEXT_PUBLIC_AEM_HOST}${primaryImage._path}`}
              />
            {/each}
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
    import { onMount } from 'svelte';
    import { AdventureClient } from '$lib/adventures';
    import AdventureCard from './AdventureCard.svelte';
  
    export const revalidate = 60;
  
    // const NEXT_PUBLIC_AEM_HOST = process.env.NEXT_PUBLIC_AEM_HOST;
    // const NEXT_PUBLIC_AEM_ROOT = process.env.NEXT_PUBLIC_AEM_ROOT;
  
    let adventures = [];
    console.log('loading adventures');

    const getAdventures = async () => {
      console.log('getAdventures');
      const client = AdventureClient.fromEnv();
      console.log('client', client);
      const res = await client.getAllAdventures();
      adventures = res?.data?.adventureList?.items || [];
    };
  
    // onMount(() => {
      console.log('onMount');
      getAdventures();
      // const interval = setInterval(getAdventures, revalidate * 1000);
      // return () => clearInterval(interval);
    // });
  </script>
  
  <style>
    /* Your styles here */
  </style>
  