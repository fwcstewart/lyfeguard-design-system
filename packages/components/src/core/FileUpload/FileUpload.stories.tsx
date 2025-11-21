import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'Core/FileUpload',
  component: FileUpload,
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 520 }}>{children}</div>
);

const DarkWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="dark" style={{ background: 'var(--color-neutral-900)', padding: '24px' }}>
    {children}
  </div>
);

export const SingleFileLight: Story = {
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

export const SingleFileDark: Story = {
  render: (args) => (
    <DarkWrapper>
      <StoryContainer>
        <FileUpload {...args} />
      </StoryContainer>
    </DarkWrapper>
  ),
  args: {
    label: 'Upload a document',
    multiple: false,
  },
};

export const MultiFileLight: Story = {
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

export const MultiFileDark: Story = {
  render: (args) => (
    <DarkWrapper>
      <StoryContainer>
        <FileUpload {...args} />
      </StoryContainer>
    </DarkWrapper>
  ),
  args: {
    label: 'Upload multiple files',
    multiple: true,
  },
};