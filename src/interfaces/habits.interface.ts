export interface IHabitsRequest {
    name: string
    description: string
    priority: number
    status?: number | undefined
    weekDays: string[]
    userId: string
}

export interface IweekDaysRequest {
    days: string
}