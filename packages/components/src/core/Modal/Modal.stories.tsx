import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div
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
  },
};

export const Variants: Story = {
  render: () => {
    const [openDefault, setOpenDefault] = React.useState(false);
    const [openWhite, setOpenWhite] = React.useState(false);
    const [openDark, setOpenDark] = React.useState(false);
    const [openWide, setOpenWide] = React.useState(false);

    return (
      <div
        style={{
          background: vars.color.theme.background,
          color: vars.color.theme.text.primary,
          padding: vars.spacing[6] as unknown as string,
          minHeight: '60vh',
          display: 'flex',
          gap: vars.spacing[3] as unknown as string,
          flexWrap: 'wrap',
        }}
      >
        <Button variant="primary" onClick={() => setOpenDefault(true)}>
          Default Modal
        </Button>
        <Button variant="white" onClick={() => setOpenWhite(true)}>
          White Modal
        </Button>
        <Button variant="dark" onClick={() => setOpenDark(true)}>
          Dark Modal
        </Button>
        <Button variant="secondary" onClick={() => setOpenWide(true)}>
          Wide Modal
        </Button>

        <Modal
          open={openDefault}
          onClose={() => setOpenDefault(false)}
          title="Default Modal"
          description="This is the default modal variant."
          footer={(
            <Button variant="primary" onClick={() => setOpenDefault(false)}>
              Close
            </Button>
          )}
        >
          <p>Default modal with standard styling.</p>
        </Modal>

        <Modal
          open={openWhite}
          onClose={() => setOpenWhite(false)}
          variant="white"
          title="White Modal"
          description="This modal has a white background."
          footer={(
            <Button variant="primary" onClick={() => setOpenWhite(false)}>
              Close
            </Button>
          )}
        >
          <p>White variant modal for light backgrounds.</p>
        </Modal>

        <Modal
          open={openDark}
          onClose={() => setOpenDark(false)}
          variant="dark"
          title="Dark Modal"
          description="This modal has a dark background."
          footer={(
            <Button variant="inverted" onClick={() => setOpenDark(false)}>
              Close
            </Button>
          )}
        >
          <p>Dark variant modal with inverted colors.</p>
        </Modal>

        <Modal
          open={openWide}
          onClose={() => setOpenWide(false)}
          wide
          title="Wide Modal"
          description="This modal uses 95vw max-width for wide content."
          footer={(
            <Button variant="primary" onClick={() => setOpenWide(false)}>
              Close
            </Button>
          )}
        >
          <p>Wide modal variant for tables and large content.</p>
        </Modal>
      </div>
    );
  },
};