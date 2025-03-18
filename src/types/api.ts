export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ApiResponse<T> {
    data: T[];
    meta: {
        pagination: Pagination;
    };
}

export interface SingleApiResponse<T> {
    data: T;
} 