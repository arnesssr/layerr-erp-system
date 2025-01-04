interface RateLimiterOptions {
    maxRequests: number;
    timeWindow: number;
}

export class RateLimiter {
    private requests: number[];
    private readonly maxRequests: number;
    private readonly timeWindow: number;

    constructor(options: RateLimiterOptions) {
        this.requests = [];
        this.maxRequests = options.maxRequests;
        this.timeWindow = options.timeWindow;
    }

    async checkLimit(): Promise<void> {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.timeWindow);
        
        if (this.requests.length >= this.maxRequests) {
            throw new Error('Rate limit exceeded');
        }
        
        this.requests.push(now);
    }
}
