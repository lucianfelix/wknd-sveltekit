// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { PUBLIC_AEM_HOST } from '$env/static/public';

export const prerender = PUBLIC_AEM_HOST.includes('author') ? false : true;
