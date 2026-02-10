'use client'

import { useState } from "react";

const logos = [
  { name: 'Color Transparent (Dark BG)', file: 'Color-Transparent-DarkBackground.png' },
  { name: 'Color Transparent (Dark BG) -1', file: 'Color-Transparent-DarkBackground-1.png' },
  { name: 'Color Transparent (Light BG)', file: 'Color-Transparent-LightBackground.png' },
  { name: 'Color Transparent (Light BG) -1', file: 'Color-Transparent-LightBackground-1.png' },
  { name: 'Current Logo', file: 'logo.png' },
]

interface LogoSelectionProps {
  selectedLogo: string;
  onLogoChange: (logo: string) => void;
}

export default function LogoSelection({ selectedLogo, onLogoChange }: LogoSelectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          fontSize: '20px'
        }}
        title="Open logo selector"
      >
        🎨
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: '#fff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      zIndex: 9999,
      maxWidth: '320px',
      maxHeight: '80vh',
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 600 }}>Select Logo</h4>
        <button
          onClick={() => setIsCollapsed(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            color: '#999'
          }}
        >
          ✕
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {logos.map((logo) => (
          <label
            key={logo.file}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 12px',
              background: selectedLogo === logo.file ? '#e3f2fd' : '#f5f5f5',
              borderRadius: '6px',
              cursor: 'pointer',
              border: selectedLogo === logo.file ? '2px solid #2196f3' : '2px solid transparent',
              fontSize: '13px'
            }}
          >
            <input
              type="radio"
              name="logo"
              checked={selectedLogo === logo.file}
              onChange={() => onLogoChange(logo.file)}
            />
            {logo.name}
          </label>
        ))}
      </div>
      <div style={{ marginTop: '12px', fontSize: '11px', color: '#666', background: '#f9f9f9', padding: '8px', borderRadius: '4px' }}>
        <strong>Selected file:</strong><br />
        <code>{selectedLogo}</code>
      </div>
    </div>
  );
}
