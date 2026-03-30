import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  const store = getStore("previewer");

  try {
    const state = await store.get("shared-state", { type: "json" });
    if (!state) {
      return Response.json({ ok: true, state: null });
    }
    return Response.json({ ok: true, state });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
};

export const config = { path: "/api/get-state" };
