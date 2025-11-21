import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Core/Alert',
  component: Alert,
};

export const Info = () => (
  <Alert variant="info" title="Information">
    This is an informational alert.
  </Alert>
);

export const Success = () => (
  <Alert variant="success" title="Success">
    Your action was completed successfully.
  </Alert>
);

export const Warning = () => (
  <Alert variant="warning" title="Warning">
    Please double check your input.
  </Alert>
);

export const Error = () => (
  <Alert variant="error" title="Error">
    Something went wrong.
  </Alert>
);