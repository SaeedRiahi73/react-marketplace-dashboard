import { userRoleEnum } from "@/enums/userRoleEnum";
import { IAuthSession } from "@/interface/IAuth";

const AUTH_SESSION_KEY = "authSession";

const isAuthSession = (value: unknown): value is IAuthSession => {
    if (!value || typeof value !== "object") return false;

    const session = value as Record<string, unknown>;

    return (
        typeof session.token === "string" &&
        typeof session.userName === "string" &&
        typeof session.roleId === "number" &&
        Object.values(userRoleEnum).includes(session.role as userRoleEnum) &&
        typeof session.expireAt === "string"
    );
};

const readAuthSession = (storage: Storage): IAuthSession | null => {
    const storedSession = storage.getItem(AUTH_SESSION_KEY);

    if (!storedSession) return null;

    try {
        const parsedSession: unknown = JSON.parse(storedSession);

        if (
            isAuthSession(parsedSession) &&
            !Number.isNaN(Date.parse(parsedSession.expireAt)) &&
            Date.parse(parsedSession.expireAt) > Date.now()
        ) {
            return parsedSession;
        }
    } catch {
        // داده نامعتبر در ادامه پاک می‌شود.
    }

    storage.removeItem(AUTH_SESSION_KEY);
    return null;
};

export const saveAuthSession = (
    session: IAuthSession,
    rememberMe: boolean,
): void => {
    const serializedSession = JSON.stringify(session);

    if (rememberMe) {
        localStorage.setItem(AUTH_SESSION_KEY, serializedSession);
        sessionStorage.removeItem(AUTH_SESSION_KEY);
        return;
    }

    sessionStorage.setItem(AUTH_SESSION_KEY, serializedSession);
    localStorage.removeItem(AUTH_SESSION_KEY);
};

export const getAuthSession = (): IAuthSession | null => {
    const temporarySession = readAuthSession(sessionStorage);

    return temporarySession ?? readAuthSession(localStorage);
};

export const clearAuthSession = (): void => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    localStorage.removeItem(AUTH_SESSION_KEY);
};
