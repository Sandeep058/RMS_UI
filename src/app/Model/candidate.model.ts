export interface Candidate {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    department: string;
    resume?: File;
}