"use client";

import { useEffect, useState } from "react";

export default function HappyDayGreeting() {
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOptions: string[] = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    setDayName(dayOptions[today.getDay()]);
  }, []);

  return (
    <p className="text-xl mt-4 font-medium text-gray-800 dark:text-gray-200">
     Happy {dayName}! 😊
    </p>
  );
}
