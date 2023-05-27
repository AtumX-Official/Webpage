// http://localhost:3000/subscribe/api
import { NextRequest, NextResponse } from "next/server";
const mailchimp = require("@mailchimp/mailchimp_marketing");

const mailchimpConfig = {
  apiKey: process.env.MAILCHIMP_APIKEY,
  server: process.env.MAILCHIMP_SERVER,
};
mailchimp.setConfig(mailchimpConfig);

const listId = process.env.MAILCHIMP_AUDI_ID;
interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export async function POST(req: NextRequest) {
  const user: User = await req.json();

  if (!user.email) {
    return NextResponse.json({ error: "Email is required" });
  }

  try {
    const res = await mailchimp.lists.addListMember(listId, {
      email_address: user.email,
      status: "pending",
      merge_fields: {
        FNAME: user.firstName,
        LNAME: user.lastName,
      },
    });

    return NextResponse.json({ status: "SUCCESS" });
  } catch (error) {
    return NextResponse.json({ status: "ERROR", msg: error });
  }
}
