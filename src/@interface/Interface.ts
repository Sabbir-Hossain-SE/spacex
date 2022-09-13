export interface PaginationState {
    currentPage: number;
    pageLimit: number;
    totalItem: number;
}

export interface FilterInitialState {
    searchKey: string;
    otherFiltration: [];
}
