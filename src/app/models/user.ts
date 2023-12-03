export interface User {
      id?: number;
      firstName: string;
      lastName: string;
      email: string;
      created_at: string;
      verified_at?: string;
      rolesID?: number[];
      organizationName: string;
}
