import React, { useState } from 'react';
import { Toast } from './Toast';

export default {
  title: 'Core/Toast',
  component: Toast,
};

export const AutoDismiss = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Show Toast</button>
      <Toast open={open} onClose={() => setOpen(false)} variant="success">
        This is a toast notification.
      </Toast>
    </div>
  );
};