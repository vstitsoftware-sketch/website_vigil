import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";

console.log("=== Main script executing ===");
console.log("Environment:", import.meta.env.MODE);
console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);

// Global error handler
window.onerror = function (message, source, lineno, colno, error) {
    console.error("Global error caught:", { message, source, lineno, colno, error });
    const errorDiv = document.createElement("div");
    errorDiv.style.position = "fixed";
    errorDiv.style.top = "0";
    errorDiv.style.left = "0";
    errorDiv.style.width = "100%";
    errorDiv.style.backgroundColor = "red";
    errorDiv.style.color = "white";
    errorDiv.style.padding = "20px";
    errorDiv.style.zIndex = "9999";
    errorDiv.style.fontFamily = "monospace";
    errorDiv.innerHTML = `
        <strong>Global Error:</strong><br/>
        ${message}<br/>
        <small>at ${source}:${lineno}:${colno}</small><br/>
        <small>${error?.stack || ''}</small>
    `;
    document.body.appendChild(errorDiv);
    return false;
};

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function (event) {
    console.error("Unhandled promise rejection:", event.reason);
    const errorDiv = document.createElement("div");
    errorDiv.style.position = "fixed";
    errorDiv.style.bottom = "0";
    errorDiv.style.left = "0";
    errorDiv.style.width = "100%";
    errorDiv.style.backgroundColor = "orange";
    errorDiv.style.color = "white";
    errorDiv.style.padding = "20px";
    errorDiv.style.zIndex = "9999";
    errorDiv.style.fontFamily = "monospace";
    errorDiv.textContent = `Unhandled Promise Rejection: ${event.reason}`;
    document.body.appendChild(errorDiv);
});

try {
    console.log("=== Attempting to get root element ===");
    const rootElement = document.getElementById("root");

    if (!rootElement) {
        throw new Error("Root element not found!");
    }

    console.log("Root element found:", rootElement);
    console.log("=== Creating React root ===");
    const root = createRoot(rootElement);

    console.log("=== Rendering App component ===");
    root.render(<App />);
    console.log("=== App rendered successfully ===");
} catch (error) {
    console.error("Error during initialization:", error);
    const errorDiv = document.createElement("div");
    errorDiv.style.position = "fixed";
    errorDiv.style.top = "50%";
    errorDiv.style.left = "50%";
    errorDiv.style.transform = "translate(-50%, -50%)";
    errorDiv.style.backgroundColor = "darkred";
    errorDiv.style.color = "white";
    errorDiv.style.padding = "40px";
    errorDiv.style.zIndex = "10000";
    errorDiv.style.fontFamily = "monospace";
    errorDiv.style.maxWidth = "80%";
    errorDiv.style.borderRadius = "8px";
    errorDiv.innerHTML = `
        <h2>Initialization Error</h2>
        <p>${error instanceof Error ? error.message : String(error)}</p>
        <pre>${error instanceof Error ? error.stack : ''}</pre>
    `;
    document.body.appendChild(errorDiv);
}
