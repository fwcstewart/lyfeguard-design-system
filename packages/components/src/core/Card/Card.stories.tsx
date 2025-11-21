import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: vars.spacing[4], flexWrap: 'wrap' }}>
      <Card>
        <h3 style={{ margin: 0, fontSize: vars.font.size.heading.sm, fontFamily: vars.font.sans }}>
          Basic Card
        </h3>
        <p style={{ margin: `${vars.spacing[2]} 0 0`, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
          A simple card with content. Use cards to group related information.
        </p>
      </Card>
      
      <Card header="Card with Header">
        <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
          Cards can have headers, footers, or both.
        </p>
      </Card>
      
      <Card
        header="Complete Card"
        footer={
          <div style={{ display: 'flex', gap: vars.spacing[3], justifyContent: 'flex-end' }}>
            <Button variant="secondary" size="sm">Cancel</Button>
            <Button variant="primary" size="sm">Save</Button>
          </div>
        }
      >
        <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
          Cards support headers, body content, and footers with actions.
        </p>
      </Card>
      
      <Card clickable onClick={() => alert('Card clicked!')} header="Clickable Card">
        <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
          Clickable cards have hover effects and can trigger actions.
        </p>
      </Card>
    </div>
  )
};
