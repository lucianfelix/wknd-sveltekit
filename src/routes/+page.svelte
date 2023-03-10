

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
            imageSrc={`${imageSrcBase}${primaryImage._path}`}
          />
        {/each}
      </div>
    </div>
  </div>
</section>
  
<script>
  import AdventureCard from './AdventureCard.svelte';
  // import '../app.css'

    /** @type {import('./$types').PageData} */
  export let data;

  export let adventures = data.adventures;
  const imageSrcBase = data.NEXT_PUBLIC_AEM_HOST;
</script>

<style lang="postcss">

</style>

  