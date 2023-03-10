export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e86b80dc.js","imports":["_app/immutable/entry/start.e86b80dc.js","_app/immutable/chunks/index.121df402.js","_app/immutable/chunks/singletons.0f7159dc.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.6247467a.js","imports":["_app/immutable/entry/app.6247467a.js","_app/immutable/chunks/index.121df402.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/adventures/[path1]/[path2]",
				pattern: /^\/adventures\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"path1","optional":false,"rest":false,"chained":false},{"name":"path2","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
