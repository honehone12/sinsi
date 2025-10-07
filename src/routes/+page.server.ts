import { CACHE_HEADER } from '$lib/server/headers.js';

export function load({setHeaders}) {
    setHeaders(CACHE_HEADER);
}
