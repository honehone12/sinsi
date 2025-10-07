import {error} from "@sveltejs/kit";

export function badRequest() {
    return error(400, "Bad request.");
}

export function internalError() {
    return error(500, "Internal server error.");
}
