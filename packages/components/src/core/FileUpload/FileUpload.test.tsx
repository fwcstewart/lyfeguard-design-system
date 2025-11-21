import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { FileUpload } from './FileUpload';

const createFileList = (files: File[]) =>
  ({
    length: files.length,
    item: (index: number) => files[index],
    ...files.reduce<Record<number, File>>((acc, file, index) => {
      acc[index] = file;
      return acc;
    }, {}),
  }) as unknown as FileList;

describe('FileUpload', () => {
  test('opens the file dialog when using keyboard activation', () => {
    const clickSpy = vi.spyOn(HTMLInputElement.prototype, 'click').mockImplementation(() => {});
    render(<FileUpload label="Upload documents" />);

    const dropZone = screen.getByRole('button', { name: /upload documents/i });

    fireEvent.keyDown(dropZone, { key: 'Enter', code: 'Enter' });
    fireEvent.keyDown(dropZone, { key: ' ', code: 'Space' });

    expect(clickSpy).toHaveBeenCalledTimes(2);
    clickSpy.mockRestore();
  });

  test('announces selected files and renders the list', () => {
    const files = [new File(['data'], 'report.pdf'), new File(['more data'], 'summary.docx')];
    const onFilesSelected = vi.fn();

    render(<FileUpload label="Upload documents" multiple onFilesSelected={onFilesSelected} />);

    const input = screen.getByLabelText('Upload documents', {
      selector: 'input[type="file"]',
    }) as HTMLInputElement;

    fireEvent.change(input, {
      target: { files: createFileList(files) },
    });

    expect(onFilesSelected).toHaveBeenCalledWith(files);
    expect(screen.getByText('report.pdf')).toBeInTheDocument();
    expect(screen.getByText('summary.docx')).toBeInTheDocument();
    expect(screen.getByText(/2 files ready/i)).toBeInTheDocument();
  });
});
