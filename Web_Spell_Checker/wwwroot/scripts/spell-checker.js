/**
 * Initializes WProofreader (Web Spell Checker) for Syncfusion Rich Text Editor
 * 
 * This function integrates the WProofreader spell checking engine with the
 * Syncfusion Blazor Rich Text Editor component by targeting its content container.
 * 
 * @param {string} sfId - The ID of the Syncfusion Rich Text Editor instance
 */
window.initializeWebSpellChecker = function (sfId) {
    // Verify Syncfusion Blazor interop is available
    if (!window.sfBlazor || !sfBlazor.instances) {
        console.warn('Syncfusion Blazor interop not available');
        return;
    }

    // Get the editor instance by ID
    const editor = sfBlazor.instances[sfId];
    if (!editor) {
        console.warn('Editor instance not found for ID:', sfId);
        return;
    }

    // Locate the Rich Text Editor content container
    const rteContainer = editor.element
        ? editor.element.querySelector('.e-rte-container')
        : null;

    if (!rteContainer) {
        console.warn('Rich Text Editor container not found');
        return;
    }

    // Configure WProofreader settings
    window.WEBSPELLCHECKER_CONFIG = {
        // Service ID from WebSpellChecker account
        // IMPORTANT: Replace with your own service ID for production
        // Get your service ID at: https://webspellchecker.com/
        serviceId: '5jlo7CLITikr84b',
        
        // Enable automatic spell checking as user types
        autoSearch: true,
        
        // Default language for spell checking
        // Supported: en_US, en_GB, es_ES, fr_FR, de_DE, etc.
        lang: 'en_US',
        
        // Target the Rich Text Editor container
        selectors: [
            { selector: rteContainer }            
        ],
        
        // Optional customization options:
        // theme: 'gray',              // UI theme: 'default' or 'gray'
        // enableGrammar: true,        // Enable grammar checking
        // enableAutoComplete: true,   // Enable auto-complete suggestions
    };

    /**
     * Attempts to initialize WProofreader with retry logic
     * 
     * WProofreader script may load asynchronously, so we retry
     * initialization until the API is available.
     */
    const tryInitialize = () => {
        if (window.WEBSPELLCHECKER && typeof window.WEBSPELLCHECKER.startAutoSearch === 'function') {
            // WProofreader API is ready, start spell checking
            window.WEBSPELLCHECKER.startAutoSearch();
            console.log('WProofreader initialized successfully');
        } else {
            // WProofreader not ready yet, retry after 300ms
            console.log('WProofreader not ready yet — retrying in 300ms...');
            setTimeout(tryInitialize, 300);
        }
    };

    // Begin initialization attempt
    tryInitialize();
};
