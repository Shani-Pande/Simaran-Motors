import { useEffect } from 'react'

/** Sets the document title and meta description for the current page. */
export function usePageTitle(title: string, description: string) {
  useEffect(() => {
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
