const byteSize = (str) => {
   const blob = new Blob([str]);

  // Return the size of the Blob object, which is the byte size of the string
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
