import React from 'react';

export interface ColorSwatchProps {
  name: string;
  hex: string;
  cssVar: string;
  description?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, cssVar, description }) => {
  return (
    <div style={{
      border: '1px solid var(--color-theme-border)',
      borderRadius: '8px',
      overflow: 'hidden',
      background: 'var(--color-theme-surface)'
    }}>
      <div style={{
        width: '100%',
        height: '80px',
        backgroundColor: hex,
        borderBottom: '1px solid var(--color-theme-border)'
      }} />
      <div style={{ padding: '12px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-theme-text-primary)',
          marginBottom: '4px',
          fontFamily: 'var(--font-family-sans)'
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '12px',
          color: 'var(--color-theme-text-secondary)',
          fontFamily: 'monospace',
          marginBottom: description ? '4px' : 0
        }}>
          {hex}
        </div>
        {description && (
          <div style={{
            fontSize: '12px',
            color: 'var(--color-theme-text-tertiary)',
            marginTop: '4px',
            fontFamily: 'var(--font-family-sans)'
          }}>
            {description}
          </div>
        )}
        <div style={{
          fontSize: '11px',
          color: 'var(--color-theme-text-tertiary)',
          fontFamily: 'monospace',
          marginTop: '4px'
        }}>
          {cssVar}
        </div>
      </div>
    </div>
  );
};

