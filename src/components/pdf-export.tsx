"use client";

import { Download } from "lucide-react";
import type React from "react";
import { Button } from "./ui/button";

interface PDFExportProps {
  className?: string;
  /** Browsers suggest the document title as the file name when saving as PDF. */
  fileName?: string;
}

/**
 * Opens the print dialog. The print styles replace the page with the CV document
 * (see cv-document.tsx), so "Save as PDF" produces the CV and Ctrl+P does the same.
 */
export const PDFExport: React.FC<PDFExportProps> = ({ className, fileName = "Bojidar_Yovchev_CV" }) => {
  const handlePrint = () => {
    const previousTitle = document.title;
    document.title = fileName;
    window.addEventListener("afterprint", () => (document.title = previousTitle), { once: true });
    window.print();
  };

  return (
    <Button variant="outline" onClick={handlePrint} className={className}>
      <Download className="mr-2 h-4 w-4" />
      Download CV (PDF)
    </Button>
  );
};

export default PDFExport;
