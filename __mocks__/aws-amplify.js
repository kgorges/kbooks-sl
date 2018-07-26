const Amplify = jest.genMockFromModule("aws-amplify");

Amplify.configure = object => {};

const API = {
  get: (apiName, path) => {
    return new Promise((resolve, reject) => {
      resolve({});
    });
  },
};

export { API };
export default Amplify;
