import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Core/Modal',
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2>Modal Title</h2>
          <p>This is a basic modal. Click outside to close.</p>
        </Modal>
      </div>
    );
  }
};
