import * as React from 'react';
import fs from 'fs';
import path from 'path';

const links = [
  '/static/semantic/site.min.css',
  '/static/semantic/reset.min.css',
  // '/static/semantic/accordion.min.css',
  // '/static/semantic/checkbox.min.css',
  // '/static/semantic/dropdown.min.css',
  // '/static/semantic/grid.min.css',
  // '/static/semantic/item.min.css',
  // '/static/semantic/message.min.css',
  // '/static/semantic/progress.min.css',
  // '/static/semantic/search.min.css',
  // '/static/semantic/statistic.min.css',
  // '/static/semantic/transition.min.css',
  // '/static/semantic/ad.min.css',
  // '/static/semantic/comment.min.css',
  // '/static/semantic/embed.min.css',
  // '/static/semantic/header.min.css',
  // '/static/semantic/label.min.css',
  // '/static/semantic/modal.min.css',
  // '/static/semantic/rail.min.css',
  '/static/semantic/segment.min.css',
  // '/static/semantic/step.min.css',
  // '/static/semantic/breadcrumb.min.css',
  '/static/semantic/container.min.css',
  // '/static/semantic/feed.min.css',
  '/static/semantic/icon.min.css',
  '/static/semantic/list.min.css',
  // '/static/semantic/nag.min.css',
  // '/static/semantic/rating.min.css',
  // '/static/semantic/shape.min.css',
  // '/static/semantic/sticky.min.css',
  '/static/semantic/button.min.css',
  // '/static/semantic/dimmer.min.css',
  // '/static/semantic/flag.min.css',
  '/static/semantic/image.min.css',
  // '/static/semantic/loader.min.css',
  // '/static/semantic/placeholder.min.css',
  // '/static/semantic/sidebar.min.css',
  '/static/semantic/menu.min.css',
  '/static/semantic/input.min.css',
];

export class SemanticLinks extends React.Component {
  constructor(props: {}) {
    super(props);

    if (process.env.SERVER) {
      const notExistingLinks = links.filter((link) => !fs.existsSync(path.join('./', link)));

      if (notExistingLinks.length > 0) {
        throw new Error(
          `Styles not found:\n${notExistingLinks.join('\n')}.\nYou may solve it by: npm run build:static`,
        );
      }
    }
  }

  public render() {
    return (
      <>
        { links.map((link) => <link type="text/css" rel="stylesheet" href={link} key={link} />) }
      </>
    );
  }
}
