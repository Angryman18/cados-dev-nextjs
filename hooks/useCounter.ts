const useCounter = (): Function[] => {
  const counter = (val: number): string => {
    const strVal: string = val?.toString();
    const strLeng: number = strVal?.length;

    if (strLeng >= 4) {
      const remainingStr: string = strVal.slice(0, -3);
      return remainingStr + "k";
    } else if (strLeng >= 6) {
      const remainingStr: string = strVal.slice(0, -6);
      return remainingStr + "M";
    }
    return strVal?.toString();
  };
  return [counter];
};

export default useCounter;
