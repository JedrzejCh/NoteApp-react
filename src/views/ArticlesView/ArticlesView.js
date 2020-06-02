import React from 'react';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import AppContext from '../../../src/context';


const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <ListWrapper items={context.article} />
      )}

    </AppContext.Consumer>
  );
}

export default ArticlesView;