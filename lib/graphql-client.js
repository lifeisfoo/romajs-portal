export function GraphQLClient(query,variables){
  const finalQuery = JSON.stringify({query,variables})
  return fetch('https://api.meetup.com/gql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: finalQuery,
  })
  .then(res => res.json());
}