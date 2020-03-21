const hobbitsModel = require("./hobbits-model")
const db = require("../data/config")

beforeEach(async () => {
    db.seed.run()
})

test("insert", async () => {
    const res = await hobbitsModel.insert({name: "bilbo"})
    expect(res.name).toBe("bilbo")
})

test("findById", async () => {
    const res = await hobbitsModel.findById(1)
    expect(res.name).toBe("sam")
})

test("update", async () => {
    const res = await hobbitsModel.update(1 , { name : "bilbo"})
    expect(res.name).toBe("bilbo")
})

// test('remove', async () => {
//     const res = await hobbitsModel.remove(1)
// })