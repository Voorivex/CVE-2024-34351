'use server'

import { redirect } from "next/navigation";

export async function create() {
  console.log('Server Side')
  return redirect("/?voorivex");
}