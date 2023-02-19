type postObjType = {
  id: number;
  val: string;
};

const LS = localStorage;

async function setData( newData: postObjType, key: string ): Promise<true | false> {
  if (!newData || !key) return false;

  const savedData: postObjType[] = await getData(key);
  savedData.push(newData);

  const datJson = JSON.stringify(savedData);
  LS.setItem(key, datJson);
  
  return true;
}

async function getData(key: string): Promise<postObjType[] | []> {
  const data = LS.getItem(key);
  
  if(data) return JSON.parse(data);
  
  return [];
}

async function removeData(key:string, id: number): Promise<void> {
  let savedData: postObjType[] = await getData(key);
  savedData = Array.from(savedData).filter( data => data.id !== id);
  
  const datJson = JSON.stringify(savedData);
  LS.setItem(key, datJson);
}

export { setData, getData, removeData };
