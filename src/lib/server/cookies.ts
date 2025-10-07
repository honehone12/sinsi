import { redirect, type Cookies } from "@sveltejs/kit";
import {isLocal} from "$lib";

export const AGE_COOKIE_KEY = 'age-verification';
export const AGE_COOKIE_VALUE = 'true';

export function hasAgeCookie(cookies: Cookies) {
    const ageCookie = cookies.get(AGE_COOKIE_KEY);
    return !!ageCookie && ageCookie === AGE_COOKIE_VALUE;
}

export function setCookie(
    cookies: Cookies,
    key: string,
    value: string
) {
    cookies.set(
        key,
        value,
        {
            httpOnly: true,
            maxAge: 7776000,
            path: '/',
            sameSite: `lax`,
            secure: !isLocal()
        }
    );
}

export function setAgeCookie(cookies: Cookies, url: string | URL) {
    if (!hasAgeCookie(cookies)) {
        setCookie(
            cookies,
            AGE_COOKIE_KEY, 
            AGE_COOKIE_VALUE,
        );
    }
    
    return redirect(303, url);
}
