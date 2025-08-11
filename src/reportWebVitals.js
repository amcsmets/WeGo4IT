const reportWebVitals = onPerfEntry => {
  // •	The function reportWebVitals accepts a callback onPerfEntry.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // •	It dynamically imports the web-vitals library (so it only loads if you use it).
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // •	It then calls these functions from web-vitals:
      getCLS(onPerfEntry); //o	getCLS: Cumulative Layout Shift — measures visual stability (how much layout shifts during loading).
      getFID(onPerfEntry); //o	getFID: First Input Delay — measures responsiveness (delay between user interaction and browser response).
      getFCP(onPerfEntry); //o	getFCP: First Contentful Paint — measures when the first text/image is painted
      getLCP(onPerfEntry); //o	getLCP: Largest Contentful Paint — measures when the largest visible content is rendered
      getTTFB(onPerfEntry); //o	getTTFB: Time to First Byte — measures server response time.
    });
    // •	Each metric function takes your callback onPerfEntry as argument — it calls your function with metric data when available.
  }
};

export default reportWebVitals;

// How to use it?
// In your index.js or elsewhere, you call it like this:
// js
// import reportWebVitals from './reportWebVitals';
// reportWebVitals(console.log);
// •	This example just logs metrics to the console.
// •	You can replace console.log with any function to send these metrics to analytics services (Google Analytics, etc.).
