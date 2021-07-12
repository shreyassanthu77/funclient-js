export class FunClient {
  constructor(private apiUrl: string) {
    if (apiUrl.split("/").reverse()[0] !== "func") {
      if (apiUrl[apiUrl.length - 1] !== "/") apiUrl += "/";
      apiUrl += "func";
    }
  }

  public async call<T>(fun: string, ...args: any[]): Promise<T | string> {
    const res = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fun,
        args,
      }),
    });
    if (res.headers.get("Content-Type")?.includes("application/json")) {
      return (await res.json()) as T;
    }
    return await res.text();
  }

  public callable<T>(fun: string) {
    return async (...args: any[]) => {
      return await this.call<T>(fun, ...args);
    };
  }
}

export function createClient(apiUrl: string) {
  return new FunClient(apiUrl);
}
