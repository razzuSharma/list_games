// pages/api/submit.js
import { supabase } from "../utils/supabase";
export default async function handler(
  req: { method: string; body: { user_name: any; user_email: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: { message: any }): any; new (): any };
      json: { (arg0: { data: null }): any; new (): any };
    };
  }
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { user_name, user_email } = req.body;

  try {
    // Insert data into your Supabase table
    const { data, error } = await supabase
      .from("giveaway")
      .upsert([{ user_name, user_email }], { onConflict: "email" });

    if (error) {
      throw new Error(error.message);
    }

    return res.status(201).json({
      data,
    });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
}
