export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","society-logo.svg","svelte-logo.svg","worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".js":"application/javascript"},
	_: {
		entry: {"file":"_app/immutable/start-2d6c8c14.js","imports":["_app/immutable/start-2d6c8c14.js","_app/immutable/chunks/index-409e0a98.js","_app/immutable/chunks/singletons-433f94d7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/impressions",
				pattern: /^\/impressions\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/meetups",
				pattern: /^\/meetups\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
