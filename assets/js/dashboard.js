import token from './token';

async function getTotalSupply() {
    const totalSupply = await token.methods.totalSupply().call();
    return totalSupply;
}

getTotalSupply().then((totalSupply) => {
    const totalSupplyElement = document.querySelector('.totalsupply span');
    totalSupplyElement.textContent = totalSupply;
}).catch((error) => {
    console.error("An error occurred while fetching the total supply:", error);
});