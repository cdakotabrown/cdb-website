import { useEffect } from "react";

const SITE_NAME = "Dakota Brown";

export function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle ? `${SITE_NAME} | ${pageTitle}` : SITE_NAME;
  }, [pageTitle]);
}
