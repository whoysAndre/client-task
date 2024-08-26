
export interface TaskResponse {
  id:          number;
  name:        string;
  description: string;
  status:      string;
  project:     Project;
}

export interface Project {
  id:          number;
  name:        string;
  description: string;
  clientName:  string;
}
