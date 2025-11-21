import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './ToastProvider';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';
import { ToastVariant } from './types';

const meta: Meta<typeof Toast> = {
  title: 'Core/Toast',
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

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ padding: vars.spacing[5] }}>
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
      <div
        style={{
          padding: vars.spacing[5],
          display: 'flex',
          flexDirection: 'column',
          gap: vars.spacing[3],
        }}
      >
        <div style={{ display: 'flex', gap: vars.spacing[2], flexWrap: 'wrap' }}>
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

const StatusShowcase: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing[3],
      padding: vars.spacing[5],
      background: vars.color.theme.surface,
      color: vars.color.theme.text.primary,
      borderRadius: vars.radius.lg,
      ...style,
    }}
  >
    {variantOrder.map((variant) => (
      <Toast key={variant} open onClose={() => {}} variant={variant} duration={0}>
        {variant === 'info' && 'Information update with helpful context.'}
        {variant === 'success' && 'Success toast confirming the action completed.'}
        {variant === 'warning' && 'Warning toast to review your changes.'}
        {variant === 'error' && 'Error toast describing what needs attention.'}
      </Toast>
    ))}
  </div>
);

export const LightAndDarkStatuses: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: vars.spacing[4],
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      }}
    >
      <StatusShowcase />
      <StatusShowcase
        className="dark"
        style={{ background: vars.color.theme.surface, color: vars.color.theme.text.primary }}
      />
    </div>
  ),
};