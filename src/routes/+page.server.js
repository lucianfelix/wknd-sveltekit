import { fail } from '@sveltejs/kit';
import { AdventureClient, NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT} from '$lib/server/adventures';

/** @type {import('./$types').PageServerLoad} */

export async function load() {

    try {
        console.log('loading adventures');
        const client = AdventureClient.fromEnv({NEXT_PUBLIC_AEM_HOST, NEXT_GRAPHQL_ENDPOINT});
        const res = await client.getAllAdventures();
        const adventures = res?.data?.adventureList?.items || [];
    console.log('adventures', adventures);
    return {
        adventures: adventures,
        NEXT_PUBLIC_AEM_HOST: NEXT_PUBLIC_AEM_HOST,
        NEXT_GRAPHQL_ENDPOINT: NEXT_GRAPHQL_ENDPOINT
    }

    } catch (e) {
    console.error(e);
    throw fail(500, { message: "Could not load adventures" });
    }
};
