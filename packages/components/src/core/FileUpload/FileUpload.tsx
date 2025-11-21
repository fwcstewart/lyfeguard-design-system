import React, { useId, useRef, useState } from 'react';
import { VisuallyHidden } from '../Accessibility/VisuallyHidden';
import * as s from './FileUpload.css';

export interface FileUploadProps {
  /**
   * Allow multiple file selection
   */
  multiple?: boolean;
  /**
   * Called when files are selected. Provides an array of File objects.
   */
  onFilesSelected?: (files: File[]) => void;
  /**
   * Optional label displayed above the drop zone
   */
  label?: string;
  /**
   * Accept attribute for file input (e.g. "image/*" or ".pdf")
   */
  accept?: string;
}

/**
 * FileUpload component
 *
 * Provides a drag-and-drop zone for uploading files, falling back to the
 * native file input when clicked. Selected files are displayed in a list.
 */
export const FileUpload: React.FC<FileUploadProps> = ({
  multiple = false,
  onFilesSelected,
  label,
  accept,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [announcement, setAnnouncement] = useState('No files selected');
  const inputId = useId();
  const descriptionId = useId();
  const announcementId = useId();

  const updateFiles = (newFiles: File[]) => {
    setFiles(newFiles);
    setAnnouncement(
      newFiles.length === 0
        ? 'No files selected'
        : `${newFiles.length} file${newFiles.length > 1 ? 's' : ''} ready: ${newFiles
            .map((file) => file.name)
            .join(', ')}`
    );
    onFilesSelected?.(newFiles);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    updateFiles(newFiles);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsActive(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    updateFiles(droppedFiles);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      inputRef.current?.click();
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const hasFiles = files.length > 0;
  const helperText = multiple
    ? 'Drag and drop files or click to browse. You can upload multiple files.'
    : 'Drag and drop a file or click to browse from your device.';

  return (
    <div className={s.wrapper} data-lyfeguard="FileUpload">
      {label && (
        <label className={s.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div
        role="button"
        tabIndex={0}
        aria-describedby={`${descriptionId} ${announcementId}`}
        aria-label={label ?? 'Upload files'}
        className={isActive ? `${s.dropZone} ${s.dropZoneActive}` : s.dropZone}
        onDragOver={(e) => {
          e.preventDefault();
          setIsActive(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsActive(false);
        }}
        onDrop={handleDrop}
        onClick={openFileDialog}
        onKeyDown={handleKeyDown}
      >
        <p className={s.prompt}>{hasFiles ? 'Add more files' : 'Drag and drop files here'}</p>
        <p className={s.helper} id={descriptionId}>
          {helperText}
        </p>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      <VisuallyHidden aria-live="polite" id={announcementId}>
        {announcement}
      </VisuallyHidden>
      {hasFiles && (
        <ul className={s.fileList}>
          {files.map((file, i) => (
            <li key={file.name ?? i} className={s.fileItem}>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};