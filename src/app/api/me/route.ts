import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Ratchaporn Buanut",
    studentId: "660610790"
  });
};
