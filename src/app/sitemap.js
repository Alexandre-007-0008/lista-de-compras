export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/products',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        }
    ]
}