"use client";

import { useEffect } from "react";

export default function SessionInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingId = localStorage.getItem("sessionId");
      if (!existingId) {
        const newId = crypto.randomUUID();
        localStorage.setItem("sessionId", newId);
      }
    }
  }, []);
  return null;
}
