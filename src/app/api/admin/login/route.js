import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const jwtSecret = process.env.JWT_SECRET;

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return Response.json({ message: "Invalid email" }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return Response.json({ message: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign({ email: admin.email }, jwtSecret, {
      expiresIn: "1d",
    });

    return Response.json(
      { message: "Login successful" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
        },
      }
    );
  } catch (error) {
    return Response.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}