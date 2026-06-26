import { getIdentityToken } from "../../domain/auth";

export const getAuthorization = async () => {
  try {
    const token = await getIdentityToken();
    if (token != null) {
      return {
        Authorization: token.toString(),
        "x-scope": ScopeName.ADMINISTRATION,
      };
    }
  } catch (e) {
    return {
      // "x-api-key": "fake-api",
    };
  }
};

export const ScopeName = {
  ADMINISTRATION: "administration",
} as const;

export type ScopeName = (typeof ScopeName)[keyof typeof ScopeName];
