import { Readable, Transform } from 'stream';
import { signal } from '/signal';


export function createReadableStream(str) {
  //when the function is invoked, a chunk of data is pushed to the stream. Each chunk is a character of a string that was received as a parameter
  const readableStream = new Readable({
    read() {
      for (let i = 0; i < str.length; i++) {
        this.push(str[i]);
      }
      this.push(null);
    }
  });

  const dict = {};

  //add a listener to the readable stream
  readableStream.on('data', (chunk) => {

    //check if chunk already exists in the dictionary
    if (dict[chunk]) {
      //if it does, send it to the signal
      signal('duplicate', chunk.toString());
    } else {
      //if it doesn't, add it to the dictionary
      dict[chunk] = true;
      //if a chunk is received, send it to the signal
      signal('received', chunk.toString());

    }
  });

  return readableStream;
}

export function createTransformStream() {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {

      //if a chunk is not alphabetic character, send it to the signal
      if (!/[a-zA-Z]/.test(chunk)) {
        signal('invalid', chunk.toString());
      } else {
        //push transformed chunk to the stream
        this.push(chunk.toString().toUpperCase());
        //if a chunk is alphabetic character, convert it to uppercase
        signal('transform', chunk.toString().toUpperCase());
      }
      callback();
    }
  });

  return transformStream;
}

export function createStreamablePipeline(str) {
  //createTransformStream should call the signal methord each time a chunk is received
  const transformStream = createTransformStream();
  //createReadableStream should call the signal methord each time a chunk is received
  const readableStream = createReadableStream(str);
  //pipe the readable stream and transform stream together
  readableStream.pipe(transformStream);
  return { readableStream, transformStream };
}