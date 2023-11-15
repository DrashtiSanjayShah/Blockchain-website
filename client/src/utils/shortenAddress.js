export const shortenAddress = (address) => {
    if (!address) {
      return "Invalid Address";
    }
  
    return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  };
  