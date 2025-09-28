import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    MAINTENANCE_MODE: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_APP_NAME: z.string().min(1),
    NEXT_PUBLIC_APP_VER: z.string().min(1),
    MAINTENANCE_MODE: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_VER: process.env.NEXT_PUBLIC_APP_VER,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  },
});
