import { type Actions } from "@sveltejs/kit";
import { setAgeCookie } from "$lib/server/cookies";
import { badRequest } from "$lib/server/errors.js";
import { MAX_REF_LEN } from "$lib";

export const actions: Actions = {
    default: async ({cookies, request}) => {
        const form = await request.formData();
        const ref = form.get('ref');
        if (!ref || typeof ref !== 'string') {
            console.warn('null ref');
            return badRequest();
        }
        if (ref.length > MAX_REF_LEN) {
            console.warn(`ref over limit: ${ref}`);
            return badRequest();
        }
        if (
            ref !== '/' &&
            !ref.startsWith('/kenja') &&
            !ref.startsWith('/textsearch/') &&
            !ref.startsWith('/vectorsearch/')
        ) {
            console.warn(`invalid ref: ${ref}`);
            return badRequest();
        }

        return setAgeCookie(cookies, ref);
    }
};
