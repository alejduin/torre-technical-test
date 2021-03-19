export class ProfileList {
    results: [{
        name: string,
        username: string,
        picture: string,
        professionalHeadline: string,
        location: string,
        skills: [{
            name: string,
            weight: number
        }]
    }]
}

export class ProfileDetail {
    person: {
        professionalHeadline: string,
        picture: string,
        name: string,
        location: {
          country: string
        },
        summaryOfBio: string,
    }
    interests: [{
        name: string
    }]
    jobs: [{
        name: string,
        organizations: [{
            name: string
        }]
        fromYear: string,
        toYear: string
    }]
    education: [{
        name: string,
        organizations: [{
            name: string
        }]
        fromYear: string,
        toYear: string
    }]
    languages: [{
        language: string
    }]
    experiences: [{
        name: string,
        fromYear: string,
        toYear: string
    }]
}




