import classNames from 'classnames';
import noop from 'lodash/noop';
import React from 'react';

import { MosaicWindowContext } from '../contextTypes';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class SplitButton extends React.PureComponent<MosaicButtonProps> {
  static contextType = MosaicWindowContext;
  context!: MosaicWindowContext;

  render() {
    return createDefaultToolbarButton('Split Window', classNames('split-button'), this.split);
  }

  private split = () => {
    this.context.mosaicWindowActions
      .split()
      .then(() => {
        if (this.props.onClick) {
          this.props.onClick();
        }
      })
      .catch(noop); // Swallow rejections (i.e. on user cancel)
  };
}
