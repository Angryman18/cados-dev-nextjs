interface Data {
  [name: string]: any;
}

const cachedData: Data = new Object();

const useCacheResponse = (): Function[] => {
  const getCachedResponse = (pageNo: number): void | null => {
    if (cachedData[pageNo.toString()]) {
      return cachedData[pageNo.toString()];
    } else {
      return null;
    }
  };

  const saveCachedResponse = (pageNo: number, data: any): void => {
    cachedData[pageNo.toString()] = data;
  };

  return [getCachedResponse, saveCachedResponse];
};

export default useCacheResponse;
