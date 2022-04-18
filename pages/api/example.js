import {data} from './data/exampleArr';


export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data)
  }
}