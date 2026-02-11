// Listen for when a navigation is about to occur
chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    // Only process main frame navigation (not iframes)
    if (details.frameId !== 0) return;
    
    const url = new URL(details.url);
    
    // Check if this is a Google search
    if (url.pathname === '/search') {
      const searchParams = url.searchParams;
      const query = searchParams.get('q');
      
      // If there's a query and it doesn't already contain -ai
      if (query && !query.includes('-ai')) {
        // Add -ai to the end of the query
        const newQuery = query + ' -ai';
        searchParams.set('q', newQuery);
        
        // Redirect to the modified search URL
        chrome.tabs.update(details.tabId, {
          url: url.toString()
        });
      }
    }
  },
  {
    url: [
      { hostSuffix: 'google.com' },
      { hostSuffix: 'google.ca' },
      { hostSuffix: 'google.co.uk' },
      { hostSuffix: 'google.com.au' }
    ]
  }
);
