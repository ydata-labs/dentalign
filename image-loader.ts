export default function cloudflareLoader({
    src,
    width,
    quality,
}: {
    src: string
    width: number
    quality?: number
}): string {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    return `https://dentalijn.be/cdn-cgi/image/${params.join(',')}/${src}`
}
