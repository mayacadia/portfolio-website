import { useState } from 'react'
import { motion } from 'framer-motion'

const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton Loader */}
      {!isLoaded && !isError && (
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse ${className}`} />
      )}

      {/* Actual Image */}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        loading="lazy"
        {...props}
      />

      {/* Error State */}
      {isError && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}>
          <div className="text-center p-4">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Image not found</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LazyImage
