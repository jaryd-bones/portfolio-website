const getSrcSet = (sources = []) =>
  sources.map(({ src, width }) => `${src} ${width}w`).join(", ")

const getLastSource = (sources = []) => sources[sources.length - 1]

const getFallbackSrc = (image) =>
  getLastSource(image?.jpg)?.src ??
  getLastSource(image?.webp)?.src ??
  getLastSource(image?.avif)?.src

const ResponsiveImage = ({
  image,
  alt,
  sizes,
  className = "",
  pictureClassName = "",
  loading = "lazy",
}) => {
  const fallbackSrc = getFallbackSrc(image)
  const jpgSrcSet = getSrcSet(image?.jpg)

  if (!fallbackSrc) {
    return null
  }

  return (
    <picture className={pictureClassName}>
      {image?.avif?.length > 0 && (
        <source
          type="image/avif"
          srcSet={getSrcSet(image.avif)}
          sizes={sizes}
        />
      )}

      {image?.webp?.length > 0 && (
        <source
          type="image/webp"
          srcSet={getSrcSet(image.webp)}
          sizes={sizes}
        />
      )}

      <img
        src={fallbackSrc}
        srcSet={jpgSrcSet || undefined}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
      />
    </picture>
  )
}

export default ResponsiveImage
