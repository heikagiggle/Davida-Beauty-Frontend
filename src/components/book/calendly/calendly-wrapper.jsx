/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Calendly.css";

export function CalendlyEmbed({ url }) {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      //   style={{ width: "100%", height: "40rem" }}
    ></div>
  );
}
