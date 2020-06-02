import React from 'react';
import ListWrapper from '../../components/ListWrapper/ListWrapper'
import AppContext from '../../../src/context'
const TwitterView = () => {
  return (

    <AppContext.Consumer>
      {(context) => (
        <ListWrapper items={context.twitter} />
      )}

    </AppContext.Consumer>
  );
}

export default TwitterView;