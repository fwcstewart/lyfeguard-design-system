import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './ToastProvider';
import { Button } from '../Button/Button';

const meta: Meta<typeof Toast> = {
  title: 'Core/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Component that uses the useToast hook - must be inside ToastProvider
const ToastDemoInner: React.FC = () => {
  const { showToast, clearAll } = useToast();

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
      <p style={{ color: '#666', fontSize: '14px' }}>
        Click the buttons above to show toast notifications. They will appear in the bottom-right
        corner and auto-dismiss after 5 seconds (unless specified otherwise).
      </p>
    </div>
  );
};

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: '20px' }}>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast open={open} onClose={() => setOpen(false)} variant="success">
          This is a basic toast notification.
        </Toast>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => {
    const [open, setOpen] = React.useState<string | null>(null);
    return (
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button onClick={() => setOpen('info')}>Info</Button>
          <Button onClick={() => setOpen('success')}>Success</Button>
          <Button onClick={() => setOpen('warning')}>Warning</Button>
          <Button onClick={() => setOpen('error')}>Error</Button>
        </div>
        <Toast
          open={open === 'info'}
          onClose={() => setOpen(null)}
          variant="info"
        >
          This is an info toast.
        </Toast>
        <Toast
          open={open === 'success'}
          onClose={() => setOpen(null)}
          variant="success"
        >
          Operation completed successfully!
        </Toast>
        <Toast
          open={open === 'warning'}
          onClose={() => setOpen(null)}
          variant="warning"
        >
          Please review this action.
        </Toast>
        <Toast
          open={open === 'error'}
          onClose={() => setOpen(null)}
          variant="error"
        >
          An error occurred.
        </Toast>
      </div>
    );
  },
};

export const WithProvider: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemoInner />
    </ToastProvider>
  ),
};