export function toBase64(file: File):string|any {
  return new Promise<any | string>((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = (err) => rej(err);
  });
}

export function parseWebApiError(response: any): string[] {
  const result : string [] = [];
    if(response.error){
      alert("error");
      if(typeof response.error === 'string'){
        result.push(response.error);
      }
      else{
        const mapErrors = response.error.errors;
        const entries = Object.entries(mapErrors);
        entries.forEach( (arr: any[]) => {
          const field = arr[0];
          arr[1].forEach((errorMessage: string) => {
            result.push(`${field} : ${errorMessage}`);
            console.warn(errorMessage);
          });
        });
      }
    }
  return result;
}
