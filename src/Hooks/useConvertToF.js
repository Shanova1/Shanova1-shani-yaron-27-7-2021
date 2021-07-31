function useConvertToF() {
  const convertToF = (celsius) => {
    const fahrenheit = Math.round(((celsius * 9) / 5 + 32) * 100) / 100;
    return fahrenheit;
  };
  return { convertToF };
}

export default useConvertToF;
