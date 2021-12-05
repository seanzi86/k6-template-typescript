import * as tests from "./tests";

export default () => {
  Object.values(tests).map(test => test());
}