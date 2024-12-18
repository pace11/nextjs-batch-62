export const fetchingData = async ({ url = "", method = "GET", body = {} }) => {
  try {
    const res = await fetch(url, {
      method,
      ...(!['GET', 'DELETE'].includes(method) && {body})
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
