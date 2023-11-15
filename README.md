# Blockchain-website

## DEMO


https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/26a74f57-a404-433c-a73d-60c7b2356bb8




1. While trying to make changes in tailwind.config.js, make sure to install npm install @tailwindcss/forms in the client directory to not land onto any errors. (At 1:03:12) 
2. At 1:04:32 particularly MacBook M1 chip users might get an error with the installation. Simply paste this sudo npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers. solved it for me!
   <img width="864" alt="Screenshot 2023-10-29 at 12 44 35 AM" src="https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/9eb696a8-108e-4cb7-801a-30b2a7573b01">
3. Once the front end using ReactJs was done, I switched to smart_contract folder and installed the above dependencies. and then, to test if everything is installed and working perfectly or not, run npx hardhat test.
   this runs the test smart contract that had gotten installed. but, i faced this error,  <img width="864" alt="Screenshot 2023-10-29 at 2 00 31 AM" src="https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/0c0ff922-bbf4-48cf-9929-a15973513236">

   to solve this, simply run this command npm i @nomicfoundation/hardhat-toolbox.
You can check this thread out on StackOverflow:**https://stackoverflow.com/questions/73431182/cannot-find-module-nomicfoundation-hardhat-toolbox** 

4. While trying to display a part of the public address, you would be using the .slice method. there is a chance that you will get this error
<img width="551" alt="Screenshot 2023-11-06 at 1 16 35 PM" src="https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/41c86019-787f-48d7-a879-59d88f0b8327">
   so, to make this work, instead of this code
   # export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
   use
   # export const shortenAddress = (address) => {
  if (!address) {
    return "Invalid Address";
  }

  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
};

5. Make sure that you are in the client folder when trying to use the commands "npm run build" or as i had used yarn 'yarn build'.
If you try to follow any of their videos, they ask to move out of the folders and come in the root directory to build the app. This unfortunately has not worked for me!🥹 

