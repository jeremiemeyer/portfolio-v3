//@ts-nocheck
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "@/../env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function isWord(str: string) {
  let alphaNumericFound = false
  for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
          alphaNumericFound = true
          return alphaNumericFound
      }
  }
  return alphaNumericFound
}

export function wordCounter(input: string) {
  const text = input.split(/\s+/)
  let wordCount = 0
  for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
          wordCount++
      }
  }
  return wordCount
}

const wordsPerMinute = 225

export function readingTime(text: string) {
    return Math.ceil(wordCounter(text) / wordsPerMinute)
}

// add TS
interface StringNode {
  type: string;
  key: null;
  ref: null;
  props: {
    children: string | ReactNode[];
  };
  _owner: null;
  _store: {};
}

interface ReactNode {
  type: string;
  key: null;
  ref: null;
  props: {
    children: ReactNode[] | string;
  };
  _owner: null;
  _store: {};
}

// Union type for the different types of nodes in the MDX data
type MDXNode = string | ReactNode;

// Function to extract text content from the MDX data
export function extractTextContent(data: MDXNode[]): string {
  return data.reduce((text: string, node: MDXNode) => {
    if (typeof node === 'string') {
      return text + node; // Concatenate strings
    } else if (node.props && node.props.children) {
      const childText = extractTextContent(
        Array.isArray(node.props.children) ? node.props.children : [node.props.children]
      );
      return text + childText;
    }
    return text;
  }, '');
};


export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('fr', { dateStyle: 'long' }).format(new Date(dateString))
}


export { env }
