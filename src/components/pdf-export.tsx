"use client";

import { Download } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";

interface PDFExportProps {
  /** Suggested file name, without extension: browsers offer the document title when saving as PDF. */
  fileName: string;
  label?: string;
  className?: string;
}

/**
 * Opens the print dialog. The print styles leave only the CV document on the page
 * (see cv-document.tsx), so "Save as PDF" produces the CV and Ctrl+P does the same.
 */
export const PDFExport: React.FC<PDFExportProps> = ({ fileName, label = "Download CV (PDF)", className }) => {
  const handlePrint = () => {
    const previousTitle = document.title;
    document.title = fileName;
    window.addEventListener("afterprint", () => (document.title = previousTitle), { once: true });
    window.print();
  };

  return (
    <Button variant="outline" onClick={handlePrint} className={className}>
      <Download className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
};

export default PDFExport;
