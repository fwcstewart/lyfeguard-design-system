import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './ToastProvider';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';
import { ToastVariant } from './types';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

const variantOrder: ToastVariant[] = ['info', 'success', 'warning', 'error'];

// Component that uses the useToast hook - must be inside ToastProvider
const ToastDemoInner: React.FC = () => {
  const { showToast, clearAll } = useToast();

  return (
    <div
      style={{
        padding: vars.spacing[5] as unknown as string,
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing[3],
      }}
    >
      <div style={{ display: 'flex', gap: vars.spacing[2], flexWrap: 'wrap' }}>
        <Button onClick={() => showToast('Info message', { variant: 'info' })}>
          Show Info
        </Button>
        <Button onClick={() => showToast('Success! Operation completed.', { variant: 'success' })}>
          Show Success
        </Button>
        <Button onClick={() => showToast('Warning: Please review this action.', { variant: 'warning' })}>
          Show Warning
        </Button>
        <Button onClick={() => showToast('Error: Something went wrong.', { variant: 'error' })}>
          Show Error
        </Button>
      </div>
      <div style={{ display: 'flex', gap: vars.spacing[2], flexWrap: 'wrap' }}>
        <Button
          variant="secondary"
          onClick={() => showToast('This toast will not auto-dismiss', { duration: 0 })}
        >
          Persistent Toast
        </Button>
        <Button variant="secondary" onClick={() => showToast('Quick message', { duration: 2000 })}>
          Short Duration
        </Button>
        <Button variant="tertiary" onClick={clearAll}>
          Clear All
        </Button>
      </div>
      <p style={{ color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.sm }}>
        Click the buttons above to show toast notifications. They will appear in the bottom-right
        corner and auto-dismiss after 5 seconds (unless specified otherwise).
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemoInner />
    </ToastProvider>
  ),
};