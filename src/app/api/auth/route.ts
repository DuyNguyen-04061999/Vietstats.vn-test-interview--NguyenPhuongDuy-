import { signToken } from "@/lib";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  const result = (await request.json()) as { id: string; password: string };
  const filePath = path.join(process.cwd(), "db.json");
  const file = await fs.readFile(filePath, "utf-8");
  const jsonData = JSON.parse(file) as {
    users: Array<{
      id: number;
      password: string;
    }>;
  };
  if (jsonData.users.some((item) => item.id.toString() === result.id)) {
    const token = await signToken({
      payload: {
        user: result.id,
        password: result.password,
      },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,
      options: {
        expiresIn: "7d",
      },
    });
    return Response.json(
      { token },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${token}; Path=/; HttpOnly`, //setCookies
        },
      }
    );
  } else {
    return Response.json("", {
      status: 400,
      statusText: "data not found",
    });
  }
}
