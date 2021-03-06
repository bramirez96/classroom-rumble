export interface ISubItem {
  id: number;
  userId: number;
  codename: string;
  src: string;
  rotation: number;
  prompt: string;
  score: number;
  rumbleId?: number;
}

export interface ISubmission extends INewSubmission {
  id: number;
  created_at: Date;
}

export interface INewSubmission extends IDSResponse {
  s3Label: string;
  etag: string;
  userId: number;
  promptId: number;
  sourceId?: number;
  rumbleId?: number;
}

export interface IDSResponse {
  transcription: string;
  confidence: number;
  score: number;
  rotation: number;
}

// TODO rename this
export interface IRequestBody {
  submissionId: number;
  voterId: number;
  score1: number;
  score2: number;
  score3: number;
}
