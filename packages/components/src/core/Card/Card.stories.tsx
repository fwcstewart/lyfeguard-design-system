import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Core/Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <h3 style={{ margin: 0 }}>Card Title</h3>
      <p style={{ marginTop: '8px' }}>
        This is a simple card with content inside. Use cards to group related
        information and actions.
      </p>
    </Card>
  )
};

export const WithHeader: Story = {
  render: () => (
    <Card header="Card Header">
      <p>
        This card has a header section. The header is separated from the body
        with a border and uses semi-bold typography.
      </p>
    </Card>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Card footer="Card Footer">
      <p>
        This card has a footer section. The footer appears at the bottom with
        a subtle background color and top border.
      </p>
    </Card>
  )
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card
      header="Document Details"
      footer={
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      }
    >
      <p>
        Cards can have both header and footer sections. This is useful for
        forms, detail views, and action panels.
      </p>
    </Card>
  )
};

export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Card clickable onClick={() => alert('Card clicked!')}>
        <h3 style={{ margin: 0 }}>Clickable Card</h3>
        <p style={{ marginTop: '8px', marginBottom: 0 }}>
          This card has hover effects and can be clicked.
        </p>
      </Card>
      <Card clickable onClick={() => alert('Card clicked!')} header="With Header">
        <p style={{ margin: 0 }}>
          Clickable cards work with headers and footers too.
        </p>
      </Card>
    </div>
  )
};
