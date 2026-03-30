import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "POST") {
    return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
  }

  try {
    const body = await req.json();
    if (!body || typeof body !== "object") {
      return Response.json({ ok: false, error: "Invalid body" }, { status: 400 });
    }

    const store = getStore("previewer");
    await store.setJSON("shared-state", {
      ...body,
      savedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: err.message }, { status: 500 });
  }
};

export const config = { path: "/api/save-state" };
