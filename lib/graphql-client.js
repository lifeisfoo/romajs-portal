export function GraphQLClient($query){
  return fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify($query),
  })
  .then(res => res.json());
}