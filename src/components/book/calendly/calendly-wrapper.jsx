/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Calendly.css";

export function CalendlyEmbed({ url }) {
  useEffect(() => {
    // Load Calendly script dynamically
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);

    const handleEvent = (event) => {
      console.log("Message received:", event.data);
      if (event.data.event === "calendly.event_scheduled") {
        console.log("Booking completed!");
        setTimeout(() => {
          window.location.href = "/book/confirmation";
        }, 50);
      }
    };

    window.addEventListener("message", handleEvent);

    return () => {
      window.removeEventListener("message", handleEvent);
    };
  }, []);

  return <div className="calendly-inline-widget" data-url={url}></div>;
}
