import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';

const meta: Meta<typeof Modal> = {
  title: 'Core/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const StoryShell: React.FC<{ themeClassName?: string }> = ({ themeClassName }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={themeClassName}
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        minHeight: '60vh',
      }}
    >
      <Button variant="primary" onClick={() => setOpen(true)}>
        Launch modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Account recovery"
        description="Confirm how you want us to notify you about your recovery details."
        footer={(
          <>
            <Button variant="tertiary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Send email
            </Button>
          </>
        )}
      >
        <p>
          Keep your recovery details secure by choosing the right communication method. We will send a confirmation when your
          request has been processed.
        </p>
        <ul style={{ margin: `${vars.spacing[3]} 0`, paddingLeft: vars.spacing[5] as unknown as string }}>
          <li>We lock focus inside the modal until you close it.</li>
          <li>Escape or the close button will return you to the trigger.</li>
          <li>Use the footer actions to continue or cancel.</li>
        </ul>
      </Modal>
    </div>
  );
};

export const LightMode: Story = {
  name: 'Light mode',
  render: () => <StoryShell />,
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: () => <StoryShell themeClassName="dark" />,
};
