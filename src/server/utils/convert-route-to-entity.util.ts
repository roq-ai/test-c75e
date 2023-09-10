const mapping: Record<string, string> = {
  engineers: 'engineer',
  'hiring-requests': 'hiring_request',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
