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

export const saveDemoAuthSession = (session: IAuthSession): void => {
    localStorage.removeItem(AUTH_SESSION_KEY);

    if (session.role !== userRoleEnum.Demo) {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
        return;
    }

    sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
};

export const getDemoAuthSession = (): IAuthSession | null => {
    localStorage.removeItem(AUTH_SESSION_KEY);
    const session = readAuthSession(sessionStorage);

    if (session?.role === userRoleEnum.Demo) {
        return session;
    }

    sessionStorage.removeItem(AUTH_SESSION_KEY);
    return null;
};

export const clearAuthSession = (): void => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    localStorage.removeItem(AUTH_SESSION_KEY);
};
