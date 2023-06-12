class ContractManager {
  static async getContract(name: string) {
    let contract = null;
    const res = await fetch(`contract_json/${name}.json`);
    if (res) {
      contract = await res.json();
    }
    return contract;
  }
}

export default ContractManager;
