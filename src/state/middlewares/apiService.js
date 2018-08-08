import Amplify, { API } from "aws-amplify";
import aws_exports from "../../aws-exports";

Amplify.configure(aws_exports);

// let apiName = "sampleCloudApi";
// let path = "/items";

const apiService = store => next => action => {
  const nextResult = next(action);
  if (!action.meta || !action.meta.async) {
    return nextResult;
  }

  return API.get(action.meta.apiName, action.meta.path).then(
    response => {
      // console.info({ Response: response });
      next({
        type: `${action.type}_COMPLETED`,
        payload: response,
        meta: action.meta,
      });
    },
    error => {
      // console.error({ Error: error });
      next({
        type: `${action.type}_FAILED`,
        payload: error,
        meta: action.meta,
      });
    }
  );
};

export default apiService;
