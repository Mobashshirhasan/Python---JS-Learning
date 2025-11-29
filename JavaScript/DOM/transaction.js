/* We need to calculate the debit amount, credit amount and balance of given array of object */

transaction = [
    {
        type: "credit",
        amount: 100
    },

    {
        type: "debit",
        amount: 50
    },

    {
        type: "credit",
        amount: 200
    }
]

const debitAmnt = transaction.filter( (e) => e.type == "debit")
                        .reduce( (acc , currVal) => {
    return acc + currVal.amount
},0)

const creditAmnt = transaction.filter( (e) => e.type == "credit")
                        .reduce( (acc , currVal) => {
    return acc + currVal.amount
},0)

console.log(`debitAmnt : ${debitAmnt}`);
console.log(`creditAmnt : ${creditAmnt}`);
