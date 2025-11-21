import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';
import { vars } from '../../globals.css';

const meta: Meta<typeof Card> = {
  title: 'Core/Card',
  component: Card
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <h3
        style={{
          margin: 0,
          fontSize: vars.font.size.heading.sm,
          lineHeight: vars.font.lineHeight.heading.sm,
          fontFamily: vars.font.sans,
        }}
      >
        Card Title
      </h3>
      <p
        style={{
          margin: 0,
          marginTop: vars.spacing[2] as unknown as string,
          color: vars.color.theme.text.secondary,
          fontSize: vars.font.size.body.base,
          lineHeight: vars.font.lineHeight.body.base,
          fontFamily: vars.font.sans,
        }}
      >
        This is a simple card with content inside. Use cards to group related information and actions.
      </p>
    </Card>
  )
};

export const WithHeader: Story = {
  render: () => (
    <Card header="Card Header">
      <p
        style={{
          margin: 0,
          fontSize: vars.font.size.body.base,
          lineHeight: vars.font.lineHeight.body.base,
          color: vars.color.theme.text.secondary,
          fontFamily: vars.font.sans,
        }}
      >
        This card has a header section. The header is separated from the body with a border and uses semi-bold typography.
      </p>
    </Card>
  )
};

export const WithFooter: Story = {
  render: () => (
    <Card footer="Card Footer">
      <p
        style={{
          margin: 0,
          fontSize: vars.font.size.body.base,
          lineHeight: vars.font.lineHeight.body.base,
          color: vars.color.theme.text.secondary,
          fontFamily: vars.font.sans,
        }}
      >
        This card has a footer section. The footer appears at the bottom with a subtle background color and top border.
      </p>
    </Card>
  )
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card
      header="Document Details"
      footer={
        <div
          style={{
            display: 'flex',
            gap: vars.spacing[3],
            justifyContent: 'flex-end',
          }}
        >
          <Button variant="secondary" size="sm">Cancel</Button>
          <Button variant="primary" size="sm">Save</Button>
        </div>
      }
    >
      <p
        style={{
          margin: 0,
          fontSize: vars.font.size.body.base,
          lineHeight: vars.font.lineHeight.body.base,
          color: vars.color.theme.text.secondary,
          fontFamily: vars.font.sans,
        }}
      >
        Cards can have both header and footer sections. This is useful for forms, detail views, and action panels.
      </p>
    </Card>
  )
};

export const Clickable: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: vars.spacing[4],
        flexWrap: 'wrap',
      }}
    >
      <Card clickable onClick={() => alert('Card clicked!')}>
        <h3
          style={{
            margin: 0,
            fontSize: vars.font.size.heading.sm,
            lineHeight: vars.font.lineHeight.heading.sm,
            fontFamily: vars.font.sans,
          }}
        >
          Clickable Card
        </h3>
        <p
          style={{
            marginTop: vars.spacing[2] as unknown as string,
            marginBottom: 0,
            fontSize: vars.font.size.body.base,
            lineHeight: vars.font.lineHeight.body.base,
            color: vars.color.theme.text.secondary,
            fontFamily: vars.font.sans,
          }}
        >
          This card has hover effects and can be clicked.
        </p>
      </Card>
      <Card clickable onClick={() => alert('Card clicked!')} header="With Header">
        <p
          style={{
            margin: 0,
            fontSize: vars.font.size.body.base,
            lineHeight: vars.font.lineHeight.body.base,
            color: vars.color.theme.text.secondary,
            fontFamily: vars.font.sans,
          }}
        >
          Clickable cards work with headers and footers too.
        </p>
      </Card>
    </div>
  )
};

export const WithHeaderBodyFooterLight: Story = {
  name: 'Header, Body & Footer (Light)',
  render: () => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'flex',
        gap: vars.spacing[4],
        justifyContent: 'center',
      }}
    >
      <Card
        header="Personal Summary"
        footer={
          <div
            style={{
              display: 'flex',
              gap: vars.spacing[3],
              justifyContent: 'flex-end',
            }}
          >
            <Button variant="secondary" size="sm">Dismiss</Button>
            <Button variant="primary" size="sm">Continue</Button>
          </div>
        }
      >
        <p
          style={{
            margin: 0,
            fontSize: vars.font.size.body.base,
            lineHeight: vars.font.lineHeight.body.base,
            color: vars.color.theme.text.secondary,
            fontFamily: vars.font.sans,
          }}
        >
          Use this layout to combine card headers, descriptive body content and actionable footers.
        </p>
      </Card>
    </div>
  ),
};

export const WithHeaderBodyFooterDark: Story = {
  name: 'Header, Body & Footer (Dark)',
  render: () => (
    <div
      className="dark"
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'flex',
        gap: vars.spacing[4],
        justifyContent: 'center',
      }}
    >
      <Card
        clickable
        header="Security Overview"
        footer={
          <div
            style={{
              display: 'flex',
              gap: vars.spacing[3],
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: vars.font.size.body.sm,
                lineHeight: vars.font.lineHeight.body.sm,
              }}
            >
              Tap to view more details.
            </span>
            <Button variant="primary" size="sm">View</Button>
          </div>
        }
      >
        <p
          style={{
            margin: 0,
            fontSize: vars.font.size.body.base,
            lineHeight: vars.font.lineHeight.body.base,
            color: vars.color.theme.text.secondary,
            fontFamily: vars.font.sans,
          }}
        >
          Dark mode surfaces preserve spacing, typography and interactive affordances.
        </p>
      </Card>
    </div>
  ),
};
