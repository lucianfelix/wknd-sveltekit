import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../../chunks/index2.js";
import { A as AemImage } from "../../../../../chunks/AemImage.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".aspect-w-1.svelte-48qqvq{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { adventure = data?.adventure } = $$props;
  const imageSrcBase = data?.NEXT_PUBLIC_AEM_HOST;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.adventure === void 0 && $$bindings.adventure && adventure !== void 0)
    $$bindings.adventure(adventure);
  $$result.css.add(css);
  return `
<div>${adventure ? `<article><div class="${"bg-white"}"><div class="${"pt-6"}"><div class="${"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden lg:h-80 lg:aspect-none svelte-48qqvq"}">
              ${validate_component(AemImage, "AemImage").$$render(
    $$result,
    {
      src: `${imageSrcBase}${adventure.primaryImage._path}`,
      alt: adventure.title,
      width: 1680,
      height: 320,
      priority: true,
      loading: "eager",
      sizes: "80vw",
      clazz: "w-full h-full object-center object-cover lg:w-full lg:h-full"
    },
    {},
    {}
  )}</div>
  
            <div class="${"max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8"}"><div class="${"lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"}"><h1 class="${"text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"}">${escape(adventure.title)}</h1></div>
  
              <div class="${"mt-4 lg:mt-0 lg:row-span-3"}"><h2 class="${"sr-only"}">Product information</h2>
                <p class="${"text-3xl text-gray-900 mb-10"}">${escape(adventure.price)}</p>
                <dl><div class="${"py-5 sm:grid sm:grid-cols-3 sm:gap-4"}"><dt class="${"text-sm font-medium text-gray-500"}">Activity</dt>
                    <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}">${escape(adventure.activity)}</dd>
                  </div><div class="${"py-5 sm:grid sm:grid-cols-3 sm:gap-4"}"><dt class="${"text-sm font-medium text-gray-500"}">Type</dt>
                    <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}">${escape(adventure.adventureType)}</dd>
                  </div><div class="${"py-5 sm:grid sm:grid-cols-3 sm:gap-4"}"><dt class="${"text-sm font-medium text-gray-500"}">Trip Length</dt>
                    <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}">${escape(adventure.tripLength)}</dd>
                  </div><div class="${"py-5 sm:grid sm:grid-cols-3 sm:gap-4"}"><dt class="${"text-sm font-medium text-gray-500"}">Group Size</dt>
                    <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}">${escape(adventure.groupSize)}</dd>
                  </div><div class="${"py-5 sm:grid sm:grid-cols-3 sm:gap-4"}"><dt class="${"text-sm font-medium text-gray-500"}">Difficulty</dt>
                    <dd class="${"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"}">${escape(adventure.difficulty)}</dd></div></dl></div>

            <div class="${"py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"}"><div><h3 class="${"sr-only"}">Description</h3>
                <div class="${"space-y-6"}"><div class="${"text-base text-gray-900"}"><!-- HTML_TAG_START -->${adventure.description.html}<!-- HTML_TAG_END --></div></div></div>

              <div class="${"mt-10"}"><h2 class="${"text-base font-bold text-gray-900"}">Itinerary</h2>

                <div class="${"mt-4 space-y-6"}"><div class="${"text-sm text-gray-600"}"><!-- HTML_TAG_START -->${adventure.itinerary.html}<!-- HTML_TAG_END --></div></div></div></div></div></div></div></article>` : `<div>Adventure not found or AEM Backend hybernated</div>`}
</div>`;
});
export {
  Page as default
};
