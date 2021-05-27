export type platform = "Linux" | "Mac" | "Windows"
export type status = "running" | "ready"


export interface ProfileSummary {
    name: string
    folders: Array<string>
    status: status
    platform: platform
    lastRun: string
}


export interface Profile extends ProfileSummary {
    proxy: [string, string]
    language: Array<string>
    timezone: string
    resolution: string
    geolocation: string
    cookie: Array<string>
    notes: string
    profileID: string   
}
