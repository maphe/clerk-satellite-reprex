import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader)
    return Response.json({ message: 'No Authorization Header found' });

  const [type, token] = authHeader.split(' ') ?? [];
  if (type !== 'Bearer')
    return Response.json({ message: 'Invalid Authorization Header' });

  if (!token) return Response.json({ message: 'No token found' });

  try {
    const payload = jwt.verify(
      token,
      process.env['CLERK_PEM_PUBLIC_KEY'] as string,
      { algorithms: ['RS256'] }
    ) as jwt.JwtPayload;

    return Response.json({ token, payload });
  } catch (error) {
    return Response.json({ token: token, message: 'Invalid token', error });
  }
}
