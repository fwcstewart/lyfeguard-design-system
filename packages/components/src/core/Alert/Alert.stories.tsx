import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from '@lyfeguard/icons';
import { vars } from '../../globals.css';
import { Alert, AlertProps } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Core/Alert',
  component: Alert,
};

export default meta;

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  title: 'Information',
  icon: <InfoIcon />,
  children: 'This is an informational alert.',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  title: 'Success',
  icon: <CheckIcon />,
  children: 'Your action was completed successfully.',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  title: 'Warning',
  icon: <WarningIcon />,
  children: 'Please double check your input.',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  title: 'Error',
  icon: <CloseIcon />,
  children: 'Something went wrong.',
};

export const DarkModeStatuses = () => (
  <div
    className="dark"
    style={{
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
      padding: vars.spacing[6] as unknown as string,
      display: 'grid',
      gap: vars.spacing[4],
      maxWidth: '720px',
    }}
  >
    <Alert variant="info" title="Dark Information" icon={<InfoIcon />}>
      Informational alerts keep their clarity on dark surfaces.
    </Alert>
    <Alert variant="success" title="Dark Success" icon={<CheckIcon />}>
      Success states stay legible with semantic tokens.
    </Alert>
    <Alert variant="warning" title="Dark Warning" icon={<WarningIcon />}>
      Warnings maintain contrast in dark mode.
    </Alert>
    <Alert variant="error" title="Dark Error" icon={<CloseIcon />}>
      Errors surface clearly for urgent attention.
    </Alert>
  </div>
);