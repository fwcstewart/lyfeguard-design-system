import React from 'react';
import { Button, Input, Select, Textarea, Card, Modal } from '@lyfeguard/design-system';

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ padding: '40px', fontFamily: 'var(--font-family-sans)' }}>
      <h1>Lyfeguard Design System Playground</h1>
      <Card style={{ maxWidth: 400 }}>
        <h3 style={{ marginTop: 0 }}>User Form</h3>
        <Input label="Name" placeholder="Enter your name" style={{ marginBottom: 16 }} />
        <Input label="Email" placeholder="you@example.com" type="email" style={{ marginBottom: 16 }} />
        <Select label="Role" style={{ marginBottom: 16 }}>
          <option value="">Select a role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </Select>
        <Textarea label="Bio" placeholder="Tell us about yourself" style={{ marginBottom: 16 }} />
        <Button variant="primary" onClick={() => setOpen(true)}>
          Submit
        </Button>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Thank you!</h2>
        <p>Your information has been submitted successfully.</p>
        <Button variant="primary" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </div>
  );
}
