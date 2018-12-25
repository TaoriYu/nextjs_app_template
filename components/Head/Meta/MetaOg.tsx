import * as React from 'react';

export interface IMetaOgProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

export function MetaOg({ url, description, image, title }: IMetaOgProps) {
  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}

MetaOg.defaultProps = {
  description: '',
  title: '',
  url: '',
  image: '',
};
