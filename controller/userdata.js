import prisma from '../db/prisma.js'


export async function createUser(req, res) {
  const data = req.body;
  try {
    const creauser = await prisma.user_Data.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return res
      .status(201)
      .send({
        status: true,
        message: "user created succesfully",
        data: creauser,
      });
  } catch (err) {
    return res
      .status(500)
      .send({ status: true, message: "server Error", Error: err.message });
  }
}

export async function getuserData(req, res) {
  res.send("server runningon");
}
