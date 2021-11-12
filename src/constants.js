const CONTRACT_ADDRESS = '0xAAacadE964d46adC0DD332910fa648A38b6F0D4B';

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber()
  };
};

export { CONTRACT_ADDRESS, transformCharacterData };
