// Minecraft Block Favicon Randomizer
// Changes favicon on every page refresh
// Automatically fetches icons from Minecraft Wiki via proxy

(function() {
    // List of local Minecraft block favicon files
    const blockIcons = [
        'Grass_Block.png',
        'Cobblestone.png',
        'Cake.png',
        'Oak_Door.png',
        'Obsidian.png',
        'Chest.png',
        'Crafting_Table.png',
        'Bookshelf.png',
        'Furnace.png',
        'TNT.png',
        'Glowstone.png',
        'Fire.gif',
        'Water.gif',
        'Glass.png',
        'Bedrock.png',
    ];

    // Select random favicon on each refresh
    function selectRandomFavicon() {
        const randomIndex = Math.floor(Math.random() * blockIcons.length);
        return blockIcons[randomIndex];
    }

    // Update favicon in the DOM
    function updateFavicon() {
        const selectedFilename = selectRandomFavicon();
        const faviconPath = '/assets/favicons/' + selectedFilename;
        const blockName = selectedFilename.replace('.png', '').replace('_', ' ');

        console.log('Random favicon:', blockName, 'Path:', faviconPath);
        setFaviconFromUrl(faviconPath, blockName);
    }


    // Set favicon from regular URL
    function setFaviconFromUrl(url, name) {
        // Remove ALL existing favicon links including different rel types
        const existingFavicons = document.querySelectorAll('link[rel*="icon"], link[rel*="shortcut"]');
        existingFavicons.forEach(link => link.remove());

        // Force browser to load new favicon by adding timestamp
        const timestampedUrl = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();

        // Add multiple favicon formats for better browser compatibility
        const faviconTypes = [
            { rel: 'icon', type: 'image/png' },
            { rel: 'shortcut icon', type: 'image/png' },
            { rel: 'apple-touch-icon', type: 'image/png' }
        ];

        faviconTypes.forEach(function(faviconType) {
            const link = document.createElement('link');
            link.rel = faviconType.rel;
            link.type = faviconType.type;
            link.href = timestampedUrl;
            document.getElementsByTagName('head')[0].appendChild(link);
        });

        console.log('Favicon updated to:', name, 'URL:', timestampedUrl);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateFavicon);
    } else {
        updateFavicon();
    }
})();