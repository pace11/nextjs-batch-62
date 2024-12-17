// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const isHasAccess = req.headers['api-token'] === 'service-ryan'
  if (isHasAccess) {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(500).json({ message: 'Error Server'})
  }
}
