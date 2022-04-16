export const GTM_ID =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const pageview = (url: any) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
