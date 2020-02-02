import http from './http';

const endpoint = 'https://api.discogs.com';

export function search(token, q) {
  return http.get(`${endpoint}/database/search`, {
    params: { token, q }
  });
}

export function label(token, labelId) {
  return http.get(`${endpoint}/labels/${labelId}`, {
    params: { token }
  });
}

export function labelReleases(token, labelId) {
  return http.get(`${endpoint}/labels/${labelId}/releases`, {
    params: { token }
  });
}

export function artist(token, artistId) {
  return http.get(`${endpoint}/artists/${artistId}`, {
    params: { token }
  });
}

export function artistReleases(token, artistId) {
  return http.get(`${endpoint}/artists/${artistId}/releases`, {
    params: { token }
  });
}

export function release(token, releaseId) {
  return http.get(`${endpoint}/releases/${releaseId}`, {
    params: { token }
  });
}