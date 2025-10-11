import { connectDB } from "@/lib/db";
import Admin from "@/models/Admin";
import bcrypt from "bcryptjs";

export async function GET() {
  await connectDB();

  const existing = await Admin.findOne({ email: "admin@gmail.com" });
  if (existing) {
    return Response.json({ message: "Admin already exists" });
  }

  const hashedPass = await bcrypt.hash("123456", 10);
  await Admin.create({ email: "admin@gmail.com", password: hashedPass });

  return Response.json({ message: "✅ Admin created successfully!" });
}