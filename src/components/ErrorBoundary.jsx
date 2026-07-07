"use client";

import { Component } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "3rem", minHeight: "300px",
          textAlign: "center", background: "var(--card)", borderRadius: "var(--radius)",
          border: "1px solid var(--border)"
        }}>
          <AlertTriangle size={48} style={{ color: "var(--warn, #fbbf24)", marginBottom: "1rem" }} />
          <h2 style={{ marginBottom: "0.5rem", color: "var(--foreground)" }}>Something went wrong</h2>
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem", maxWidth: "400px" }}>
            {this.state.error?.message || "An unexpected error occurred"}
          </p>
          <button onClick={this.handleReset} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.75rem 1.5rem", background: "var(--primary)",
            color: "var(--primary-foreground)", border: "none",
            borderRadius: "var(--radius)", cursor: "pointer", fontWeight: 600
          }}>
            <RefreshCw size={18} /> Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
