export interface Project {
    results: [{
        id: string;
        objective: string,
        organizations: [{
            id: number,
            name: string,
            picture: string
        }],
        locations: [],
        members: [{
            subjectId: number,
            name: string,
            username: string,
            professionalHeadline: string,
            picture: string
        }]
    }]
}
