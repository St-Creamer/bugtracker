export const Fetch = async (
  url: string,
  method: string,
  payload?: object
):Promise<any> => {
  let data;
  try {
    data =  fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: method,
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return data;
      });
  } catch (err) {
    console.log(err);
  }
};
