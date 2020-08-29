export const create = (files) => {
  console.log('files', files);
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ files }),
  };

  return fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', options)
    .then(res => res.json())
    .then(data => data.sandbox_id)
};

export const open = (sandbox_id) => {
  if (sandbox_id) {
    window.open(`https://codesandbox.io/s/${sandbox_id}`, '_blank');
  }
};

export default {
  create,
  open,
};
