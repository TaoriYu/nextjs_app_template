import * as React from 'react';

export interface IMetaTwitterProps {
  url: string;
  image: string;
}

export function MetaTwitter({ image, url }: IMetaTwitterProps) {
  return (
    <>
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}

MetaTwitter.defaultProps = {
  url: '',
  image: '',
};
