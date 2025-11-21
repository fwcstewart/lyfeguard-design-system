import React from 'react';
import { FileUpload } from './FileUpload';

export default {
  title: 'Core/FileUpload',
  component: FileUpload,
};

export const Default = () => (
  <FileUpload label="Upload files" multiple onFilesSelected={(files) => console.log(files)} />
);