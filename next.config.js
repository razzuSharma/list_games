/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_ID:
      "496598067381-9i02ojtsg36k2d2602nakrdkhivrojud.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    NEXTAUTH_SECRET: "QZpqiWI8Kqasia2d3MM3xFvHz18Ja7tjS151/WA04QM=",
    GOOGLE_CLIENT_EMAIL:
      "usergamingspreadsheet@list-games-410415.iam.gserviceaccount.com",
    GOOGLE_PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDkC7bO+PsPLV/J\ntZKnT8TdM7xevCxizxZFa6FFjUArCU9rErztDRu1gREPkC/1tRcrFE7qgQirH79b\nTYzLtHXPA2MXtWeR1Tpo1uSAZ5BKQlxdRoE1nIW68G2+gdolk/huy7naMWUW9nS9\nfeqo95Y+pqsrBu6j8m/296j7cuaM3pg2DOYfJx2YI29LVmoc5xopgC13p3nifE+B\nEwEpJzV5rkxt5hDXLkBOuyV7SMD1eaVtjiPYMx27pPxVK+Tr47fOyt6nTLXbN5M4\nUdmxJRJe8ZSFztDOWt1IcVoaL/rgCtsKocg6J10LFIc1LxUfWGk+smJlcpnkuz3N\n/uotN/bfAgMBAAECggEAbbKa2h4X+vmLMecXqEctfnDEJNglC9TtNDCtj9z+KJWe\nb/XADtH26c0vzUpBX9MgVXc77P9sEZFAhiWcXGMvJolNEhsPuq2VHth8a64l0Srx\n7mabghQMmlvMls81Bk2TPIzglq6bH7wndP3Ms0ICMpoPDbAUfKYDKQyCa46ei9Uh\nTBgCO0Zww4tNYF4JbYC85BTHpLtNdHAOYil8TOalJKcX7ziejVN/xE96qOISYSo1\nczzz6VaWYsGypADdWxwjjogJvD5UGF9VkqE9AisPMj7ACbIfiw00sI9taCbxG0Kn\nFNM4Zjwj1jktemSDSJO2kh3RdhfOu+tNzLFtb/C+KQKBgQD6hpXcy5aLQFaUd8dh\nvC2P4+fBrH3XxqCdECGzugBD6qWl0PnqBqFPVoHE9A+W0MYffo+OA+WmbTWFNKTh\nTxNAU7Y0sIjUFIkwI/6+rj5DtpjPcXI0hdi82QChDysd4+kgSr6Ivs3rzuBbLcMn\n0ugsg6GeTFMYH/i3/wwom27JxwKBgQDpB2DM07pPbDwUqJkwX+Un3LDDpOhmhPC1\nxdi6/NEzJynoQoeZMfRXftN4X/rC3bZALf9Z96N5wYZ6uxuEazDHCgPyJeVAAPMk\nmvVg7L2Nd/ILWqBZWGPKe5AqUnauTIvLpwIj58Ciy46uMc1Veom77yzRPNi9KuTd\nvo0i4akqKQKBgCLBcSEEjYocDubiByMj/B4uPAS+bWb2A2pGxqYsc8T4VKrAZyt0\naASdt7sfMNp3dEUCReAp4j5IgFhOiWFImx8dffWpWBI0FyQ6mijR+4lhV6nPz0xC\nFWN9p3ywogavi7QTKoPGFMNWHAIKQzzPIa6rREy1wgFizhqYo5MunRwZAoGAROt4\ntru8M7dIQbfnrsX96X89DHAeiAuzgZ9lTVBusxlXLKlYn3eF08bf1o9UhAO83lh8\nWGiEggM5udzS86QcRhHxPtH0bqyZPO9TuXnrSgb6oF8KY8JfqUhISCwhi8V55x6a\n5HGrqLpZla2HFEvsppfDgpLja3dfPzIXXgSt2pkCgYEAriEMjL0WBxuyMKJAMNTD\n43V3R2eCzgcok0HYl6qJ4lbrFCiQ/DWk45+KlRNIdZJHRWc7dPT63apq+TpLULqn\nwpUMaps530HPGResednzdAlgWpIt7I4cHnLCc6AlqE9q9N2v+NLxnC8WeXXqSktQ\n1aESL3K6OGtyeZiIadKomdw=\n-----END PRIVATE KEY-----\n",
    GOOGLE_SHEET_ID: "1DNaIrtuOKvaW5YakHSF-rJdQB34HWQClA3AcLQbDy3c",
  },
  images: {
    // domains: ["lh3.googleusercontent.com","platform-lookaside.fbsbx.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
