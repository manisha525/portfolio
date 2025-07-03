export const logErrorEvent = async (error: unknown, location: string) => {
  const sessionId = localStorage.getItem("sessionId");
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  try {
    await fetch(`${backendURL}/log-error/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: String(error),
        context: location,
        session_id: sessionId,
      }),
    });
  } catch (err) {
    console.error("❌ Failed to log error:", err);
  }
};
