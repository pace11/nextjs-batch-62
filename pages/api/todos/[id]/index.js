export default async function handler(req, res) {
  try {
    const response = await (
      await fetch(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`)
    ).json();

    res.status(200).json({
      message: "Ok",
      data: response,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Server" });
  }
}