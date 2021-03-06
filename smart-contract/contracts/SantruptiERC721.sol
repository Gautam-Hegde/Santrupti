// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SantruptiERC721 is ERC721URIStorage {
    uint256 SANTRUPTI_TOKEN_ID;

    constructor() ERC721("sentinelNFT", "SN") {}

    function mintNFT(address _userOne, address _userTwo, string memory tokenURI) public {
        _mint(_userOne, SANTRUPTI_TOKEN_ID);
        _setTokenURI(SANTRUPTI_TOKEN_ID, tokenURI);
         SANTRUPTI_TOKEN_ID++;

        _mint(_userTwo,SANTRUPTI_TOKEN_ID);
        _setTokenURI(SANTRUPTI_TOKEN_ID, tokenURI);
        SANTRUPTI_TOKEN_ID++;
    }
}