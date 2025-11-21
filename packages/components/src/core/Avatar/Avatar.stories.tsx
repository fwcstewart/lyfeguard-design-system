import React from 'react';
import { Avatar } from './Avatar';

export default {
  title: 'Core/Avatar',
  component: Avatar,
};

export const WithImage = () => (
  <Avatar
    src="https://i.pravatar.cc/150?img=3"
    name="Jane Doe"
    size={40}
  />
);

export const WithInitials = () => <Avatar name="John Smith" size={40} />;