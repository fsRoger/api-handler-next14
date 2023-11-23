import { NextRequest, NextResponse } from 'next/server';

import prisma from "../../../lib/db.ts";

export async function GET(req: NextRequest) {
  try{
    const users = await prisma.user.findMany();
    return Response.json({message: "ok", users});
  } catch (err) {
    return NextResponse.json(
      {
        message:"error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function  POST(req: Request){
  const { name } = await req.json();
  try{
    const user = await prisma.user.create({
      data: {
        name,
      },
    });
    return Response.json({ message: "ok", user});
  } catch (err) {
    return NextResponse.json(
      {
        message:"error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return Response.json({ message: "ok", user});
  } catch (err) {
    return NextResponse.json(
      {
        message:"error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(req: Request) {
  const {id, name} = await req.json();
  try{
    const user =  await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return Response.json({message: "ok", user });
  } catch (err) {
    return NextResponse.json(
      {
        message:"error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}