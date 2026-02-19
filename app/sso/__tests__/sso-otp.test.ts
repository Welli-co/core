import { type ChildProcess, spawn, execSync } from "child_process";
import { existsSync, unlinkSync } from "fs";
import { resolve } from "path";

let server: ChildProcess;
let BASE_URL: string;

const PORT = 3000 + Math.floor(Math.random() * 1000);

function waitForServer(url: string, timeoutMs = 60_000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = async () => {
      try {
        await fetch(url);
        resolve();
      } catch {
        if (Date.now() - start > timeoutMs) {
          reject(new Error(`Server did not start within ${timeoutMs}ms`));
        } else {
          setTimeout(check, 500);
        }
      }
    };

    check();
  });
}

beforeAll(async () => {
  BASE_URL = `http://localhost:${PORT}`;

  // Remove stale lock file if it exists
  const lockFile = resolve(process.cwd(), ".next/dev/lock");
  if (existsSync(lockFile)) {
    unlinkSync(lockFile);
  }

  server = spawn("npx", ["next", "dev", "-p", String(PORT)], {
    cwd: process.cwd(),
    stdio: "pipe",
    env: { ...process.env, NODE_ENV: "development" },
  });

  server.stderr?.on("data", (data: Buffer) => {
    console.error(`[next stderr] ${data.toString()}`);
  });

  await waitForServer(BASE_URL);
}, 90_000);

afterAll(() => {
  if (server && !server.killed) {
    server.kill("SIGTERM");
  }
});

describe("POST /sso/request-otp", () => {
  const url = () => `${BASE_URL}/sso/request-otp`;

  it("returns 400 when phone is missing from body", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data).toEqual({ error: "Phone number is required" });
  });

  it("returns 400 when body is empty object", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data).toEqual({ error: "Phone number is required" });
  });

  it("returns 200 with success message for valid phone", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "+573001234567" }),
    });

    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: "OTP sent successfully" });
  });
});

describe("POST /sso/validate-otp", () => {
  const url = () => `${BASE_URL}/sso/validate-otp`;

  it("returns 400 when phone is missing", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ otp: "123456" }),
    });

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data).toEqual({ error: "Phone number and OTP are required" });
  });

  it("returns 400 when otp is missing", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "+573001234567" }),
    });

    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data).toEqual({ error: "Phone number and OTP are required" });
  });

  it("returns 401 for invalid OTP code", async () => {
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: "+573001234567", otp: "000000" }),
    });

    expect(res.status).toBe(401);
    const data = await res.json();
    expect(data).toEqual({ error: "Invalid OTP" });
  });

  it("returns 200 with token and user for valid OTP", async () => {
    const phone = "+573001234567";
    const res = await fetch(url(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp: "123456" }),
    });

    expect(res.status).toBe(200);
    const data = await res.json();

    expect(data).toHaveProperty("token");
    expect(typeof data.token).toBe("string");
    expect(data.token.length).toBeGreaterThan(0);

    expect(data).toHaveProperty("user");
    expect(data.user).toEqual({
      firstname: "John",
      lastname: "Doe",
      email: "john@example.com",
      phone,
    });
  });
});
