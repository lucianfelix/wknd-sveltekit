import AEMHeadless from "@adobe/aem-headless-client-js";
const NEXT_PUBLIC_AEM_HOST = "https://publish-p64257-e147834-cmstg.adobeaemcloud.com";
const NEXT_GRAPHQL_ENDPOINT = "/content/_cq_graphql/aem-demo-assets/endpoint.json";
class AdventureClient {
  static fromEnv(env) {
    if (!this.__envClient) {
      const { NEXT_PUBLIC_AEM_HOST: NEXT_PUBLIC_AEM_HOST2, NEXT_GRAPHQL_ENDPOINT: NEXT_GRAPHQL_ENDPOINT2 } = env;
      this.__envClient = new AdventureClient({
        serviceURL: NEXT_PUBLIC_AEM_HOST2,
        endpoint: NEXT_GRAPHQL_ENDPOINT2
      });
    }
    return this.__envClient;
  }
  constructor({ serviceURL, endpoint }) {
    this.aemHeadlessClient = new AEMHeadless({
      serviceURL,
      endpoint,
      //auth: ['admin', 'admin'], // TODO: dynamically set auth based on AEM instance
      fetch
    });
  }
  async getAllAdventures() {
    const queryAdventuresAll = "aem-demo-assets/adventures-all";
    const res = await this.aemHeadlessClient.runPersistedQuery(queryAdventuresAll);
    return res;
  }
  async getAdventurePaths() {
    const res = await this.getAllAdventures();
    const adventures = res?.data?.adventureList?.items || [];
    const paths = adventures.map((item) => ({
      params: {
        path: [item.slug]
      }
    }));
    return paths;
  }
  async getAdventureByPath(path) {
    const query = `{
      adventureByPath (_path: "${path}") {
        item {
          _path
            title
            activity
            adventureType
            price
            tripLength
            groupSize
            difficulty
            primaryImage {
              ... on ImageRef {
                _path
                mimeType
                width
                height
              }
            }
            description {
              html
            }
            itinerary {
              html
            }
        }
      }
    }
    `;
    const res = await this.aemHeadlessClient.runQuery(query);
    return res;
  }
}
export {
  AdventureClient as A,
  NEXT_PUBLIC_AEM_HOST as N,
  NEXT_GRAPHQL_ENDPOINT as a
};
