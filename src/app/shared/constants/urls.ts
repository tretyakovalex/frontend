import { environment } from 'src/environments/environment';
const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const POSTS_URL = BASE_URL + '/api/posts';
