import { FastifyRequest } from "fastify/types/request";

export async function authenticate(request: FastifyRequest) {
  await request.jwtVerify();
}
