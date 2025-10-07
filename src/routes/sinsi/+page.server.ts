import {hasAgeCookie} from "$lib/server/cookies.js";
import {VARY_CACHE_HEADER} from "$lib/server/headers.js";

export function load({cookies, setHeaders}) {
    const needAgeVerification = !hasAgeCookie(cookies);

    setHeaders(VARY_CACHE_HEADER);
    
    return {needAgeVerification};
}
