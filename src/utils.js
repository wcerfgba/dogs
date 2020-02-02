export function getIn(obj, k, ...ks) {
  if (typeof obj !== 'object') {
    return null;
  }
  
  if (ks.length === 0) {
    return obj[k];
  }
  
  return getIn.apply(null, [ obj[k], ks[0], ...ks.slice(1) ]);
}