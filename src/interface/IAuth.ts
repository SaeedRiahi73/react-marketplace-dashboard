export interface Itoken {
    token: string,
    // isLoading: boolean
}

export interface IAuthState {
    token: Itoken,
    logoutOpenDialog: boolean
}