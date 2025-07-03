export const logSessionEvent = async (event: string, details: string) => {
  const sessionId = localStorage.getItem("sessionId");
  const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  
  try {
    await fetch(`${backendURL}/log-session-event/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, details, session_id: sessionId }),
    });
  } catch (err) {
    console.error("⚠️ Failed to log session event:", err);
  }
};
