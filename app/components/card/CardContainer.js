"use client";
import React from "react";
import styles from "./card.module.css";
import CardItem from "./CardItem";

const convertToPdfData = [
  {
    href: "https://www.hipdf.com/word-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/word-pdf.svg",
    title: "Word to PDF",
    desc: "The best Word to PDF...",
  },
  {
    href: "https://www.hipdf.com/ppt-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/PPT-PDF.svg",
    title: "PPT to PDF",
    desc: "Convert Powerpoint to PDF online.",
  },
  {
    href: "https://www.hipdf.com/excel-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Excel-PDF.svg",
    title: "Excel to PDF",
    desc: "Easily Convert Excel online.",
  },
  {
    href: "https://www.hipdf.com/jpg-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/jpg-pdf.svg",
    title: "JPG to PDF",
    desc: "Convert JPG, Pdf online.",
  },
  {
    href: "https://www.hipdf.com/txt-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Image-in-TXT.svg",
    title: "TXT to PDF",
    desc: "Convert TXT to PDF online for free.",
  },
  {
    href: "https://www.hipdf.com/rtf-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Image-in-RTX.svg",
    title: "RTF to PDF",
    desc: "Convert RTF file to PDF ",
  },
  {
    href: "https://www.hipdf.com/pub-to-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Excel-PUB.svg",
    title: "PUB to PDF",
    desc: "Convert Publisher to PDF .",
  },
];
const convertFromPdfData = [
  {
    href: "https://www.hipdf.com/pdf-to-word",
    imgUrl: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    title: "PDF to Word",
    desc: "Easily convert PDF to Word document.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-ppt",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
    title: "PDF to PPT",
    desc: "Convert PDF to Powerpoint online.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-excel",
    imgUrl: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
    title: "PDF to Excel",
    desc: "Convert PDF to xls for free.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-jpg",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
    title: "PDF to JPG",
    desc: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-text",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
    title: "PDF to TXT",
    desc: "Convert your PDF to TXT, and extract text from your PDF.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-rtf",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
    title: "PDF to RTF",
    desc: "Convert PDF to RTF online and free.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-pages",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
    title: "PDF to Pages",
    desc: "Convert PDF to Pages on Mac and Windows.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-html",
    imgUrl: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
    title: "PDF to HTML",
    desc: "Convert your PDF documents to HTML web page.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-dxf",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
    title: "PDF to DXF",
    desc: "The best online tool to convert PDF to DXF online.",
  },
  {
    href: "https://www.hipdf.com/pdf-to-epub",
    imgUrl: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
    title: "PDF to EPUB",
    desc: "Convert PDF file to EPUB ebook.",
  },
  {
    href: "https://www.hipdf.com/ocr",
    imgUrl: "https://images.hipdf.com/images2022/icons/OCR.svg",
    title: "OCR",
    desc: "Convert your scanned PDFs and images into editable Word, Excel, and PPT.",
  },
];

const editPdfData = [
  {
    href: "https://www.hipdf.com/pdf-editor",
    imgUrl: "https://images.hipdf.com/images2022/icons/editPDF.svg",
    title: "Edit PDF",
    desc: "Use the best online tool to edit PDFs in your browser.",
  },
  {
    href: "https://www.hipdf.com/crop-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Crop-PDF.svg",
    title: "Crop PDF",
    desc: "Crop PDF online to a selected area, adjust margin size swiftly.",
  },
  {
    href: "https://www.hipdf.com/replace-text",
    imgUrl: "https://images.hipdf.com/images2022/icons/replace-text-pdf.svg",
    title: "Replace Text",
    desc: "The easiest way to replace text online.",
  },
  {
    href: "https://www.hipdf.com/rotate-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Rotate-PDF.svg",
    title: "Rotate PDF",
    desc: "Rotate and save your PDF pages online for free.",
  },
];

const protectPDfData = [
  {
    href: "https://www.hipdf.com/unlock-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Unlock-PDF.svg",
    title: "Unlock PDF",
    desc: "Unlock your PDF file with the best PDF password remover online.",
  },
  {
    href: "https://www.hipdf.com/redact-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Redact-PDF.svg",
    title: "Redact PDF",
    desc: "Permanently remove sensitive content from PDFs.",
  },
  {
    href: "https://www.hipdf.com/protect-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Protect-PDF.svg",
    title: "Protect PDF",
    desc: "Encrypt your PDF with a password.",
  },
  {
    href: "https://www.hipdf.com/sign-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Sign-PDF.svg",
    title: "Sign PDF",
    desc: "Sign PDF with an electronic signature.",
  },
  {
    href: "https://www.hipdf.com/share-document",
    imgUrl: "https://images.hipdf.com/images2022/icons/Share-Document.svg",
    title: "Share Document",
    desc: "Useful online document sharing for free.",
  },
];

const organizePdfToolsData = [
  {
    href: "https://www.hipdf.com/merge-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/merge-pdf.svg",
    title: "Merge PDF",
    desc: "The easiest way to combine PDF Files.",
  },
  {
    href: "https://www.hipdf.com/compress-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/compress-pdf.svg",
    title: "Compress PDF",
    desc: "The easiest way to reduce PDF size online.",
  },
  {
    href: "https://www.hipdf.com/split-pdf",
    imgUrl: "https://images.hipdf.com/images2022/icons/Split-PDF.svg",
    title: "Split PDF",
    desc: "Split a PDF into multiple PDF files by page range.",
  },
  {
    href: "https://www.hipdf.com/extract-images-from-pdf",
    imgUrl:
      "https://images.hipdf.com/images2022/icons/Extract-images-from-PDF.svg",
    title: "Extract images from PDF",
    desc: "Extract all images contained in a PDF.",
  },
  {
    href: "https://www.hipdf.com/rearrange-pdf-pages",
    imgUrl: "https://images.hipdf.com/images2022/icons/Rearrange-PDF-Pages.svg",
    title: "Rearrange PDF Pages",
    desc: "Reorder PDF pages by dragging and dropping page thumbnails.",
  },
  {
    href: "https://www.hipdf.com/delete-pages",
    imgUrl: "https://images.hipdf.com/images2022/icons/delete-pages.svg",
    title: "Delete Pages",
    desc: "Delete unneeded pages from PDF.",
  },
];

const imageToolsData = [
  {
    href: "https://www.hipdf.com/image-compressor",
    imgUrl: "https://images.hipdf.com/images2022/icons/compress-image.svg",
    title: "Compress image",
    desc: "Free and online photo compressor.",
  },
  {
    href: "https://www.hipdf.com/crop-image",
    imgUrl: "https://images.hipdf.com/images2022/icons/crop-image.svg",
    title: "Crop image",
    desc: "The fastest way to crop your image.",
  },
  {
    href: "https://www.hipdf.com/image-converter",
    imgUrl:
      "https://images.hipdf.com/images2022/icons/Image-format-Convert.svg",
    title: "Images Converter",
    desc: "Easily convert between JPG, PNG, GIF, TIFF, BMP and ICO.",
  },
  {
    href: "https://www.hipdf.com/convert-from-jpg",
    imgUrl: "https://images.hipdf.com/images2022/icons/Image-to-Others.svg",
    title: "Convert from JPG",
    desc: "Convert JPG to Word, PPT, TXT, Excel and RTF.",
  },
  {
    href: "https://www.hipdf.com/image-resizer.html",
    imgUrl: "https://images.hipdf.com/images2022/icons/Resize-image.svg",
    title: "Resize image",
    desc: "Easily resize image by defining a percentage.",
  },
  {
    href: "https://www.hipdf.com/rotate-image",
    imgUrl: "https://images.hipdf.com/images2022/icons/rotate-images.svg",
    title: "Rotate image",
    desc: "Easily rotate your image in the preferred direction.",
  },
];

const CardContainer = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Convert to PDF</h2>
        <div className={styles.slider_row} id="slider">
          <CardItem data={convertToPdfData} slider={true} />
        </div>
        <div className={styles.btns}>
          <button title="scroll left" onClick={slideLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8 .4 34.3z" />
            </svg>
          </button>
          <button title="scroll right" onClick={slideRight}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>{" "}
          </button>
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>Convert from PDF</h2>
        <div className={styles.row}>
          <CardItem data={convertFromPdfData} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>Edit PDF</h2>
        <div className={styles.row}>
          <CardItem data={editPdfData} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>Organize PDF</h2>
        <div className={styles.row}>
          <CardItem data={organizePdfToolsData} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>Protect PDF</h2>
        <div className={styles.row}>
          <CardItem data={protectPDfData} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h2>Image tools</h2>
        <div className={styles.row}>
          <CardItem data={imageToolsData} />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
