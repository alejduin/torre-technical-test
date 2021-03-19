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


export interface ProjectDetails {
    id: string,
    organization: [{
        name: string,
        picture: string,
    }],
    objective: string,
    attachments: [{
        caption: string
    }],
    serpTags: {
        jobLocation?: [{
            address:{
                addressCountry: string,
                addressLocality: string,
            }
        }]
        baseSalary: {
            currency: string,
            value: {
                maxValue: number,
                minValue: number,
                unitText: string
            }
        }
    }
    details: [{
        code: string,
        content: string
    }]
    strengths: [{
        experience: string,
        name: string
    }]
}