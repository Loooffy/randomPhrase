import generate from '../../../util/generate';

export default function handler(req, res) {
  const phrases = generate();

  res.status(200).json({ phrases });
}
