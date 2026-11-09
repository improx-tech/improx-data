import React, { Component, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

window.onerror = function (msg, url, line, col, error) {
  console.error("GLOBAL WINDOW ERROR:", msg, error);
  const rootEl = document.getElementById('root');
  if (rootEl) {
    rootEl.innerHTML = `
      <div style="padding: 30px; font-family: -apple-system, sans-serif; background: #fef2f2; color: #991b1b; border: 2px solid #ef4444; border-radius: 12px; margin: 20px;">
        <h2 style="margin: 0 0 10px; font-size: 20px;">JavaScript Runtime Error:</h2>
        <div style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">${msg}</div>
        <pre style="white-space: pre-wrap; font-size: 12px; background: #fee2e2; padding: 12px; border-radius: 6px; overflow-x: auto;">${error ? error.stack : 'Line: ' + line + ', Col: ' + col}</pre>
      </div>
    `;
  }
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React ErrorBoundary caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 30, fontFamily: '-apple-system, sans-serif', background: '#fef2f2', color: '#991b1b', border: '2px solid #ef4444', borderRadius: 12, margin: 20 }}>
          <h2 style={{ margin: '0 0 10px', fontSize: 20 }}>React Component Render Error:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 13, background: '#fee2e2', padding: 12, borderRadius: 6 }}>
            {this.state.error?.toString()}
            {'\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
