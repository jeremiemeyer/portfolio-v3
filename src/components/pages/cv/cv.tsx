"use client"
import { useState, useCallback } from "react"
import { pdfjs, Document, Page } from "react-pdf"
import useResizeObserver from "use-resize-observer"
import type { PDFDocumentProxy } from "pdfjs-dist"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
import { Loader2 } from "lucide-react"

type PDFFile = string | File | null

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString()

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
}

export const Icons = {
  spinner: Loader2,
};

const resizeObserverOptions = {}

const maxWidth = 800

export default function Cv() {
  const [file, setFile] = useState<PDFFile>("./static/cv_jeremie_meyer.pdf")
  const [numPages, setNumPages] = useState<number>()
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number>()
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>()

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries

    if (entry) {
      setContainerWidth(entry.contentRect.width)
    }
  }, [])

  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages)
  }

  return (
    <div className="w-full md:p-8 lg:p-16 flex justify-center" ref={ref}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        loading={<Icons.spinner className="h-12 w-12 animate-spin" />}
      >
        {[...Array(numPages)].map((_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={width || undefined}
            loading={<Icons.spinner className="h-12 w-12 animate-spin" />}
          />
        ))}
      </Document>
    </div>
  )
}
