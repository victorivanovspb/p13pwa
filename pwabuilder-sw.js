self.addEventListener('install', (event) => {
    console.log('SW installed');
});

self.addEventListener('activate', (event) => {
    console.log('SW activated');
});

self.addEventListener('fetch', (event) => {
    console.log('SW fetched');
});
