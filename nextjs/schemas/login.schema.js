import { z } from "zod";

// login form validation rules
export const loginSchema = z.object({
  email: z.string().email("সঠিক email দাও"), // ভুল email হলে error দেখাবে

  password: z.string().min(6, "কমপক্ষে ৬ অক্ষরের password দাও"),
});
