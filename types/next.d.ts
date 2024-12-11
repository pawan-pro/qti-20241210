import { ReactNode } from 'react';

declare module 'next' {
  export interface PageProps {
    params: {
      slug: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
  }
}