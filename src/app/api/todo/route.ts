import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectDB";
import { TodoModel } from "@/lib/models/todomodel";

export async function GET(request: NextRequest) {
  try {
    await connectToDB();
    const allTodos = await TodoModel.find();
    return NextResponse.json({ allTodos });
  } catch (error: any) {
    console.log(error);
    throw new Error("Unable to fetch todos, error in GET api");
  }
}

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    await connectToDB();
    const res = await TodoModel.create(req);
    return NextResponse.json({ message: "Todo created!", res });
  } catch (error: any) {
    console.log(error);
    throw new Error("Unable to add todo, error in POST api");
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const req = await request.json();
    await connectToDB();
    const res = await TodoModel.findByIdAndDelete(req.todoId);
    return NextResponse.json({ message: "Todo deleted!", res });
  } catch (error: any) {
    console.log(error);
    throw new Error("Unable to add todo, error in POST api");
  }
}
