import classNames from 'classnames';
import noop from 'lodash/noop';
import React from 'react';

import { MosaicContext } from './contextTypes';
import { CreateNode, MosaicKey } from './types';

export interface MosaicZeroStateProps<T extends MosaicKey> {
  createNode?: CreateNode<T>;
}

export class MosaicZeroState<T extends MosaicKey> extends React.PureComponent<MosaicZeroStateProps<T>> {
  static contextType = MosaicContext;
  context!: MosaicContext<T>;

  render() {
    return (
      <div className={classNames('mosaic-zero-state')}>
        <div></div>
        <h4>No Windows Present</h4>
        <div>{this.props.createNode && <button onClick={this.replace}>Add New Window</button>}</div>
      </div>
    );
  }

  private replace = () =>
    Promise.resolve(this.props.createNode!())
      .then((node) => this.context.mosaicActions.replaceWith([], node))
      .catch(noop); // Swallow rejections (i.e. on user cancel)
}
