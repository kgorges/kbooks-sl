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

  const apiFunctions = {
    GET: (apiName, path, payload) => {
      return API.get(apiName, path, payload);
    },
    POST: (apiName, path, payload) => {
      // console.log({ action });
      return API.post(apiName, path, payload);
    },
  };

  return apiFunctions[action.meta.method](
    action.meta.apiName,
    action.meta.path,
    action.meta.payload
  ).then(
    response => {
      // console.info({ response });
      next({
        type: `${action.type}_COMPLETED`,
        payload: response,
        meta: action.meta,
      });
    },
    error => {
      // console.error({ error });
      next({
        type: `${action.type}_FAILED`,
        payload: error,
        meta: action.meta,
      });
    }
  );
};

export default apiService;
