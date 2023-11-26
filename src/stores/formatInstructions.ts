export const formatInstructions = (instructions: string) => {
  return instructions.replace(/^\d+\.\t/gm, '')
}
