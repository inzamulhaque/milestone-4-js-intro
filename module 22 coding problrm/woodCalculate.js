function woodCalc(chairQty, tableQty, bedQty) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQty * perChairWood;
    const tableWood = tableQty * perTableWood;
    const bedWood = bedQty * perBedWood;

    const totalWood = chairWood + tableWood + bedWood;

    return `wood for chair: ${chairWood}cft, wood for table: ${tableWood}cft, wood for bed: ${bedWood}cft, total wood: ${totalWood}cft`
}

const chair = 7;
const table = 5;
const bed = 3;

const wood = woodCalc(chair, table, bed);

console.log(wood);