import classNames from 'classnames';
import React from 'react';

import { MosaicContext, MosaicRootActions, MosaicWindowContext } from '../contextTypes';
import { createDefaultToolbarButton, MosaicButtonProps } from './MosaicButton';

export class RemoveButton extends React.PureComponent<MosaicButtonProps> {
  static contextType = MosaicWindowContext;
  context!: MosaicWindowContext;

  render() {
    return (
      <MosaicContext.Consumer>
        {({ mosaicActions }) =>
          createDefaultToolbarButton('Close Window', classNames('close-button'), this.createRemove(mosaicActions))
        }
      </MosaicContext.Consumer>
    );
  }

  private createRemove(mosaicActions: MosaicRootActions<any>) {
    return () => {
      mosaicActions.remove(this.context.mosaicWindowActions.getPath());

      if (this.props.onClick) {
        this.props.onClick();
      }
    };
  }
}
