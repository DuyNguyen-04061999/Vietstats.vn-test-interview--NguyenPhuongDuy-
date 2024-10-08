export interface StoreCookiesType {
  token: string;
}

export class ClientCookiesValues {
  private store: StoreCookiesType = {
    token: "",
  };
  get value() {
    return this.store;
  }

  set value({ token }: StoreCookiesType) {
    // Nếu gọi method này ở server thì sẽ bị lỗi
    if (typeof window === "undefined") {
      throw new Error("Cannot set token on server side");
    }

    this.store = {
      token,
    };
  }
}

export const clientCookiesValues = new ClientCookiesValues();
