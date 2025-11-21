import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 520, background: 'var(--color-theme-background)', padding: '24px' }}>
    {children}
  </div>
);

export const SingleFile: Story = {
  render: (args) => (
    <StoryContainer>
      <FileUpload {...args} />
    </StoryContainer>
  ),
  args: {
    label: 'Upload a document',
    multiple: false,
  },
};

export const MultiFile: Story = {
  render: (args) => (
    <StoryContainer>
      <FileUpload {...args} />
    </StoryContainer>
  ),
  args: {
    label: 'Upload multiple files',
    multiple: true,
  },
};