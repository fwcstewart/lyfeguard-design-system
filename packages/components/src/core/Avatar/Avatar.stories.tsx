import React from 'react';
import { Avatar } from './Avatar';
import { vars } from '../../globals.css';

export default {
  title: 'Core/Avatar',
  component: Avatar,
};

export const WithImage = () => (
  <Avatar
    src="https://i.pravatar.cc/150?img=3"
    name="Jane Doe"
    size={48}
    tabIndex={0}
  />
);

export const WithInitials = () => <Avatar name="John Smith" size={48} tabIndex={0} />;

const names = ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Katherine Johnson', 'Donald Knuth', 'Radia Perlman'];

const themedContainerStyles: React.CSSProperties = {
  display: 'grid',
  gap: vars.spacing[3],
  padding: vars.spacing[4],
  borderRadius: vars.radius.lg,
};

const gridStyles: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(72px, 1fr))',
  gap: vars.spacing[3],
  justifyItems: 'center',
  alignItems: 'center',
};

const subtitleStyles: React.CSSProperties = {
  margin: 0,
  fontFamily: vars.font.sans,
  color: vars.color.theme.text.secondary,
};

export const ThemedGrid = () => (
  <div
    style={{
      display: 'grid',
      gap: vars.spacing[5],
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    }}
  >
    <div style={{ ...themedContainerStyles, background: vars.color.theme.surface }}>
      <p style={subtitleStyles}>Light theme</p>
      <div style={gridStyles}>
        {names.map((person, index) => (
          <Avatar
            key={`light-${person}`}
            name={person}
            size={index % 2 === 0 ? 56 : 48}
            tabIndex={0}
            backgroundColor={index === 0 ? vars.color.brand500_20 : undefined}
          />
        ))}
      </div>
    </div>

    <div
      className="dark"
      style={{
        ...themedContainerStyles,
        background: vars.color.theme.surface,
        color: vars.color.theme.text.primary,
      }}
    >
      <p style={subtitleStyles}>Dark theme</p>
      <div style={gridStyles}>
        {names.map((person, index) => (
          <Avatar
            key={`dark-${person}`}
            name={person}
            size={index % 2 === 0 ? 56 : 48}
            tabIndex={0}
            backgroundColor={index === 1 ? vars.color.theme.surfaceActive : vars.color.brand500_30}
          />
        ))}
      </div>
    </div>
  </div>
);