import React, { useRef, useState } from 'react';
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files ? Array.from(event.target.files) : [];
    setFiles(newFiles);
    onFilesSelected?.(newFiles);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsActive(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    onFilesSelected?.(droppedFiles);
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  return (
    <div className={s.wrapper}>
      {label && <label>{label}</label>}
      <div
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
      >
        <p>{files.length === 0 ? 'Drag and drop files here or click to browse' : 'Add more files'}</p>
        <input
          ref={inputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>
      {files.length > 0 && (
        <ul className={s.fileList}>
          {files.map((file, i) => (
            <li key={i} className={s.fileItem}>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};