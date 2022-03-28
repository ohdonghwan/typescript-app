export interface responseOjb {
    requestCount: number,
    totalCount: number,
    response: {
        count: number,
        normal: number,
        slow: number,
        verySlow: number,
    }
}

export interface nodeColor {
    color: {
        r: string,
        g: string,
        b: string,
        a: string
    }
}