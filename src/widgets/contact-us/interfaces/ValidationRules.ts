interface ValidationRules {
    files: {
        maxSize: number,
        maxCount: number,
        approvedFormats: string[]
    }
}

export type { ValidationRules }