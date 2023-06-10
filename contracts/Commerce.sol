// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity >=0.8.17 <0.9.0;

contract Commerce {
    struct Product {
        uint id;
        uint price;
        address owner;
        bytes32 proof;
    }

    //contract owner
    address private owner;

    //mapping product_hash to Product
    mapping(bytes32 => Product) private owned_products;

    //mapping product_id to product_hash
    mapping(uint => bytes32) private owned_product_hash;

    //total products
    uint private totalProducts;

    function buyProduct(bytes16 product_id, bytes32 proof) external payable {
        bytes32 product_hash = keccak256(
            abi.encodePacked(product_id, msg.sender)
        );
        if (hasOwner(product_hash)) {
            revert("Product has owner");
        }
        uint id = totalProducts++;
        owned_product_hash[id] = product_hash;
        owned_products[product_hash] = Product({
            id: id,
            price: msg.value,
            proof: proof,
            owner: msg.sender
        });
    }

    function getTotalProducts() external view returns (uint) {
        return totalProducts;
    }

    function getProductHash(uint index) external view returns (bytes32) {
        return owned_product_hash[index];
    }

    function getProductByHash(
        bytes32 index_hash
    ) external view returns (Product memory) {
        return owned_products[index_hash];
    }

    function hasOwner(bytes32 product_hash) private view returns (bool) {
        return owned_products[product_hash].owner == msg.sender;
    }
}
