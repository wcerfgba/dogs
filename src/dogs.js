import * as discogs from './discogs';

export async function search(discogsToken, q) {
  const req = await discogs.search(discogsToken, q);
  const results = req.data.results;
  return results;
}

// Artist: releases, labels
// Release: video, artist, label
// Label: releases, artists

// Need to decide on UI. drilldown?