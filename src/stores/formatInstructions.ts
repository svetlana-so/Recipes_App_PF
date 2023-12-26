/* eslint-disable import/prefer-default-export */
export const formatInstructions = (instructions: string) => {
  return instructions.replace(/^\d+\.\t/gm, '');
};
