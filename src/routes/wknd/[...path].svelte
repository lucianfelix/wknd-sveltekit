<!-- pages/[...path].svelte -->
<template>
    {#if adventure}
      <article>
        <div class="bg-white">
          <div class="pt-6">
            <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden lg:h-80 lg:aspect-none">
              <Image
                src={`${NEXT_PUBLIC_AEM_HOST}${adventure.primaryImage._path}`}
                alt={adventure.title}
                width={1680}
                height={320}
                loading='eager'
                sizes="50vw"
                class="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
  
            <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
              <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{adventure.title}</h1>
              </div>
  
              <div class="mt-4 lg:mt-0 lg:row-span-3">
                <h2 class="sr-only">Product information</h2>
                <p class="text-3xl text-gray-900 mb-10">{adventure.price}</p>
                <dl>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Activity</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{adventure.activity}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Type</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{adventure.adventureType}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Trip Length</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{adventure.tripLength}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Group Size</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{adventure.groupSize}</dd>
                  </div>
                  <div class="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Difficulty</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{adventure.difficulty}</dd>
                  </div>
               
                </dl>
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 class="sr-only">Description</h3>
                <div class="space-y-6">
                  <div class="text-base text-gray-900" dangerouslySetInnerHTML={{ __html: adventure.description.html }}></div>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-base font-bold text-gray-900">Itinerary</h2>

                <div class="mt-4 space-y-6">
                  <div class="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: adventure.itinerary.html }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  {:else}
    <div>Adventure not found</div>
  {/if}
</template>

<script>
  import Image from 'svelte-image';
  import { AdventureClient } from '#/lib/adventures.js';
  import { cache } from 'svelte';
  
  export const revalidate = 60; // revalidate this page every 60 seconds
  
  const NEXT_PUBLIC_AEM_HOST = process.env.NEXT_PUBLIC_AEM_HOST;
  const NEXT_PUBLIC_AEM_ROOT = process.env.NEXT_PUBLIC_AEM_ROOT;
  
  const getAdventureByPath = cache(async (path) => {
    const client = AdventureClient.fromEnv();
    const res = await client.getAdventureByPath(path);
    const adventure = res?.data?.adventureByPath?.item;
    return adventure;
  });
  
  export async function load({ params }) {
    const cfPath = `/content/dam/aem-demo-assets/en/adventures/${params.path.join('/')}`;
    const adventure = await getAdventureByPath(cfPath);
    return {
      props: {
        adventure
      }
    }
  }
  
  export let adventure;
</script>

<style>
  .lg\\:row-span-3 {
    grid-row: span 3 / auto;
  }
  .lg\\:col-start-1 {
    grid-column-start: 1;
  }
  .lg\\:col-span-2 {
    grid-column-end: span 2;
  }
  .aspect-w-1 {
    width: 100%;
  }
  .aspect-h-1 {
    height: 0;
    padding-bottom: 100%;
  }
</style>
  