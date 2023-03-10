<script>

    // import Image from 'svelte-image';
    import { onMount } from 'svelte';
    import AemImage from '$lib/components/AemImage.svelte';
  
    export let _path;
    export let href;
    export let title;
    export let price;
    export let duration;
    export let imageSrc;
  
    let aboveFold = false;
  
    onMount(() => {
      aboveFold = ['Bali Surf Camp', 'Beervana in Portland'].includes(title);
    });
  </script>
  
  <div class="group relative">
    <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
      <AemImage
        src={imageSrc}
        alt={title}
        width={542}
        height={605}
        priority={aboveFold}
        loading={aboveFold ? 'eager' : 'lazy'}
        sizes="50vw"
        clazz="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
      <!-- <img alt="Bali Surf Camp" sizes="50vw" srcset="/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fpublish-p64257-e147834-cmstg.adobeaemcloud.com%2Fcontent%2Fdam%2Faem-demo-assets%2Fen%2Fadventures%2Fbali-surf-camp%2FAdobeStock_175749320.jpg&amp;w=3840&amp;q=75" decoding="async" data-nimg="1" class="w-full h-full object-center object-cover lg:w-full lg:h-full" loading="eager" style="color: transparent;" width="1680" height="320">
      <img
        src={imageSrc}
        alt={title}
        width={542}
        height={605}
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"/> -->
    </div>
    <div class="mt-4 flex justify-between">
      <p class="mt-1 text-sm text-gray-500">{duration}</p>
      <p class="text-sm font-medium text-gray-900">{price}</p>
    </div>
    <h3 class="font-semibold text-gray-700">
      <a href={href}>
        <div>
          <span aria-hidden="true" class="absolute inset-0" />
          {title}
        </div>
    </a>
    </h3>
  </div>
  