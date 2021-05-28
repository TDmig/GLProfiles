import { Profile } from "types"



/**
 * Just faking simple API
 */


export const actualProfiles: Profile[] = [{
    'name': 'Test 123',
    'folders': ['Folder1', 'Folder2', 'JustFolder1'],
    'status': 'ready',
    'platform': 'Windows', 
    'lastRun': '20 May 2021',

    'proxy': ['HTTP Proxy', 'US (United States)', '127.0.0.1'],
    'language': ['English (UK)', 'English (US)', 'French'],
    'timezone': 'Madrid (+01:00)',
    'resolution': '1920x1080',
    'geolocation': 'Stuttgart',
    'cookie': ['CGIC', 'other 1', 'other 2', 'other 3'],
    'notes': 'Заметка с паролями и логинами для амазона',
    'profileID': '5ff85f4d355d435fe7b95a52',
},{
    'name': 'Moscow',
    'folders': ['Cities', 'Folder2'],
    'status': 'running',
    'platform': 'Linux', 
    'lastRun': '14 May 2021',

    'proxy': ['SOCKS4 Proxy', 'RU (Russia)', '127.0.4.1'],
    'language': ['French', 'English (UK)',],
    'timezone': 'London (+00:00)',
    'resolution': '1920x1080',
    'geolocation': 'Moscow',
    'cookie': ['CGIC', 'other 1', 'other 2', 'other 3', 'other 4', 'other5'],
    'notes': 'Пример заметки #2',
    'profileID': '71185f4d355d435fe7b95a53',
},{
    'name': 'rough-term',
    'folders': ['JustFolder1', 'Folder2'],
    'status': 'running',
    'platform': 'Mac', 
    'lastRun': '11 May 2021',

    'proxy': ['SOCKS5 Proxy', 'FR (France)', '192.168.15.24'],
    'language': ['French (FR)', 'English (UK)',],
    'timezone': 'London (+00:00)',
    'resolution': '1280x720',
    'geolocation': 'London',
    'cookie': ['CGIC', 'other 1', 'other 2', 'other 3', 'other 4', 'other5', 'other6'],
    'notes': '12 89 04 54 00 12',
    'profileID': '12895f4d355d435fe7b95a53',
},{
    'name': 'Los-Angeles',
    'folders': ['Folder2', 'Cities', 'JustFolder1', 'Folder1'],
    'status': 'ready',
    'platform': 'Linux', 
    'lastRun': '18 Oct 2020',

    'proxy': ['HTTP Proxy', 'RU (Russia)', '255.255.254.255'],
    'language': ['German (DE)', 'English (UK)', 'French (FR)'],
    'timezone': 'Dubai (+04:00)',
    'resolution': '1920x1080',
    'geolocation': 'Los-Angeles',
    'cookie': ['CGIC', 'other 1', ],
    'notes': '',
    'profileID': '00011f4d355d435fe7b95a53',
}]


export const possibleValues: Record<string, string[]> = {
    'proxy': ['HTTP Proxy', 'SOCKS4 Proxy', 'SOCKS5 Proxy'],
    'proxy__country': ['US (United States)', 'RU (Russia)', 'FR (France)'],
    'timezone': ['London (+00:00)', 'Madrid (+01:00)', 'New York (-05:00)', 'Dubai (+04:00)'],
    'resolution': ['1920x1080', '1280x720'],
}


export function editProfiles(profileID: string, field: string, value: any): Profile[] {
    const profile = actualProfiles.find((p) => p.profileID === profileID)
    if (profile === undefined) {
        throw Error('404 profile not found')
    }

    if (field === 'status') {
        profile.status = value
    } else if (field === 'notes') {
        profile.notes = value
    } else if (field === 'proxy') {
        profile.proxy[0] = value
    } else if (field === 'timezone') {
        profile.timezone = value
    } else if (field === 'resolution') {
        profile.resolution = value
    } else {
        throw Error('Trying to edit unknown field')
    }

    return [...actualProfiles]
}


export function allFolders(): string[] {
    let all: string[] = []

    actualProfiles.forEach(profile => {
        all = [...all, ...profile.folders]
    })

    return all.filter((item,index) => all.indexOf(item) === index)
}
