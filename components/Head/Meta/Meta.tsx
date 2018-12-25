import * as React from 'react';

interface IMetaProps {
  description: string;
}

export function Meta({ description }: IMetaProps) {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

Meta.defaultProps = {
  description: ''
};
