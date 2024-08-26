export interface ProjectResponse {
  id:          number;
  name:        string;
  description: string;
  clientName:  string;
  task:        Task[];
}

export interface Task {
  id:          number;
  name:        string;
  description: string;
  status:      string;
}
