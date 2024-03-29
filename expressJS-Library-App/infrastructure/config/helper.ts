export default function emptyOrRows(rows: any) {
  if (!rows) {
    return [];
  }
  return rows;
}

async function iterator(array: Array<any>, callback: Function){
  await array.forEach(async item => {
    await callback(item)
  });
}
