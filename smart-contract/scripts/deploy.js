const { ethers } = require('hardhat')

const main = async () => {
  const santruptiFactory = await ethers.getContractFactory('SantruptiERC721')
  const SantruptiContract = await santruptiFactory.deploy()

  console.log('SANTRUPTI CONTRACT ADDRESS:', SantruptiContract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log('Error in deploying Contract >> ', error)
    process.exit(1)
  })


  //testing
  //SANTRUPTI CONTRACT ADDRESS: 0xEc10DF4ea6f30Ade37aAda68D558Ab4a6AAC2Eb0
  //      0x218897cD04f11fAeBe0223B4EB0ED66155Dcc2E5
  //SANTRUPTI CONTRACT ADDRESS: 0x4B0B0FDc1016Bb5c05F943369cCF20A273ddA1FD