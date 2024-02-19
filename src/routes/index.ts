import { Router } from "express";
import { addUserToList } from "../services";

export const router: Router = (() => {
  const router = Router();
  router.post("/add-list", addUserToList);
  router.get("/test", (req, res) => {
    res.json({ message: "success" });
  });

  return router;
})();
