# Blockchain-website

1. While trying to make changes in tailwind.config.js, make sure to install npm install @tailwindcss/forms in the client directory to not land onto any errors. (At 1:03:12) 
2. At 1:04:32 particularly MacBook M1 chip users might get an error with the installation. Simply paste this sudo npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers . solved it for me!
   <img width="864" alt="Screenshot 2023-10-29 at 12 44 35 AM" src="https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/9eb696a8-108e-4cb7-801a-30b2a7573b01">
3. Once the front end using ReactJs was done, i switched to smart_contract folder and installed the above dependencies. and then, to test if everything is installed and working perfectly or not, run npx hardhat test.
   this runs the test smart contract that had gotten installed. but, i faced this error,  <img width="864" alt="Screenshot 2023-10-29 at 2 00 31 AM" src="https://github.com/DrashtiSanjayShah/Blockchain-website/assets/94853646/0c0ff922-bbf4-48cf-9929-a15973513236">

   to solve this, simply run this command npm i @nomicfoundation/hardhat-toolbox.
