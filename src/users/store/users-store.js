import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
};

const loadNextPage = async () => {
    loadUsersByPage(state.currentPage + 1);
};

const loadPreviousPage = async () => {
    throw new Error("NO implementado");
};

const onUserChanged = () => {
    throw new Error("NO implementado");
};

const reloadPage = async () => {
    throw new Error("NO implementado");
};

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
};
