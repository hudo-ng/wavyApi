import { comparePassword, createJWT, hashPassword } from "../auth/auth.js";
import prisma from "../db.js";

export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    res.status(401).end(e.message);
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });
    const isValid = await comparePassword(req.body.password, user?.password);

    if (!isValid) {
      res.status(401);
      res.json({ message: "Validation failed" });
      return;
    }
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    res.status(401).end("Error signing in");
  }
};
