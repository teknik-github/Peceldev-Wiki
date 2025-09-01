// src/components/HomepageFeatures/FeatureImage.tsx

import React from 'react';

type FeatureImageProps = {
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string;
  alt?: string;
  className?: string;
};

export default function FeatureImage({ Svg, image, alt, className }: FeatureImageProps) {
  if (Svg) {
    return <Svg className={className} role="img" />;
  }

  if (image) {
    return <img src={image} alt={alt} className={className} />;
  }

  return null;
}
