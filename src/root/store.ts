import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootEpic from './root.epic';

const epicMiddleware = createEpicMiddleware();
const enhanceDevTool = composeWithDevTools({});
// const configStore = () => {
export default createStore(
  rootReducer,
  enhanceDevTool(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);
// return store;
// };
