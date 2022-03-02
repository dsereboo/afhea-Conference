import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);
// const url = 'https://w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';



const handler = async (req, res) => {
  const imageURL = req.url;
  const response = await fetch(imageURL); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Disposition', 'attachment; filename=dummy.png');
  await pipeline(response.body, res);
};

export default handler;