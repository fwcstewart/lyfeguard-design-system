import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardFooter, CardHeader } from './Card';
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
      <Card tone="neutral">
        <CardHeader>
          <h3 style={{ margin: 0, fontSize: vars.font.size.heading.sm, fontFamily: vars.font.sans }}>
            Basic Card
          </h3>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
            A simple card with content. Use cards to group related information.
          </p>
        </CardContent>
      </Card>

      <Card tone="info">
        <CardHeader>
          <h3 style={{ margin: 0, fontSize: vars.font.size.heading.sm, fontFamily: vars.font.sans }}>
            Info tone
          </h3>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
            Cards can signal emphasis using tone tokens.
          </p>
        </CardContent>
      </Card>

      <Card tone="warning">
        <CardHeader>
          <h3 style={{ margin: 0, fontSize: vars.font.size.heading.sm, fontFamily: vars.font.sans }}>
            Warning tone
          </h3>
        </CardHeader>
        <CardContent>
          <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
            Use for cautionary reminders or blocked states.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="secondary">Review</Button>
        </CardFooter>
      </Card>

      <Card clickable onClick={() => alert('Card clicked!')} header="Clickable Card">
        <CardContent>
          <p style={{ margin: 0, color: vars.color.theme.text.secondary, fontSize: vars.font.size.body.base, fontFamily: vars.font.sans }}>
            Clickable cards have hover effects and can trigger actions.
          </p>
        </CardContent>
      </Card>
    </div>
  )
};
