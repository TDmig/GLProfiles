export type platform = "Linux" | "Mac" | "Windows"
export type status = "running" | "ready"


export interface ProfileSummary {
    name: string
    folders: string[]
    status: status
    platform: platform
    lastRun: string
}


export interface Profile extends ProfileSummary {
    proxy: [string, string, string]
    language: string[]
    timezone: string
    resolution: string
    geolocation: string
    cookie: string[]
    notes: string
    profileID: string   
}
