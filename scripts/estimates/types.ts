export interface RetainingWallEstimateData {
  estimateNumber: string;
  date: string;
  client: {
    name: string;
    address?: string;
  };
  jobLocation?: string;
  /** Wall length in metres. */
  wallLength: number;
  /** Wall height in metres. */
  wallHeight: number;
}
