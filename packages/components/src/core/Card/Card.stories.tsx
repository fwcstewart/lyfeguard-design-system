import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

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
