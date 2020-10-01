let params = Deno.args;
console.log(params);

let createFile = () => {
  if (params[0] !== "create-file") {
    console.log(
      `${params[0]} is not a valid command, Did you mean 'create-file'`,
    );
    return false;
  } else if (!params[1]) {
    console.log(
      `You need to provide a name of a file`,
    );
    return false;
  } else {
    Deno.writeTextFileSync(`./${params[1]}`, "//This is your created file");
  }
};

createFile();
