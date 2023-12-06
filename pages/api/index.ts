import { todoController } from "@server/controller/todo";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  todoController.toggleDone(request, response);
  response.status(200).json({ message: "Toggle Done!" });
}
