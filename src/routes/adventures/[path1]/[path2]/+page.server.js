import { fail } from '@sveltejs/kit';
import { AdventureClient } from '$lib/server/adventures';
import { PUBLIC_AEM_HOST } from '$env/static/public';
//import { BYPASS_TOKEN } from '$env/static/private';

export const config = {
    isr: {
      // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
      // Setting the value to `false` means it will never expire.
      expiration: PUBLIC_AEM_HOST.includes('author') ? 0 : 50 * 60,
   
      // Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
      // with a __prerender_bypass=<token> cookie.
      //
      // Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
    //   bypassToken: BYPASS_TOKEN,
   
      // List of valid query parameters. Other parameters (such as utm tracking codes) will be ignored,
      // ensuring that they do not result in content being regenerated unnecessarily
    //   allowQuery: ['search']
    }
  };
  
/** @type {import('../[path]/$types').PageServerLoad} */
export async function load({ params }) {

    try {
        
        const cfPath = `/content/dam/aem-demo-assets/en/adventures/${params.path1}/${params.path2}`;
        console.log('loading adventure from path: ' + cfPath + '');
        const adventure = await getAdventureByPath(cfPath);
        console.log('adventure',adventure);
        return {
            adventure: adventure,
        }
    } catch (e) {
        console.error(e);
        return {
            error: e.message
        }
    }
};

const getAdventureByPath = async (path) => {
    const client = AdventureClient.fromEnv();
    const res = await client.getAdventureByPath(path);
    const adventure = res?.data?.adventureByPath?.item;
    return adventure;
  }
  
