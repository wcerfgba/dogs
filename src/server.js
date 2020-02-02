import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import * as discogs from './discogs';

const { PORT, NODE_ENV, DISCOGS_TOKEN } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.get('/api/search/:q', async (req, res) => {
		const discogRes = await discogs.search(DISCOGS_TOKEN, req.params.q);
		const out = JSON.stringify(discogRes.data);
		res.end(out);
	})
	.get('/api/release/:id', async (req, res) => {
		const discogRes = await discogs.release(DISCOGS_TOKEN, req.params.id);
		const out = JSON.stringify(discogRes.data);
		res.end(out);
	})
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
