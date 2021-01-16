import cvVF from "./cvConstantsVF"
import projectVF from "./projectConstantVF";
import textVF from "./textConstVF";

import cvEN from "./cvConstantsEN"
import projectEN from "./projectConstantEN";
import textEN from "./textConstEN";

export default (isEnglish) => {
  return isEnglish ? {
    ...cvEN,
    ...projectEN,
    ...textEN
  } : {
    ...cvVF,
    ...projectVF,
    ...textVF
  }
};
