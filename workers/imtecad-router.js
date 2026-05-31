const ORIGIN = "https://imtecad-2026.pages.dev";
const BASE_PATH = "/imtecad-2026";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === BASE_PATH) {
      url.pathname = `${BASE_PATH}/`;
      return Response.redirect(url.toString(), 308);
    }

    if (!url.pathname.startsWith(`${BASE_PATH}/`)) {
      return new Response("Not found", { status: 404 });
    }

    const target = new URL(`${url.pathname}${url.search}`, ORIGIN);
    const originRequest = new Request(target, request);
    return fetch(originRequest);
  },
};
