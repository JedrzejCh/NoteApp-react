import React from 'react';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../../src/context';
const NotesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <ListWrapper items={context.note} />
      )}

    </AppContext.Consumer>
  );
}

export default NotesView;