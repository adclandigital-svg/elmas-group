import { NextResponse } from "next/server";
import { supabase } from "../../../../lib/db.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log(email, password);

    // Query users using schema-qualified table name
    const { data, error } = await supabase
      .from("users") // just public.users
      .select("*")
      .eq("email", email);

    console.log(data, error);

    if (error || !data || data.length === 0) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const user = data[0];
    const isValid = await bcrypt.compare(password, user.password_hash);

    // if (!isValid) {
    //   return NextResponse.json(
    //     { error: "Invalid credentials" },
    //     { status: 401 },
    //   );
    // }

    return NextResponse.json({
      success: true,
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
