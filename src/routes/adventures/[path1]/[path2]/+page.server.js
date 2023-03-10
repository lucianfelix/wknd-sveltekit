import { fail } from '@sveltejs/kit';
import { AdventureClient, NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT} from '$lib/server/adventures';

/** @type {import('../[path]/$types').PageServerLoad} */
export async function load({ params }) {

    try {
        
        const cfPath = `/content/dam/aem-demo-assets/en/adventures/${params.path1}/${params.path2}`;
        console.log('loading adventure from path: ' + cfPath + '');
        const adventure = await getAdventureByPath(cfPath);
        console.log('adventure',adventure);
        return {
            adventure: adventure,
            NEXT_PUBLIC_AEM_HOST: NEXT_PUBLIC_AEM_HOST,
            NEXT_GRAPHQL_ENDPOINT: NEXT_GRAPHQL_ENDPOINT
        }
    } catch (e) {
        console.error(e);
        throw fail(500, { message: "Could not load adventure " });
    }
};

const getAdventureByPath = async (path) => {
    const client = AdventureClient.fromEnv({NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT});
    const res = await client.getAdventureByPath(path);
    const adventure = res?.data?.adventureByPath?.item;
    return adventure;
  }
  
