// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.status(200).json({ success: true, token: '1234567890' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

export default handler;
